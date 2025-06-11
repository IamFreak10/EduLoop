import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
import DarkMode from '../Pages/Shared/DarkMode/DarkMode';

const RootLayout = () => {
  return (
    <>
      <Navbar></Navbar>
        <DarkMode></DarkMode>
        <div className='max-w-[90%] mx-auto p-5 '><Outlet></Outlet></div>
      
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
