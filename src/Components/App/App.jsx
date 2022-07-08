import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { currentHeight, scrollToTop } from '../../Hooks/scrollToTop';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import './App.scss';

function App() {
  //state for display or not the button scrollToTop
  const [height, setHeight] = useState(0);

  let breakpoint = 150;

  useEffect(() => {
    currentHeight(setHeight);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Home />} />
        <Route path="/about-me" element={<Home />} />
      </Routes>
      {/* button scrollToTop it appears if height < breakpoint */}
      {breakpoint < height && (
        <Button
          clickEvent={() => {
            scrollToTop();
          }}
          className="button-to-top"
          text="&#8679;"
        />
      )}
    </div>
  );
}

export default App;
