/*
 * @Author: shimmer
 * @Date: 2022-04-23 08:29:50
 * @LastEditors: shimmer
 * @LastEditTime: 2022-05-10 10:13:55
 * @Description:
 *
 */
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./app";
import Bpp from "./bpp";
import Cpp from "./cpp";

const routesProps = { data: "我是路由的参数" };

const BasicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<App {...routesProps} />} />
        <Route path="/mainb" element={<Bpp />} />
        <Route path="/mainc" element={<Cpp />} />
        <Route path="/" element={<Navigate to="/main" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BasicRouter;
