import Home from '../Home/Home';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
