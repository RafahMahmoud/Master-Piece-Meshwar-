
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import route from '../../assets/z-TrhLCn1abMU-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Admin = () => {
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
      const storedEmail = "rafah@gmail.com";
      const storedPassword = "rafah123";

      if (storedEmail === loginEmail && storedPassword === loginPassword) {
        sessionStorage.setItem("user", loginEmail);
        setLoginEmail("");
        setLoginPassword("");
        navigate("/Dashboard");
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
          <Link to="/resetPassword" className="text-teal-500 hover:underline">
            <p>Forgot Password?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
