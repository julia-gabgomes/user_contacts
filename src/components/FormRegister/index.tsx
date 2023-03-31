import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validations/userValidations";

import { StyledText } from "../../styles/typography";
import { Label } from "../../styles/label";
import { Input } from "../../styles/input";
import { ButtonPrimary } from "../../styles/buttons";
import { RegisterForm } from "./style";
import { IOnSubmit, IUserRegisterData } from "../../interfaces/register";

export const FormRegister = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOnSubmit>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data: IUserRegisterData) => registerUser(data);

  return (
    <RegisterForm onSubmit={handleSubmit(onSubmit)}>
      <Label>
        <StyledText typo="headline" color="gray-0" tag="h3">
          Nome completo
        </StyledText>
        <Input
          type="text"
          id="full_name"
          placeholder="Digite aqui seu nome"
          {...register("full_name")}
        />
      </Label>
      <p>{errors.full_name?.message}</p>

      <Label>
        <StyledText typo="headline" color="gray-0" tag="h3">
          E-mail
        </StyledText>
        <Input
          type="email"
          id="email"
          placeholder="Digite aqui seu e-mail"
          {...register("email")}
        />
      </Label>
      <p>{errors.email?.message}</p>

      <Label>
        <StyledText typo="headline" color="gray-0" tag="h3">
          Telefone
        </StyledText>
        <Input
          type="text"
          id="phone_number"
          placeholder="Digite aqui seu número"
          {...register("phone_number")}
        />
      </Label>
      <p>{errors.phone_number?.message}</p>

      <Label>
        <StyledText typo="headline" color="gray-0" tag="h3">
          Senha
        </StyledText>
        <Input
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
      </Label>
      <p>{errors.password?.message}</p>
      <Label>
        <StyledText typo="headline" color="gray-0" tag="h3">
          Confirmar senha
        </StyledText>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirme a senha"
          {...register("confirmPassword")}
        />
      </Label>
      <p>{errors.confirmPassword?.message}</p>
      <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
    </RegisterForm>
  );
};
