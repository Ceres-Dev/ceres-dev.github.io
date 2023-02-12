import React from 'react';
import Logo from '../../../assets/logo.png';

function Home() {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto overflow-x-hidden">
      <div className="w-screen h-[calc(100vh-64px)] flex flex-col items-center justify-center flex-shrink-0">
        <img src={Logo} className="w-44 h-44" />
        <span className="Quantum text-8xl text-transparent bg-gradient-to-r uppercase bg-clip-text from-[#DC2626] to-[#e54242] mt-8">Valence</span>
      </div>
    </div>
  );
}

export default Home;
