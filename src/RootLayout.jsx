import React from "react";
import { Outlet } from "@tanstack/react-router";
import Navbar from "./shared/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
