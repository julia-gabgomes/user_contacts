import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { useNavigate } from "react-router-dom";

import { Navbar, NavContainer } from "./style";
import { ButtonSmall } from "../../styles/buttons";

export const DashNavbar = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USER_ID");
    setUser(null);
    navigate("/");
  };

  return (
    <Navbar>
      <NavContainer>
        <ButtonSmall type="button" onClick={() => handleClick()}>
          Sair
        </ButtonSmall>
      </NavContainer>
    </Navbar>
  );
};
