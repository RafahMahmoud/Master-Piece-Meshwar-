import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import logo from '../../assets/meshwar-logo.png';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosConfig'; 

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = async () => {
    try {
      const res = await axiosInstance.get('/auth/check-status');
      if (res.status === 200) {
        setIsLoggedIn(true);
        const userProfile = await axiosInstance.get('/info/user-profile');
        if (userProfile.data.profilePic) {
          setProfileImage(`http://localhost:3003/${userProfile.data.profilePic}`);
        }
      }
    } catch (err) {
      console.error("Error checking status:", err);
      setIsLoggedIn(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await axiosInstance.post('/auth/logout');
      setIsLoggedIn(false);
      setProfileImage('');
      navigate('/'); 
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleProfileClick = () => {
    navigate('/Profile');
  };

  return (
    <header className="flex justify-between w-full items-center px-[7rem] py-[1rem] bg-white drop-shadow-lg sticky top-0 z-50">
      <div className="text-2xl font-arabic text-green-600">
        <img className="logo-img h-[2.5rem] w-[7.5rem]" src={logo} alt="Meshwar" />
      </div>
      <nav className="hidden md:flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) => `text-black hover:bg-black hover:text-white px-4 py-2 rounded ${isActive ? 'bg-black text-white' : ''}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/Community"
          className={({ isActive }) => `text-black hover:bg-black hover:text-white px-4 py-2 rounded ${isActive ? 'bg-black text-white' : ''}`}
        >
          Community
        </NavLink>
        <NavLink
          to="/BecomePartner"
          className={({ isActive }) => `text-black hover:bg-black hover:text-white px-4 py-2 rounded ${isActive ? 'bg-black text-white' : ''}`}
        >
          Become a partner
        </NavLink>
        {isLoggedIn ? (
          <>
            <img
              src={profileImage || 'https://via.placeholder.com/40'}
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
              onClick={handleProfileClick}
            />
            <button
              onClick={handleLogout}
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Log Out
            </button>
          </>
        ) : (
          <NavLink to="/SignUp" className="bg-black text-white px-4 py-2 rounded-lg">
            Sign Up
          </NavLink>
        )}
      </nav>
      <div className="md:hidden flex items-center relative">
        <button
          onClick={toggleMenu}
          className="text-gray-600"
          aria-haspopup="true"
          aria-expanded={isMenuOpen}
        >
          <Menu />
        </button>
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200">
            <NavLink to="/" className="block text-gray-600 hover:bg-black hover:text-white px-4 py-2 rounded" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/BecomePartner" className="block text-gray-600 hover:bg-black hover:text-white px-4 py-2 rounded" onClick={() => setIsMenuOpen(false)}>
              Become a partner
            </NavLink>
            {isLoggedIn ? (
              <>
                <div className="px-4 py-2 flex items-center space-x-2" onClick={handleProfileClick}>
                  <img
                    src={profileImage || 'https://via.placeholder.com/32'}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-gray-600">Profile</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-gray-600 hover:bg-black hover:text-white px-4 py-2 rounded"
                >
                  Log Out
                </button>
              </>
            ) : (
              <NavLink to="/SignUp">
                <button
                  className="block w-full bg-black text-white px-4 py-2 rounded-full mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </button>
              </NavLink>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
