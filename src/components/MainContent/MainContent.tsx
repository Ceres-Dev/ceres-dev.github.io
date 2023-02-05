import React from 'react';
import { Outlet } from 'react-router-dom';

function MainContent() {
  return (
    <div className="w-screen h-[calc(100vh-64px)] flex overflow-y-auto">
      <Outlet />
    </div>
  );
}

export default MainContent;
