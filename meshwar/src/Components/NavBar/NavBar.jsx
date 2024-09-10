// import React, { useState, useEffect } from 'react';
// import { Menu } from 'lucide-react';

// const NavBar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const user = sessionStorage.getItem('user');
//     setIsLoggedIn(!!user);
//   }, []);

//   return (
//     <header className="flex justify-between items-center p-4 bg-white shadow-sm">
//       <div className="text-2xl font-arabic text-green-600">
//         Meshwar
//       </div>
//       <nav className="hidden md:flex space-x-4">
//         <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
//         <a href="#" className="text-gray-600 hover:text-gray-800">Become a partner</a>
//         {isLoggedIn ? (
//           <button className="bg-black text-white px-4 py-2 rounded-full">
//             Log Out
//           </button>
//         ) : (
//           <button className="bg-green-600 text-white px-4 py-2 rounded-full">
//             Sign Up
//           </button>
//         )}
//       </nav>
//       <div className="md:hidden">
//         <Menu className="text-gray-600" />
//       </div>
//       {isLoggedIn && (
//         <img
//           src="/api/placeholder/40/40"
//           alt="User Avatar"
//           className="w-10 h-10 rounded-full ml-4"
//         />
//       )}
//     </header>
//   );
// };

// export default NavBar;




// import React, { useState, useEffect } from 'react';
// import { Menu } from 'lucide-react';

// const NavBar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة لتتبع حالة القائمة

//   useEffect(() => {
//     const user = sessionStorage.getItem('user');
//     setIsLoggedIn(!!user);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // تبديل حالة القائمة
//   };

//   return (
//     <header className="flex justify-between items-center p-4 bg-white shadow-sm">
//       <div className="text-2xl font-arabic text-green-600">
//         Meshwar
//       </div>
//       <nav className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
//         <a href="#" className="text-gray-600 hover:bg-black hover:text-white px-4 py-2 rounded">
//           Home
//         </a>
//         <a href="#" className="text-gray-600 hover:bg-black hover:text-white px-4 py-2 rounded">
//           Become a partner
//         </a>
//         {isLoggedIn ? (
//           <button className="bg-black text-white px-4 py-2 rounded-full">
//             Log Out
//           </button>
//         ) : (
//           <button className="bg-green-600 text-white px-4 py-2 rounded-full">
//             Sign Up
//           </button>
//         )}
//       </nav>
//       <div className="md:hidden flex items-center">
//         <button onClick={toggleMenu} className="text-gray-600">
//           <Menu />
//         </button>
//       </div>
//       {isLoggedIn && (
//         <img
//           src="/api/placeholder/40/40"
//           alt="User Avatar"
//           className="w-10 h-10 rounded-full ml-4"
//         />
//       )}
//     </header>
//   );
// };

// export default NavBar;



// import React, { useState, useEffect } from 'react';
// import { Menu } from 'lucide-react';
// import logo from '../../assets/meshwar-logo.png';
// import { Link, NavLink } from "react-router-dom";


// const NavBar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); 

//   useEffect(() => {
//     const user = sessionStorage.getItem('user');
//     setIsLoggedIn(!!user);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); 
//   };

//   return (
//     <header className="flex justify-between w-full items-center px-[7rem] py-[1rem] bg-white mx-[0rem] drop-shadow-lg fixed z-50 ">
//       <div className="text-2xl font-arabic text-green-600">
//       <img className="logo-img h-[2.5rem] w-[7.5rem] " src={logo} alt="Meshwar" />
//       </div>
//       <nav className="hidden md:flex space-x-4">
//         <NavLink to="/" className="text-black hover:bg-black hover:text-white px-4 py-2 rounded">
//           Home
//         </NavLink>
//         <NavLink to="BecomePartner" className="text-black hover:bg-black hover:text-white px-4 py-2 rounded">
//           Become a partner
//         </NavLink>
//         {isLoggedIn ? (
//           <button className="bg-black text-white px-4 py-2 rounded-lg">
//             Log Out
//           </button>
//         ) : (
//           <button className="bg-black text-white px-4 py-2 rounded-lg">
//             Sign Up
//           </button>
//         )}
//       </nav>
//       <div className="md:hidden flex items-center relative">
//         <button onClick={toggleMenu} className="text-gray-600">
//           <Menu />
//         </button>
//         {isMenuOpen && (
//           <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200">
//             <a href="#" className="block text-gray-600 hover:bg-black hover:text-white px-4 py-2 rounded">
//               Home
//             </a>
//             <a href="#" className="block text-gray-600 hover:bg-black hover:text-white px-4 py-2 rounded">
//               Become a partner
//             </a>
//             {isLoggedIn ? (
//               <button className="block w-full bg-black text-white px-4 py-2 rounded-full mt-2">
//                 Log Out
//               </button>
//             ) : (
//               <NavLink to="/SignUp" >
//                 <button className="block w-full bg-green-600 text-white px-4 py-2 rounded-full mt-2">
//                 Sign Up
//               </button>
//           </NavLink>
              
//             )}
//           </div>
//         )}
//       </div>
//       {isLoggedIn && (
//         <img
//           src="/api/placeholder/40/40"
//           alt="User Avatar"
//           className="w-10 h-10 rounded-full ml-4"
//         />
//       )}
//     </header>
//   );
// };

// export default NavBar;





import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import logo from '../../assets/meshwar-logo.png';
import { Link, NavLink } from 'react-router-dom';
import pro1 from '../../assets/laila.jpg';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setIsLoggedIn(false);
    
  };
 
    const navigate = useNavigate(); 
  const handleProfileClick = () => {
    navigate('/Profile'); 
  };
  return (
    <header className="flex justify-between w-full items-center px-[7rem] py-[1rem] bg-white mx-[0rem] drop-shadow-lg sticky top-0 z-50">
      <div className="text-2xl font-arabic text-green-600">
        <img className="logo-img h-[2.5rem] w-[7.5rem]" src={logo} alt="Meshwar" />
      </div>
      <nav className="hidden md:flex space-x-4">
      {isLoggedIn && (
        <img
          src={pro1}
          alt="User Avatar"
          className="w-10 h-10 rounded-full ml-4 cursor-pointer"
          onClick={handleProfileClick}
        />
      )}
        <NavLink 
          to="/" 
          className={({ isActive }) => `text-black hover:bg-black hover:text-white px-4 py-2 rounded ${isActive ? 'bg-black text-white' : ''}`}
        >
          Home
        </NavLink>
        <NavLink 
          to="/BecomePartner" 
          className={({ isActive }) => `text-black hover:bg-black hover:text-white px-4 py-2 rounded ${isActive ? 'bg-black text-white' : ''}`}
        >
          Become a partner
        </NavLink>
        {isLoggedIn ? (
          <button 
            onClick={handleLogout} 
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Log Out
          </button>
        ) : (
          <NavLink 
            to="/SignUp" 
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Sign Up
          </NavLink>
        )}
      </nav>
      <div className="md:hidden flex items-center relative">
        <button onClick={toggleMenu} className="text-gray-600">
          <Menu />
        </button>
       
        {isMenuOpen && (
          
          <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200">
            <NavLink 
              to="/" 
              className="block text-gray-600 hover:bg-black hover:text-white px-4 py-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/BecomePartner" 
              className="block text-gray-600 hover:bg-black hover:text-white px-4 py-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Become a partner
            </NavLink>
            {isLoggedIn ? (
              <button 
                onClick={handleLogout} 
                className="block w-full bg-black text-white px-4 py-2 rounded-full mt-2"
              >
                Log Out
              </button>
            ) : (
              <NavLink to="/SignUp">
                <button 
                  className="block w-full bg-green-600 text-white px-4 py-2 rounded-full mt-2"
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
