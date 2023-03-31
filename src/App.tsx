import React from "react";
import "./App.css";
import { GlobalStyle } from "./styles/global";
import RoutesMain from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <UserProvider>
        <ToastContainer limit={3} />
        <RoutesMain />
      </UserProvider>
    </div>
  );
};

export default App;
