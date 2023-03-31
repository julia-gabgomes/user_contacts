import * as yup from "yup";

export const registerSchema = yup
  .object({
    full_name: yup.string().required("O campo nome é obrigatório"),
    email: yup
      .string()
      .email("Insira um e-mail válido")
      .required("O campo e-mail é obrigatório"),
    phone_number: yup.string().required("O campo telefone é obrigatório"),
    password: yup
      .string()
      .matches(/(\d)/, "Deve conter ao menos um número")
      .matches(/(\W)|_/, "Deve conter um caracter especial")
      .matches(/.{8,}/, "Deve ter no minimo 8 digitos")
      .required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  })
  .required();
