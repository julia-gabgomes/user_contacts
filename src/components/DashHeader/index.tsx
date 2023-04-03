import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { IUserContext } from "../../contexts/UserContext";

import { StyledText } from "../../styles/typography";
import { Header, DashHeaderContainer } from "./style";

export const DashHeader = () => {
  const { user } = useContext<IUserContext>(UserContext);

  return (
    <Header>
      <DashHeaderContainer>
        <StyledText typo="title-1" color="gray-3" tag="h2">
          Bem vindo(a), {user?.full_name}!
        </StyledText>
      </DashHeaderContainer>
    </Header>
  );
};
