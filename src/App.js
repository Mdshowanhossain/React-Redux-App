import React from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import FetchData from "./Components/Counter/FetchData";
const App = () => {
  return (
    <>
      <Counter />
      <FetchData />
    </>
  );
};

export default App;
