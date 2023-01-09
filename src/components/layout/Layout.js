import React from 'react'
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';
import "./Layout.style.css"


const Layout = () => {
  return (
    <>
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout