import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Nutti from "./components/Nutti";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/nutti" element={<Nutti />} />
      </Routes>
    </>
  );
};

export default App;
