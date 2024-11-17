import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import route from '../../assets/z-TrhLCn1abMU-unsplash.jpg';

const LoginAdmin = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const login = async () => {
    setError(null);

    if (!validateEmail(loginEmail)) {
      setError("Invalid email format");
      return;
    }

    if (loginPassword.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('http://localhost:3003/api/admin/loginadmin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Save token in localStorage or context
      localStorage.setItem('token', data.token);

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
          disabled={loading}
          className={`w-full py-2 ${loading ? 'bg-teal-300 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-400'} text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      
        <div className="mt-4 text-center">
          <Link to="/SignUp" className="text-teal-500 hover:underline">
            <p>Don't have an account yet?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;