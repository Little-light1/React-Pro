import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./app";
import Bpp from "./bpp";

const BasicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<App />} />
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/mainb" element={<Bpp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BasicRouter;
