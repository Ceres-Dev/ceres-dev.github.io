import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainContent from './components/MainContent/MainContent';
import About from './components/MainContent/Pages/About';
import Blogs from './components/MainContent/Pages/Blogs';
import Downloads from './components/MainContent/Pages/Downloads';
import Home from './components/MainContent/Pages/Home';
import Source from './components/MainContent/Pages/Source';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />}>
            <Route index element={<Home />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="source" element={<Source />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

