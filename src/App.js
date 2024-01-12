import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Nutti from "./components/Nutti";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Main />} />
        <Route path={process.env.PUBLIC_URL + "/nutti"} element={<Nutti />} />
      </Routes>
    </>
  );
};

export default App;
