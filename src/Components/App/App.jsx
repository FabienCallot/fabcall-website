import Home from '../Home/Home';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from '../../Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
