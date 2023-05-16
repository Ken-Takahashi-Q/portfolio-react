import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App'
import './index.scss'
import Home from './Home';
import Contact from './Pages/Contact';
import Janken from './Pages/Janken/Janken';
import Form from './Pages/Form/Form';
import IPTracker from './Pages/IP-Tracker/ip-tracker';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/janken" element={<Janken />} />
        <Route path="/multi-step-form" element={<Form />} />
        <Route path="/ip-tracker" element={<IPTracker />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
