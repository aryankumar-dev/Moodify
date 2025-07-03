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
import VerifyEmail from './components/VerifyEmail.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/getme" element={<ProtectedRoute><Getme /></ProtectedRoute>} />
        <Route path="/explore" element={<ProtectedRoute><Explore /></ProtectedRoute>} />
        <Route path="/myfav" element={<ProtectedRoute><Myfav /></ProtectedRoute>} />
        <Route path="/recommended/:id" element={<ProtectedRoute><Recommended /></ProtectedRoute>} />
        
        <Route path="/verifyEmail/:token" element={<VerifyEmail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
