// import { useState} from "react";
// import route from '../../assets/z-TrhLCn1abMU-unsplash.jpg';
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';


// const LogIn = () => {
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();


//   const validateEmail = email => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const login = async () => {
//     setError("");

//     if (!validateEmail(loginEmail)) {
//       setError("Invalid email format");
//       return;
//     }

//     if (loginPassword.length < 6) {
//       setError("Password must be at least 8 characters long");
//       return;
//     }

//     try {
//   customersData = localStorage.getItem("register");
//   customersPass = localStorage.getItem("registerpass");
//       let foundEmail = false;
     

//       for (const key in customersData.data) {
//         if (customersData.data[key] === loginEmail) {
//           foundEmail = true;
//           customersPass.data[key] === loginPassword
//           break;
//         }
//       }

//       if (!foundEmail) {
//         setError("No customer found with this email.");
//         return;
//       }

//     //   if (isDeleted) {
//     //     setError("You can't enter. Your account is deleted.");
//     //     return;
//     //   }

//     //   if (!active) {
//     //     setError("You can't enter. Your account is inactive.");
//     //     return;
//     //   }

      
//       sessionStorage.setItem("user", loginEmail);

     
//       setLoginEmail("");
//       setLoginPassword("");

 
//       navigate("/");
//     } catch (error) {
//       setError("Incorrect email or password. Please try again.");
//     }
//   };

//   return (
//     <div
//     className="flex items-center justify-center h-screen p-8 bg-cover bg-center bg-[#F9E1FF20]"
//     style={{ backgroundImage: `url(${route})` }}
// >
//       <div className="max-w-sm mx-auto p-6 bg-white bg-opacity-90 shadow-md rounded-lg mt-8  ">
//         <h3 className="text-2xl font-semibold mb-6 text-cener text-black">Welcome Back ...</h3>
//         {error && <div className="text-red-500 mb-4">{error}</div>}
//         <input
//           id="LogEmail"
//           type="email"
//           placeholder="Email..."
//           value={loginEmail}
//           onChange={event => setLoginEmail(event.target.value)}
//           className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//         />
//         <input
//           id="LogPass"
//           type="password"
//           placeholder="Password..."
//           value={loginPassword}
//           onChange={event => setLoginPassword(event.target.value)}
//           className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal=500"
//         />
//         <button
//           onClick={login}
//           className="w-full py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
//         >
//           Login
//         </button>
//         <button
//                     type="button"
//                     onClick={handleLocationClick}
//                     className="absolute right-2 top-1/3 transform -translate-y-1/2 bg-teal-500 text-white p-2 rounded-full hover:text-white bg-teal-500"
//                     >
//                     <FaMapMarkerAlt />
//                     </button>
//         <div className="mt-4 text-center">
//           <Link to="/SignUp" className="text-teal-500 hover:underline">
//             <p>Don't have an account yet?</p>
//           </Link>
//           <Link to="/resetPassword" className="text-teal-500 hover:underline">
//             <p>Forgot Password?</p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogIn;






import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import route from '../../assets/z-TrhLCn1abMU-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const LogIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const login = async () => {
    setError("");

    if (!validateEmail(loginEmail)) {
      setError("Invalid email format");
      return;
    }

    if (loginPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      const storedEmail = localStorage.getItem("register");
      const storedPassword = localStorage.getItem("registerpass");

      if (storedEmail === loginEmail && storedPassword === loginPassword) {
        sessionStorage.setItem("user", loginEmail);
        setLoginEmail("");
        setLoginPassword("");
        navigate("/");
      } else {
        setError("Incorrect email or password. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen p-8 bg-cover bg-center bg-[#F9E1FF20]"
      style={{ backgroundImage: `url(${route})` }}
    >
      <div className="max-w-sm mx-auto p-6 bg-white bg-opacity-90 shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold mb-6 text-center text-black">Welcome Back ...</h3>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <input
          id="LogEmail"
          type="email"
          placeholder="Email..."
          value={loginEmail}
          onChange={event => setLoginEmail(event.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          id="LogPass"
          type="password"
          placeholder="Password..."
          value={loginPassword}
          onChange={event => setLoginPassword(event.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          onClick={login}
          className="w-full py-2 bg-teal-500 mb-[1rem] text-white rounded-lg hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Login
        </button>
        <button
                        
                        className="w-full py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg flex items-center justify-center mb-4">
                        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                        <span>Sign Up With Google</span>
                    </button>
        <div className="mt-4 text-center">
          <Link to="/SignUp" className="text-teal-500 hover:underline">
            <p>Don't have an account yet?</p>
          </Link>
          <Link to="/resetPassword" className="text-teal-500 hover:underline">
            <p>Forgot Password?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
