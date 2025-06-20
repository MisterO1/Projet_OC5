import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './styles/index.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import HousingSheet from './pages/HousingSheet'
import Card from './components/Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/housingSheet/:logementId' element={<HousingSheet />} />
        <Route path='/about' element={<About />}/>
        <Route path='/test' element={<Card />}/>
        <Route path='/404' element={<Error />}/>
        <Route path='*' element={<Navigate to='/404' replace />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

