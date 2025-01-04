import React from "react";
import NavBar from "../Components/Header/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

export default function MainLayout() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
