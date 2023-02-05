import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
  const [MobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  function isMobileNavOpen() {
    if (MobileNavIsOpen) {
      return 'flex';
    } else {
      return 'hidden';
    }
  }

  return (
    <div className="w-screen h-16 bg-[#181818]/80 backdrop-blur-md flex items-center">
      <img src={Logo} alt="Valence" className="w-12 h-12 ml-6" />
      <div className="DesktopNav w-auto h-full ml-auto ">
        <li className="Link w-auto h-full flex items-center justify-center px-3 mr-3 relative flex-col">
          <a className=" relative inline-block">Home</a>
        </li>
        <li className="Link w-auto h-full flex items-center justify-center px-3 mr-3 relative flex-col">
          <a className="relative inline-block">Downloads</a>
        </li>
        <li className="Link w-auto h-full flex items-center justify-center px-3 mr-3 relative flex-col">
          <a className="relative inline-block">Repository</a>
        </li>
        <li className="Link w-auto h-full flex items-center justify-center px-3 mr-3 relative flex-col">
          <a className="relative inline-block">Blog</a>
        </li>
        <li className="Link w-auto h-full flex items-center justify-center px-3 mr-3 relative flex-col">
          <a className="relative inline-block">About</a>
        </li>
      </div>
      <div
        className={`flex-col w-full h-auto MobileNav absolute top-16 bg-[#181818]/80 backdrop-blur-md ${isMobileNavOpen()} `}
      >
        <li className="w-auto h-auto flex items-center justify-center py-3 mb-3 relative flex-col">
          <a className=" relative inline-block">Home</a>
        </li>
        <li className="w-auto h-auto flex items-center justify-center py-3 mb-3 relative flex-col">
          <a className="relative inline-block">Downloads</a>
        </li>
        <li className="w-auto h-auto flex items-center justify-center py-3 mb-3 relative flex-col">
          <a className="relative inline-block">Repository</a>
        </li>
        <li className="w-auto h-auto flex items-center justify-center py-3 mb-3 relative flex-col">
          <a className="relative inline-block">Blog</a>
        </li>
        <li className="w-auto h-auto flex items-center justify-center py-3 mb-3 relative flex-col">
          <a className="relative inline-block">About</a>
        </li>
      </div>
      <button
        className="w-12 h-12 my-auto ml-auto mr-2 rounded-full bg-white/10 backdrop-blur-md HamburgerBtn"
        onClick={() => setMobileNavIsOpen(!MobileNavIsOpen)}
      >
        <div className="w-6 h-[2px] rounded-lg mr-3 flex flex-shrink-0 bg-slate-200" />
        <div className="w-4 h-[2px] rounded-lg mr-3 flex flex-shrink-0 bg-slate-200 mt-[7px]" />
        <div className="w-6 h-[2px] rounded-lg mr-3 flex flex-shrink-0 bg-slate-200 mt-[7px]" />
      </button>
    </div>
  );
}

export default Navbar;