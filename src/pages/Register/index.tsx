import { FormRegister } from "../../components/FormRegister";

import { StyledText } from "../../styles/typography";
import {
  RegisterContainer,
  RegisterHeader,
  RegisterBox,
  RegisterBoxHeader,
} from "./style";
import { StyledLink } from "../../styles/link";

export const Register = () => {
  return (
    <RegisterContainer>
      <RegisterHeader>
        <StyledLink to="/" type="gray-small">
          Voltar
        </StyledLink>
      </RegisterHeader>
      <RegisterBox>
        <RegisterBoxHeader>
          <StyledText typo="title-3" color="gray-0" tag="h2">
            Crie sua conta
          </StyledText>
        </RegisterBoxHeader>
        <FormRegister />
      </RegisterBox>
    </RegisterContainer>
  );
};
