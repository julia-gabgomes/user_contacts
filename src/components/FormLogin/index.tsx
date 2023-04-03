import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

// import { z } from "zod";
import * as yup from "yup";

import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { yupResolver } from "@hookform/resolvers/yup";

import { Login } from "../../interfaces";

import { Label } from "../../styles/label";
import { StyledText } from "../../styles/typography";
import { Form, FormLoginContainer, FormFooter } from "./style";
import { Input } from "../../styles/input";
import { ButtonPrimary } from "../../styles/buttons";
import { StyledLink } from "../../styles/link";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("Insira um e-mail válido")
      .required("O campo e-mail é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
  })
  .required();

// type Login = z.infer<typeof loginSchema>;

export const FormLogin = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: yupResolver(loginSchema),
  });

  console.log(errors);

  const onSubmit = (data: Login) => {
    loginUser(data);
  };

  return (
    <FormLoginContainer>
      <StyledText typo="title-3" color="gray-0" tag="h2">
        Login
      </StyledText>
      <Form onSubmit={handleSubmit(onSubmit as any)}>
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
        {/* <StyledText typo="helper-text" color="gray-4" tag="p">
          {errors.email?.message as any}
        </StyledText> */}
        <p>{errors.email?.message as any}</p>

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
        {/* <StyledText typo="helper-text" color="gray-4" tag="p">
          {errors.password?.message as any}
        </StyledText> */}
        <p>{errors.password?.message as any}</p>

        <ButtonPrimary type="submit">Entrar</ButtonPrimary>
      </Form>

      <FormFooter>
        <StyledText typo="headline-bold" color="gray-1" tag="span">
          Ainda não possui uma conta?
        </StyledText>
        <StyledLink to="/register" type="light-gray-medium">
          Cadastre-se
        </StyledLink>
      </FormFooter>
    </FormLoginContainer>
  );
};
