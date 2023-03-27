import { LoginBox, LoginContainer } from "./style";
import { FormLogin } from "../../components/FormLogin";

export const Login = () => {
  return (
    <LoginContainer>
      <LoginBox>
        <FormLogin />
      </LoginBox>
    </LoginContainer>
  );
};
