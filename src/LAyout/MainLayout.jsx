import React from "react";
import NavBar from "../Components/Header/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import CustomCursor from "../Components/CustomCursor";

export default function MainLayout() {
  return (
    <div>
      <NavBar></NavBar>
      <CustomCursor/>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
