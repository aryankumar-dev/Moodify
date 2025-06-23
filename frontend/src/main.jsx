import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Getme from './components/Getme.jsx';
import Myfav from './components/Myfav.jsx';
import Recommended from './components/Recommended.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import Explore from './components/Explore.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/getme" element={<Getme />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/myfav" element={<Myfav />} />
        <Route path="/recommended/:id" element={<Recommended />} />


      </Routes>
    </BrowserRouter>
  </StrictMode>
)
