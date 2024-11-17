import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import BecomePartner from './Components/BecomePartner/BecomePartner';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import NewGroup from './Components/NewGroup/NewGroup';
import SocialMediaProfile from './Components/NewOuting/NewOuting';
import Profile from './Components/Profile/Profile';
import SignUp from './Components/SignUP/SignUp';
import MeshwarAdminDashboard from './Components/Dashboard/Dashboard';
import Admin from './Components/Admin/Admin';
import Community from './Components/Community/community';
import LoginAdmin from './Components/Dashboard/LoginAdmin';
function App() {
 
  return (
    <>

      <BrowserRouter>
        <Routes>
        <Route path="admin" element={<Admin/>} />
        <Route path="Dashboard" element={<MeshwarAdminDashboard />} />
        <Route path="BecomePartner" element={<BecomePartner />} />
        <Route path="Community" element={<Community />} />
          <Route path="/" element={<Home />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="NewGroup" element={<NewGroup />} />
          <Route path="NewOuting" element={<SocialMediaProfile/>} />
          <Route path="Profile" element={<Profile />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="LoginAdmin" element={<LoginAdmin />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
