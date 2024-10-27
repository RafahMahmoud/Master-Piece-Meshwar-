import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import BecomePartner from './Components/BecomePartner/BecomePartner';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import NavBar from './Components/NavBar/NavBar';
import NewGroup from './Components/NewGroup/NewGroup';
import SocialMediaProfile from './Components/NewOuting/NewOuting';
import OutDetails from './Components/OutDetails/OutDetails';
import Profile from './Components/Profile/Profile';
import {Rating} from './Components/Rating/Rating';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import { DisabledRating } from './Components/Rating/Rating';
import SignUp from './Components/SignUP/SignUp';
import MeshwarAdminDashboard from './Components/Dashboard/Dashboard';
import Qestionair from './Components/Questionair/Questionair';
import Admin from './Components/Admin/Admin';
import Community from './Components/Community/community';

function App() {
 
  return (
    <>

      <BrowserRouter>
        <Routes>
        <Route path="admin" element={<Admin/>} />
        <Route path="Questionair" element={<Qestionair />} />
        <Route path="Dashboard" element={<MeshwarAdminDashboard />} />
        <Route path="BecomePartner" element={<BecomePartner />} />
        <Route path="Community" element={<Community />} />
          <Route path="/" element={<Home />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="NewGroup" element={<NewGroup />} />
          <Route path="NewOuting" element={<SocialMediaProfile/>} />
          <Route path="OutDetails" element={<OutDetails />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="ResetPassword" element={<ResetPassword/>} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
