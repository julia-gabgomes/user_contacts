import { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { notifySuccess, notifyError } from "../notifications/index";
import axios from "axios";
import { IRegisterUserData } from "../interfaces/register";

import { Login, LoginResponse, UserProviderProps } from "../interfaces";

//-----------------------------INTERFACES------------------------------//

export interface IUserTechs {
  id: string;
  title: string;
  status: string;
}

export interface IUser {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  created_at: Date;
  // contacts: IUserTechs[] | null;
}

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  loginUser(data: Login): Promise<void>;
  registerUser(data: IRegisterUserData): Promise<void>;
  loading: boolean;
  techs: IUserTechs[] | null;
  setTechs: React.Dispatch<React.SetStateAction<IUserTechs[] | null>>;
}

//--------------------------------------------------------------------//

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [techs, setTechs] = useState<IUserTechs[] | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await api.get<IUser>("/profile");

          setUser(data);
          //   setTechs(data.techs);

          navigate("/dashboard", { replace: true });
        } catch (error) {
          if (axios.isAxiosError(error)) {
            localStorage.removeItem("@TOKEN");
            localStorage.removeItem("@USER_ID");
          }
        }
      }

      setLoading(false);
    };

    loadUser();
  }, []);

  const loginUser = async (loginData: Login): Promise<void> => {
    try {
      const { data } = await api.post<LoginResponse>("/sessions", loginData);
      api.defaults.headers.common.authorization = `Bearer ${data.token}`;
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USER_ID", data.user.id);
      setUser(data.user);
      //   setTechs(data.user.techs);
      notifySuccess("Login realizado com sucesso!");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        notifyError(`${error.response?.data.message}`);
      }
    }
  };

  const registerUser = async (data: IRegisterUserData): Promise<void> => {
    try {
      await api.post<IUser>("/users", data);
      navigate("/");
      notifySuccess("Cadastro realizado com sucesso! Faça seu login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        notifyError(`${error.response?.data.message}`);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        registerUser,
        loading,
        techs,
        setTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
