import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Preview from './routes/Preview.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-container">
        <div className="global-gradient">
          <Routes>
            <Route path="/" element={<Preview />} />
          </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;