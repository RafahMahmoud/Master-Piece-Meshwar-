// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import Swal from "sweetalert2";
// import { FaMapMarkerAlt } from "react-icons/fa"; 
// import route from '../../assets/z-TrhLCn1abMU-unsplash.jpg';

// const SignUp = () => {
//     const [registerName, setRegisterName] = useState("");
//     const [registerEmail, setRegisterEmail] = useState("");
//     const [registerPassword, setRegisterPassword] = useState("");
//     const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
//     const [registerGender, setRegisterGender] = useState("");
//     const [registerBirthday, setRegisterBirthday] = useState("");
//     const [registerPhone, setRegisterPhone] = useState("");
//     const [registerHaveACar, setRegisterHaveACar] = useState("");
//     const [registerLivesAt, setRegisterLivesAt] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const validateEmail = email => {
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return regex.test(email);
//     };

//     const validatePassword = password => {
//         const regex = /^(?=.*[A-Za-z]).{6,}$/;
//         return regex.test(password);
//     };

//     const validatePhone = phone => {
//         const regex = /^07\d{8}$/;
//         return regex.test(phone);
//     };

//     const register = async () => {
//         setError("");

//         if (!registerName || !registerEmail || !registerPassword || !registerConfirmPassword || !registerGender || !registerBirthday || !registerPhone || !registerHaveACar || !registerLivesAt) {
//             setError("Please fill in all fields.");
//             return;
//         }

//         if (!validateEmail(registerEmail)) {
//             setError("Invalid email format");
//             return;
//         }

//         if (!validatePassword(registerPassword)) {
//             setError("Password must be at least 8 characters long and include at least one letter and one number");
//             return;
//         }

//         if (registerPassword !== registerConfirmPassword) {
//             setError("Passwords do not match");
//             return;
//         }

//         if (!validatePhone(registerPhone)) {
//             setError("Phone number must be 10 digits long and start with 07");
//             return;
//         }

//         try {
//             localStorage.setItem("register", registerEmail);
//             localStorage.setItem("registerpass", registerPassword);
//             await Swal.fire({
//                 title: "Welcome To Meshwar!",
//                 text: "You get a 50 points. Start your journy.",
//                 icon: "success",
//                 confirmButtonText: "OK",
//                 customClass: {
//                     title: "text-lg font-bold",
//                     content: "text-base",
//                     confirmButton: "bg-teal-500 text-white hover:bg-teal-400",
//                 },
//             });

//             navigate("/Questionair");
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     const handleGoogleSignUp = async () => {
//         setError("");
//         try {
//             localStorage.setItem("register", registerEmail , " ",registerPassword);
//             await Swal.fire({
//                 title: "Welcome To Meshwar!",
//                 text: "You get a 50 points. Start your journy.",
//                 icon: "success",
//                 confirmButtonText: "OK",
//                 customClass: {
//                     title: "text-lg font-bold",
//                     content: "text-base",
//                     confirmButton: "bg-teal-500 text-white hover:bg-teal-400",
//                 },
//             });
//             navigate("/login");
//         } catch (error) {
//             setError(error.message);
//         }
//     };

//     const handleLocationClick = () => {
//         navigator.geolocation.getCurrentPosition(position => {
//             const { latitude, longitude } = position.coords;
//             setRegisterLivesAt(`Lat: ${latitude}, Lon: ${longitude}`);
//         }, error => {
//             setError("Failed to get location");
//         });
//     };

//     return (
//         <div
//             className="flex items-center justify-center p-8 bg-cover bg-center bg-[#F9E1FF20]"
//             style={{ backgroundImage: `url(${route})` }}
//         >
//             <div className="flex max-w-md mx-auto p-8 bg-white bg-opacity-70 shadow-lg rounded-lg">
//             <div className="">
//                 <h3 className="text-2xl font-bold mb-8 text-center">
//                     Create Free Account
//                 </h3>
//                 {error && <div className="text-red-500 mb-4">{error}</div>}
//                 <label htmlFor="fname">Full Name</label>
//                 <input
//                     id="RrgName"
//                     type="text"
//                     placeholder="Name..."
//                     value={registerName}
//                     onChange={event => setRegisterName(event.target.value)}
//                     className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 />
//                 <label htmlFor="email">Enter your email</label>
//                 <input
//                     id="RrgEmail"
//                     type="email"
//                     placeholder="Email..."
//                     value={registerEmail}
//                     onChange={event => setRegisterEmail(event.target.value)}
//                     className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 />
//                 <label htmlFor="password">Password</label>
//                 <input
//                     id="RrgPassword"
//                     type="password"
//                     placeholder="Password..."
//                     value={registerPassword}
//                     onChange={event => setRegisterPassword(event.target.value)}
//                     className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 />
//                 <label htmlFor="confirmPassword">Confirm Password</label>
//                 <input
//                     id="RrgConfirmPassword"
//                     type="password"
//                     placeholder="Confirm Password..."
//                     value={registerConfirmPassword}
//                     onChange={event => setRegisterConfirmPassword(event.target.value)}
//                     className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 />
//                 <label className="block mb-2">Gender:</label>
//                 <div className="flex items-center mb-4">
//                     <input className="mr-2" type="radio" id="male" name="gender" value="male" onChange={event => setRegisterGender(event.target.value)} />
//                     <label htmlFor="male">Male</label>
//                     <input className="ml-4 mr-2" type="radio" id="female" name="gender" value="female" onChange={event => setRegisterGender(event.target.value)} />
//                     <label htmlFor="female">Female</label>
//                 </div>
//                 <label htmlFor="birth">Date Of Birth</label>
//                 <input
//                     id="RrgBirthday"
//                     type="date"
//                     value={registerBirthday}
//                     onChange={event => setRegisterBirthday(event.target.value)}
//                     className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                 />
//             <label htmlFor="phone">Phone number</label>
//                 <input
//                     id="RgrPhone"
//                     type="tel"
//                     placeholder="Phone"
//                     value={registerPhone}
//                     onChange={event => setRegisterPhone(event.target.value)}
//                     className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     /> 
//                  <label htmlFor="livesAt" className="flex items-center">
//                     <FaMapMarkerAlt className="mr-2 text-teal-500" /> Lives At
//                     </label>
//                     <div className="relative">
//                     <input
//                     id="RrgLivesAt"
//                     type="text"
//                     placeholder="Enter your address..."
//                     value={registerLivesAt}
//                     onChange={event => setRegisterLivesAt(event.target.value)}
//                     className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
//                     <button
//                     type="button"
//                     onClick={handleLocationClick}
//                     className="absolute right-2 top-1/3 transform -translate-y-1/2 bg-teal-500 text-white p-2 rounded-full hover:text-white bg-teal-500"
//                     >
//                     <FaMapMarkerAlt />
//                     </button>
//                     </div>
//                     <label className="block mb-2">Have a car</label>
//                     <div className="flex items-center mb-4">
//                     <input className="mr-2" type="radio" id="yes" name="car" value="yes" onChange={event => setRegisterHaveACar(event.target.value)} />
//                     <label htmlFor="yes">Yes</label>
//                     <input className="ml-4 mr-2" type="radio" id="no" name="car" value="no" onChange={event => setRegisterHaveACar(event.target.value)} />
//                     <label htmlFor="no">No</label>
//                     </div> 
//                 <button
//                     onClick={register}
//                     disabled={
//                         !registerName || !registerEmail || !registerPassword || !registerConfirmPassword || !registerGender || !registerBirthday || !registerPhone || !registerHaveACar || !registerLivesAt
//                     }
//                     className={`w-full py-2 ${!registerName || !registerEmail || !registerPassword || !registerConfirmPassword || !registerGender || !registerBirthday || !registerPhone || !registerHaveACar || !registerLivesAt ? 'bg-teal-500 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-400'} text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4`}
//                 >
//                     SignUp
//                 </button>
//                 <button
//                         onClick={handleGoogleSignUp}
//                         className="w-full py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg flex items-center justify-center mb-4">
//                         <FontAwesomeIcon icon={faGoogle} className="mr-2" />
//                         <span>Sign Up With Google</span>
//                     </button>
//                 <div className="mt-4 text-center">
//                     <Link to="/login" className="text-teal-500 hover:underline">
//                         <p>Already have an account?</p>
//                     </Link>
//                 </div>
//             </div>

//             </div>
//         </div>
//     );
// };

// export default SignUp;





// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import Swal from "sweetalert2";
// import { FaMapMarkerAlt } from "react-icons/fa"; 
// import route from '../../assets/z-TrhLCn1abMU-unsplash.jpg';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser, resetError } from '../../store/slices/authSlice';

// const SignUp = () => {
//     const [registerName, setRegisterName] = useState("");
//     const [registerEmail, setRegisterEmail] = useState("");
//     const [registerPassword, setRegisterPassword] = useState("");
//     const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
//     const [registerGender, setRegisterGender] = useState("");
//     const [registerBirthday, setRegisterBirthday] = useState("");
//     const [registerPhone, setRegisterPhone] = useState("");
//     const [registerHaveACar, setRegisterHaveACar] = useState("");
//     const [registerLivesAt, setRegisterLivesAt] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const error = useSelector((state) => state.auth.error);

//     const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     const validatePassword = password => /^(?=.*[A-Za-z]).{6,}$/.test(password);
//     const validatePhone = phone => /^07\d{8}$/.test(phone);

//     const register = async () => {
//         if (!registerName || !registerEmail || !registerPassword || !registerConfirmPassword || !registerGender || !registerBirthday || !registerPhone || !registerHaveACar || !registerLivesAt) {
//             Swal.fire("Error", "Please fill in all fields.", "error");
//             return;
//         }

//         if (!validateEmail(registerEmail)) {
//             Swal.fire("Error", "Invalid email format", "error");
//             return;
//         }

//         if (!validatePassword(registerPassword)) {
//             Swal.fire("Error", "Password must be at least 8 characters long and include at least one letter and one number", "error");
//             return;
//         }

//         if (registerPassword !== registerConfirmPassword) {
//             Swal.fire("Error", "Passwords do not match", "error");
//             return;
//         }

//         if (!validatePhone(registerPhone)) {
//             Swal.fire("Error", "Phone number must be 10 digits long and start with 07", "error");
//             return;
//         }

//         const userData = {
//             fullName: registerName,
//             email: registerEmail,
//             password: registerPassword,
//             gender: registerGender,
//             dateOfBirth: registerBirthday,
//             phoneNumber: registerPhone,
//             haveACar: registerHaveACar,
//             livesAt: registerLivesAt,
//         };

//         try {
//             await dispatch(registerUser(userData)).unwrap();
//             await Swal.fire({
//                 title: "Welcome To Meshwar!",
//                 text: "You get 50 points. Start your journey.",
//                 icon: "success",
//                 confirmButtonText: "OK",
//             });
//             navigate("/Questionair");
//         } catch (error) {
//             Swal.fire("Error", error, "error");
//             dispatch(resetError());
//         }
//     };

//     const handleLocationClick = () => {
//         navigator.geolocation.getCurrentPosition(position => {
//             const { latitude, longitude } = position.coords;
//             setRegisterLivesAt(`Lat: ${latitude}, Lon: ${longitude}`);
//         }, () => {
//             Swal.fire("Error", "Failed to get location", "error");
//         });
//     };

//     return (
//         <div
//             className="flex items-center justify-center p-8 bg-cover bg-center bg-[#F9E1FF20]"
//             style={{ backgroundImage: `url(${route})` }}
//         >
//             <div className="flex max-w-md mx-auto p-8 bg-white bg-opacity-70 shadow-lg rounded-lg">
//                 <div className="">
//                     <h3 className="text-2xl font-bold mb-8 text-center">Create Free Account</h3>
//                     {error && <div className="text-red-500 mb-4">{error}</div>}
//                     <label htmlFor="fname">Full Name</label>
//                     <input
//                         id="RrgName"
//                         type="text"
//                         placeholder="Name..."
//                         value={registerName}
//                         onChange={event => setRegisterName(event.target.value)}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
//                     <label htmlFor="email">Enter your email</label>
//                     <input
//                         id="RrgEmail"
//                         type="email"
//                         placeholder="Email..."
//                         value={registerEmail}
//                         onChange={event => setRegisterEmail(event.target.value)}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
//                     <label htmlFor="password">Password</label>
//                     <input
//                         id="RrgPassword"
//                         type="password"
//                         placeholder="Password..."
//                         value={registerPassword}
//                         onChange={event => setRegisterPassword(event.target.value)}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
//                     <label htmlFor="confirmPassword">Confirm Password</label>
//                     <input
//                         id="RrgConfirmPassword"
//                         type="password"
//                         placeholder="Confirm Password..."
//                         value={registerConfirmPassword}
//                         onChange={event => setRegisterConfirmPassword(event.target.value)}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
//                     <label className="block mb-2">Gender:</label>
//                     <div className="flex items-center mb-4">
//                         <input className="mr-2" type="radio" id="male" name="gender" value="male" onChange={event => setRegisterGender(event.target.value)} />
//                         <label htmlFor="male">Male</label>
//                         <input className="ml-4 mr-2" type="radio" id="female" name="gender" value="female" onChange={event => setRegisterGender(event.target.value)} />
//                         <label htmlFor="female">Female</label>
//                     </div>
//                     <label htmlFor="birth">Date Of Birth</label>
//                     <input
//                         id="RrgBirthday"
//                         type="date"
//                         value={registerBirthday}
//                         onChange={event => setRegisterBirthday(event.target.value)}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
//                     <label htmlFor="phone">Phone number</label>
//                     <input
//                         id="RgrPhone"
//                         type="tel"
//                         placeholder="Phone"
//                         value={registerPhone}
//                         onChange={event => setRegisterPhone(event.target.value)}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
//                     <label htmlFor="livesAt" className="flex items-center">
//                         <FaMapMarkerAlt className="mr-2 text-teal-500" /> Lives At
//                     </label>
//                     <div className="relative">
//                         <input
//                             id="RrgLivesAt"
//                             type="text"
//                             placeholder="Enter your address..."
//                             value={registerLivesAt}
//                             onChange={event => setRegisterLivesAt(event.target.value)}
//                             className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                         />
//                         <button
//                             type="button"
//                             onClick={handleLocationClick}
//                             className="absolute right-2 top-1/3 transform -translate-y-1/2 bg-teal-500 text-white p-2 rounded-full hover:text-white"
//                         >
//                             <FaMapMarkerAlt />
//                         </button>
//                     </div>
//                     <label className="block mb-2">Have a car</label>
//                     <div className="flex items-center mb-4">
//                         <input className="mr-2" type="radio" id="yes" name="car" value="yes" onChange={event => setRegisterHaveACar(event.target.value)} />
//                         <label htmlFor="yes">Yes</label>
//                         <input className="ml-4 mr-2" type="radio" id="no" name="car" value="no" onChange={event => setRegisterHaveACar(event.target.value)} />
//                         <label htmlFor="no">No</label>
//                     </div>
//                     <button
//                         onClick={register}
//                         disabled={
//                             !registerName || !registerEmail || !registerPassword || !registerConfirmPassword || !registerGender || !registerBirthday || !registerPhone || !registerHaveACar || !registerLivesAt
//                         }
//                         className={`w-full py-2 ${!registerName || !registerEmail || !registerPassword || !registerConfirmPassword || !registerGender || !registerBirthday || !registerPhone || !registerHaveACar || !registerLivesAt ? 'bg-teal-500 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-400'} text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4`}
//                     >
//                         SignUp
//                     </button>
//                     <button
//                         onClick={() => { /* Handle Google sign up logic here */ }}
//                         className="w-full py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg flex items-center justify-center mb-4">
//                         <FontAwesomeIcon icon={faGoogle} className="mr-2" />
//                         <span>Sign Up With Google</span>
//                     </button>
//                     <div className="mt-4 text-center">
//                         <Link to="/login" className="text-teal-500 hover:underline">
//                             <p>Already have an account?</p>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;





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
            <div className="flex max-w-md mx-auto p-8 bg-white bg-opacity-70 shadow-lg rounded-lg">
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
