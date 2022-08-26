import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './compnents/Home';
import Nav from './compnents/Nav';
import Quote from './compnents/Quote';
import './index.css';
import './App.css';
import Calculator from './compnents/Calculator';

function App() {
  return (
    <div className="App">

      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
