import React from "react";
import "./App.css";
import { GlobalStyle } from "./styles/global";
import RoutesMain from "./routes";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />

      <RoutesMain />
    </div>
  );
};

export default App;
