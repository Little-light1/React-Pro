import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./app";
import Bpp from "./bpp";

const routesProps = { data: "我是路由的参数" };

const BasicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<App {...routesProps} />} />
        <Route path="/mainb" element={<Bpp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BasicRouter;
