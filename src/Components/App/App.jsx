import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { currentHeight, scrollToTop } from "../../utils/scrollToTop";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Cv from "../Cv/Cv";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import "./App.scss";

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
        <Route path="/cv" element={<Cv />} />
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
      <Footer />
    </div>
  );
}

export default App;
