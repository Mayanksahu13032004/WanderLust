import React from "react";
import Navbar from "./components/Navbar.jsx/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";


function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
