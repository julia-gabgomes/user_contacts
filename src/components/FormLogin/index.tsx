import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "../../styles/label";
import { StyledText } from "../../styles/typography";
import { Form, FormLoginContainer, FormFooter } from "./style";
import { Input } from "../../styles/input";
import { ButtonPrimary } from "../../styles/buttons";
import { StyledLink } from "../../styles/link";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type Login = z.infer<typeof loginSchema>;

export const FormLogin = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

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
        <StyledText typo="helper-text" color="gray-4" tag="p">
          {errors.email?.message as any}
        </StyledText>

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
        <StyledText typo="helper-text" color="gray-4" tag="p">
          {errors.password?.message as any}
        </StyledText>

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
