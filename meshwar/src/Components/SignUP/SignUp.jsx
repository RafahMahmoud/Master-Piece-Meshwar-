import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import route from '../../assets/z-TrhLCn1abMU-unsplash.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, resetError } from '../../store/slices/authSlice';

const SignUp = () => {
    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
    const [registerGender, setRegisterGender] = useState("");
    const [registerBirthday, setRegisterBirthday] = useState("");


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, loading } = useSelector((state) => state.auth);


    const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = password => /^(?=.*[A-Za-z]).{6,}$/.test(password);


    const register = async () => {
        if (!registerName || !registerEmail || !registerPassword || !registerConfirmPassword || !registerGender || !registerBirthday ) {
            Swal.fire("Error", "Please fill in all required fields.", "error");
            return;
        }

        if (!validateEmail(registerEmail)) {
            Swal.fire("Error", "Invalid email format", "error");
            return;
        }

        if (!validatePassword(registerPassword)) {
            Swal.fire("Error", "Password must be at least 8 characters long and include at least one letter and one number", "error");
            return;
        }

        if (registerPassword !== registerConfirmPassword) {
            Swal.fire("Error", "Passwords do not match", "error");
            return;
        }

    

        const userData = {
            fullName: registerName,
            email: registerEmail,
            password: registerPassword,
            gender: registerGender,
            dateOfBirth: registerBirthday,

        };

        try {
            await dispatch(registerUser(userData)).unwrap();
            await Swal.fire({
                title: "Welcome To Meshwar!",
                text: "You have successfully registered. Please log in.",
                icon: "success",
                confirmButtonText: "OK",
            });
            navigate("/");
        } catch (error) {
            Swal.fire("Error", error, "error");
            dispatch(resetError());
        }
    };

    return (
        <div
            className="flex items-center justify-center p-8 bg-cover bg-center bg-[#F9E1FF20]"
            style={{ backgroundImage: `url(${route})` }}
        >
            <div className="flex max-w-md mx-auto p-4 bg-white bg-opacity-70 shadow-lg rounded-lg">
                <div>
                    <h3 className="text-2xl font-bold mb-8 text-center">Create Free Account</h3>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <label htmlFor="fname">Full Name</label>
                    <input
                        id="RrgName"
                        type="text"
                        placeholder="Name..."
                        value={registerName}
                        onChange={event => setRegisterName(event.target.value)}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <label htmlFor="email">Enter your email</label>
                    <input
                        id="RrgEmail"
                        type="email"
                        placeholder="Email..."
                        value={registerEmail}
                        onChange={event => setRegisterEmail(event.target.value)}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="RrgPassword"
                        type="password"
                        placeholder="Password..."
                        value={registerPassword}
                        onChange={event => setRegisterPassword(event.target.value)}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        id="RrgConfirmPassword"
                        type="password"
                        placeholder="Confirm Password..."
                        value={registerConfirmPassword}
                        onChange={event => setRegisterConfirmPassword(event.target.value)}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <label className="block mb-2">Gender:</label>
                    <div className="flex items-center mb-4">
                        <input className="mr-2" type="radio" id="male" name="gender" value="male" onChange={event => setRegisterGender(event.target.value)} />
                        <label htmlFor="male">Male</label>
                        <input className="ml-4 mr-2" type="radio" id="female" name="gender" value="female" onChange={event => setRegisterGender(event.target.value)} />
                        <label htmlFor="female">Female</label>
                    </div>
                    <label htmlFor="birth">Date Of Birth</label>
                    <input
                        id="RrgBirthday"
                        type="date"
                        value={registerBirthday}
                        onChange={event => setRegisterBirthday(event.target.value)}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
              
                    <button
            onClick={register}
            disabled={loading || !registerName || !registerEmail || !registerPassword || !registerConfirmPassword || !registerGender || !registerBirthday }
            className={`w-full py-2 ${loading || !registerName || !registerEmail || !registerPassword || !registerConfirmPassword || !registerGender || !registerBirthday  ? 'bg-teal-300 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-400'} text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4`}
        >
            {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
                    <div className="mt-4 text-center">
                        <Link to="/login" className="text-teal-500 hover:underline">
                            <p>Already have an account?</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
