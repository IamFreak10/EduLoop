import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
import DarkMode from '../Pages/Shared/DarkMode/DarkMode';
import RootBG from './RootBG';

const RootLayout = () => {
  return (
    <div className="relative min-h-screen">
      <RootBG />
      <Navbar />
      <DarkMode />
      <div className="max-w-[90%] mx-auto p-5 min-h-[80vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
