// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import GoogleButton from "react-google-button";
// import Swal from "sweetalert2";
// const SignUp = () => {
//     const [registerName, setRegisterName] = useState("");
//     const [registerEmail, setRegisterEmail] = useState("");
//     const [registerPassword, setRegisterPassword] = useState("");
//     const [registerCnfirmPassword, setRegisterConfirmPassword] = useState("");
//     const [registerGender, setRegisterGender] = useState("");
//     const [registerBirthday, setRegisterBirthday] = useState("");
//     const [registerPhone, setRegisterPhone] = useState("");
//     const [registerHaveACar, setRegisterHaveACar] = useState("");
//     const [registerlivesAt, setRegisterlivesAt] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
//     const validateEmail = email => {
//       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return regex.test(email);};
//     const validatePassword = password => {
//       const regex = /^(?=.*[A-Za-z]).{6,}$/;
//       return regex.test(password);
//     };
//     const register = async () => {
//       setError("");
//       if (!validateEmail(registerEmail)) {
//         setError("Invalid email format");
//         return;
//       }
//       if (!validatePassword(registerPassword)) {
//         setError(
//           "Password must be at least 8 characters long and include at least one letter and one number"
//         );
//         return;
//       }
//       try {
//         sessionStorage.setItem("register", registerName);
//         await Swal.fire({
//           title: "Congratulations!",
//           text: "You get a 10% discount. Your code for DISCOUNT is: DISCOUNT10",
//           icon: "success",
//           confirmButtonText: "OK",
//           customClass: {
//             title: "text-lg font-bold",
//             content: "text-base",
//             confirmButton: "bg-red1 text-white hover:bg-red2",
//           },
//         });
//         navigate("/login");
//       } catch (error) {
//         setError(error.message);
//       }
//     };
//     const handleGoogleSignUp = async () => {
//       setError("");
//       try {
//         localStorageStorage.setItem("register", registerName);
//         await Swal.fire({
//           title: "Congratulations!",
//           text: "You get a 10% discount. Your code for DISCOUNT is: DISCOUNT10",
//           icon: "success",
//           confirmButtonText: "OK",
//           customClass: {
//             title: "text-lg font-bold",
//             content: "text-base",
//             confirmButton: "bg-red1 text-white hover:bg-blue-600",
//           },
//         });
//         navigate("/login");
//       } catch (error) {
//         setError(error.message);
//       }
//     };
//     return (
//       <div
//         className="pg-page flex items-center justify-center p-36  bg-cover bg-center bg-gray-800"
//         style={{ backgroundImage: `url(./src/assets/img/bg.png)` }}
//       >
//         <div className="max-w-md mx-auto p-8 bg-white  bg-opacity-80 shadow-lg rounded-lg">
//           <h3 className="text-3xl font-bold mb-8 text-center text-page1">
//             Creat Free Account{" "}
//           </h3>
//           {error && <div className="text-red-500 mb-4">{error}</div>}
//           <label for="fname" >Full Name:</label><br></br>
//           <input
//             id="RrgName"
//             type="text"
//             placeholder="Name..."
//             value={registerName}
//             onChange={event => setRegisterName(event.target.value)}
//             className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red1"
//           />
//           <label for="email">Enter your email:</label><br></br>
//           <input
//             id="RrgEmail"
//             type="email"
//             placeholder="Email..."
//             value={registerEmail}
//             onChange={event => setRegisterEmail(event.target.value)}
//             className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red1"
//           />
//           <label for="password">Password:</label><br></br>
//           <input
//             id="RrgPassword"
//             type="password"
//             placeholder="Password..."
//             value={registerPassword}
//             onChange={event => setRegisterPassword(event.target.value)}
//             className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red1"
//           />
//           <label for="password"> Confirm Password:</label><br></br>
//           <input
//             id="RrgConfirmPassword"
//             type="password"
//             placeholder=" Confirm Password..."
//             value={registerPassword}
//             onChange={event => setRegisterConfirmPassword(event.target.value)}
//             className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red1"
//           />
//            <p class="gender">Gender:</p>
//         <input class="gender" type="radio" id="male" name="gender" value="male"/>
//         <label class="gender" for="male">Male</label>
//         <input class="gender" type="radio" id="female" name="gender" value="female"/>
//         <label class="gender" for="female">Female</label><br></br>
//           <label for="birth">Date Of Birth:</label><br></br>
//           <input
//             id="RrgBirthday"
//             type="date"
//             placeholder="Birthday..."
//             value={registerPassword}
//             onChange={event => setRegisterBirthday(event.target.value)}
//             className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red1"
//           />
//           <label for="RgrPhone">Phone number:</label><br></br>
//           <input
//             id="RgrPhone"
//             type="tel"
//             placeholder="Phone"
//             value={registerPassword}
//             onChange={event => setRegisterBirthday(event.target.value)}
//             className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red1"
//           />
//             <p class="car">Have a car</p>
//         <input class="car" type="radio" id="yes" name="car" value="yes"/>
//         <label class="car" for="male">Yes</label>
//         <input class="car" type="radio" id="no" name="car" value="no"/>
//         <label class="car" for="female">No</label><br></br>
//           <button
//             onClick={register}
//             className="w-full py-2 bg-red1 text-white rounded-lg hover:bg-red2 focus:outline-none focus:ring-2 focus:ring-red1 mb-4"
//           >
//             SignUp
//           </button>
//           <div className="flex justify-center mb-4">
//             <GoogleButton onClick={handleGoogleSignUp} />
//           </div>
//           <div className="mt-4 text-center">
//             <Link to="/login" className="text-blue-500 hover:underline">
//               <p>Already have an account?</p>
//             </Link>
//           </div>
//         </div>
//       </div>);};
//   export default SignUp;






import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Swal from "sweetalert2";
import { FaMapMarkerAlt } from "react-icons/fa"; 
import route from '../../assets/z-TrhLCn1abMU-unsplash.jpg';

const SignUp = () => {
    const [registerName, setRegisterName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
    const [registerGender, setRegisterGender] = useState("");
    const [registerBirthday, setRegisterBirthday] = useState("");
    const [registerPhone, setRegisterPhone] = useState("");
    const [registerHaveACar, setRegisterHaveACar] = useState("");
    const [registerLivesAt, setRegisterLivesAt] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const validateEmail = email => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePassword = password => {
        const regex = /^(?=.*[A-Za-z]).{6,}$/;
        return regex.test(password);
    };

    const validatePhone = phone => {
        const regex = /^07\d{8}$/;
        return regex.test(phone);
    };

    const register = async () => {
        setError("");

        if (!registerName || !registerEmail || !registerPassword || !registerConfirmPassword || !registerGender || !registerBirthday || !registerPhone || !registerHaveACar || !registerLivesAt) {
            setError("Please fill in all fields.");
            return;
        }

        if (!validateEmail(registerEmail)) {
            setError("Invalid email format");
            return;
        }

        if (!validatePassword(registerPassword)) {
            setError("Password must be at least 8 characters long and include at least one letter and one number");
            return;
        }

        if (registerPassword !== registerConfirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (!validatePhone(registerPhone)) {
            setError("Phone number must be 10 digits long and start with 07");
            return;
        }

        try {
            localStorage.setItem("register", registerEmail);
            localStorage.setItem("registerpass", registerPassword);
            await Swal.fire({
                title: "Welcome To Meshwar!",
                text: "You get a 50 points. Start your journy.",
                icon: "success",
                confirmButtonText: "OK",
                customClass: {
                    title: "text-lg font-bold",
                    content: "text-base",
                    confirmButton: "bg-teal-500 text-white hover:bg-teal-400",
                },
            });

            navigate("/Questionair");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignUp = async () => {
        setError("");
        try {
            localStorage.setItem("register", registerEmail , " ",registerPassword);
            await Swal.fire({
                title: "Welcome To Meshwar!",
                text: "You get a 50 points. Start your journy.",
                icon: "success",
                confirmButtonText: "OK",
                customClass: {
                    title: "text-lg font-bold",
                    content: "text-base",
                    confirmButton: "bg-teal-500 text-white hover:bg-teal-400",
                },
            });
            navigate("/login");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleLocationClick = () => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            setRegisterLivesAt(`Lat: ${latitude}, Lon: ${longitude}`);
        }, error => {
            setError("Failed to get location");
        });
    };

    return (
        <div
            className="flex items-center justify-center p-8 bg-cover bg-center bg-[#F9E1FF20]"
            style={{ backgroundImage: `url(${route})` }}
        >
            <div className="flex max-w-md mx-auto p-8 bg-white bg-opacity-90 shadow-lg rounded-lg">
            <div className="">
                <h3 className="text-2xl font-bold mb-8 text-center">
                    Create Free Account
                </h3>
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
            <label htmlFor="phone">Phone number</label>
                <input
                    id="RgrPhone"
                    type="tel"
                    placeholder="Phone"
                    value={registerPhone}
                    onChange={event => setRegisterPhone(event.target.value)}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    /> 
                 <label htmlFor="livesAt" className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-teal-500" /> Lives At
                    </label>
                    <div className="relative">
                    <input
                    id="RrgLivesAt"
                    type="text"
                    placeholder="Enter your address..."
                    value={registerLivesAt}
                    onChange={event => setRegisterLivesAt(event.target.value)}
                    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                    <button
                    type="button"
                    onClick={handleLocationClick}
                    className="absolute right-2 top-1/3 transform -translate-y-1/2 bg-teal-500 text-white p-2 rounded-full hover:text-white bg-teal-500"
                    >
                    <FaMapMarkerAlt />
                    </button>
                    </div>
                    <label className="block mb-2">Have a car</label>
                    <div className="flex items-center mb-4">
                    <input className="mr-2" type="radio" id="yes" name="car" value="yes" onChange={event => setRegisterHaveACar(event.target.value)} />
                    <label htmlFor="yes">Yes</label>
                    <input className="ml-4 mr-2" type="radio" id="no" name="car" value="no" onChange={event => setRegisterHaveACar(event.target.value)} />
                    <label htmlFor="no">No</label>
                    </div> 
                <button
                    onClick={register}
                    disabled={
                        !registerName || !registerEmail || !registerPassword || !registerConfirmPassword || !registerGender || !registerBirthday || !registerPhone || !registerHaveACar || !registerLivesAt
                    }
                    className={`w-full py-2 ${!registerName || !registerEmail || !registerPassword || !registerConfirmPassword || !registerGender || !registerBirthday || !registerPhone || !registerHaveACar || !registerLivesAt ? 'bg-teal-500 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-400'} text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4`}
                >
                    SignUp
                </button>
                <button
                        onClick={handleGoogleSignUp}
                        className="w-full py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg flex items-center justify-center mb-4">
                        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                        <span>Sign Up With Google</span>
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











// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { FaMapMarkerAlt } from "react-icons/fa"; 

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';

// import routeImage from '../../assets/route2-removebg-preview.png';
// import route from '../../assets/z-TrhLCn1abMU-unsplash.jpg';
// const SignUp = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         gender: "",
//         birthday: "",
//         phone: "",
//         haveACar: "",
//         livesAt: ""
//     });
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData(prevState => ({ ...prevState, [id]: value }));
//     };

//     const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     const validatePassword = password => /^(?=.*[A-Za-z]).{8,}$/.test(password);
//     const validatePhone = phone => /^07\d{8}$/.test(phone);

//     const register = async () => {
//         setError("");

//         const { name, email, password, confirmPassword, gender, birthday, phone, haveACar, livesAt } = formData;

//         if (!name || !email || !password || !confirmPassword || !gender || !birthday || !phone || !haveACar || !livesAt) {
//             setError("Please fill in all fields.");
//             return;
//         }

//         if (!validateEmail(email)) {
//             setError("Invalid email format");
//             return;
//         }

//         if (!validatePassword(password)) {
//             setError("Password must be at least 8 characters long and include at least one letter and one number");
//             return;
//         }

//         if (password !== confirmPassword) {
//             setError("Passwords do not match");
//             return;
//         }

//         if (!validatePhone(phone)) {
//             setError("Phone number must be 10 digits long and start with 07");
//             return;
//         }

//         try {
//             localStorage.setItem("register", name);
//             await Swal.fire({
//                 title: "Welcome To Meshwar!",
//                 text: "You get 50 points. Start your journey.",
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

//     const handleGoogleSignUp = async () => {
//         try {
//             localStorage.setItem("register", formData.name);
//             await Swal.fire({
//                 title: "Welcome To Meshwar!",
//                 text: "You get 50 points. Start your journey.",
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
//             setFormData(prevState => ({ ...prevState, livesAt: `Lat: ${latitude}, Lon: ${longitude}` }));
//         }, error => {
//             setError("Failed to get location");
//         });
//     };

//     return (
//         <div
//             className="flex items-center justify-center p-8 bg-cover bg-center bg-[#F9E1FF20]"
//             style={{ backgroundImage: `url(${route})` }}
//         >
//             <div className="flex max-w-md mx-auto p-8 bg-white bg-opacity-90 shadow-lg rounded-lg">
//                 <div>
//                     <h3 className="text-2xl font-bold mb-4 text-center">
//                         Create Free Account
//                     </h3>
//                     {error && <div className="text-red-500 mb-4">{error}</div>}
                    
//                     <label htmlFor="name">Full Name</label>
//                     <input
//                         id="name"
//                         type="text"
//                         placeholder="Name..."
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label htmlFor="email">Enter your email</label>
//                     <input
//                         id="email"
//                         type="email"
//                         placeholder="Email..."
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label htmlFor="password">Password</label>
//                     <input
//                         id="password"
//                         type="password"
//                         placeholder="Password..."
//                         value={formData.password}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label htmlFor="confirmPassword">Confirm Password</label>
//                     <input
//                         id="confirmPassword"
//                         type="password"
//                         placeholder="Confirm Password..."
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label className="block mb-2">Gender:</label>
//                     <div className="flex items-center mb-4">
//                         <input 
//                             className="mr-2" 
//                             type="radio" 
//                             id="male" 
//                             name="gender" 
//                             value="male" 
//                             checked={formData.gender === "male"}
//                             onChange={handleChange} 
//                         />
//                         <label htmlFor="male">Male</label>
//                         <input 
//                             className="ml-4 mr-2" 
//                             type="radio" 
//                             id="female" 
//                             name="gender" 
//                             value="female" 
//                             checked={formData.gender === "female"}
//                             onChange={handleChange} 
//                         />
//                         <label htmlFor="female">Female</label>
//                     </div>
                    
//                     <label htmlFor="birthday">Date Of Birth</label>
//                     <input
//                         id="birthday"
//                         type="date"
//                         value={formData.birthday}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label htmlFor="phone">Phone number</label>
//                     <input
//                         id="phone"
//                         type="tel"
//                         placeholder="Phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label htmlFor="livesAt" className="flex items-center">
//                         <FaMapMarkerAlt className="mr-2 text-teal-500" /> Lives At
//                     </label>
//                     <div className="relative">
//                         <input
//                             id="livesAt"
//                             type="text"
//                             placeholder="Enter your address..."
//                             value={formData.livesAt}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                         />
//                         <button
//                             type="button"
//                             onClick={handleLocationClick}
//                             className="absolute right-2 top-1/3 transform -translate-y-1/2 bg-teal-500 text-white p-2 rounded-full hover:bg-teal-400"
//                         >
//                             <FaMapMarkerAlt />
//                         </button>
//                     </div>
                    
//                     <label className="block mb-2">Have a car</label>
//                     <div className="flex items-center mb-4">
//                         <input 
//                             className="mr-2" 
//                             type="radio" 
//                             id="yes" 
//                             name="car" 
//                             value="yes" 
//                             checked={formData.haveACar === "yes"}
//                             onChange={handleChange} 
//                         />
//                         <label htmlFor="yes">Yes</label>
//                         <input 
//                             className="ml-4 mr-2" 
//                             type="radio" 
//                             id="no" 
//                             name="car" 
//                             value="no" 
//                             checked={formData.haveACar === "no"}
//                             onChange={handleChange} 
//                         />
//                         <label htmlFor="no">No</label>
//                     </div>
                    
//                     <button
//                         onClick={register}
//                         disabled={!Object.values(formData).every(val => val)}
//                         className={`w-full py-2 ${!Object.values(formData).every(val => val) ? 'bg-teal-500 cursor-not-allowed' : 'bg-teal-300 hover:bg-teal-500'} text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4`}
//                     >
//                         Sign Up
//                     </button>
                    
//                     <div className="flex justify-center mb-4 bg-teal-500 cursor-pointer text-white" onClick={handleGoogleSignUp} >
//                     <FontAwesomeIcon icon={faGoogle} />
//                         <span className="ml-2 text-white">Sign Up With Google</span>
//                     </div>
                    
//                     <div className="mt-4 text-center">
//                         <Link to="/login" className="text-teal-500 hover:underline">
//                             Already have an account?
//                         </Link>
//                     </div>
//                 </div>
             
//             </div>
//         </div>
//     );
// };

// export default SignUp;







// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { FaMapMarkerAlt } from "react-icons/fa"; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import routeImage from '../../assets/route2-removebg-preview.png';
// import route from '../../assets/z-TrhLCn1abMU-unsplash.jpg';

// const SignUp = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         gender: "",
//         birthday: "",
//         phone: "",
//         haveACar: "",
//         livesAt: ""
//     });
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData(prevState => ({ ...prevState, [id]: value }));
//     };

//     const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     const validatePassword = password => /^(?=.*[A-Za-z]).{8,}$/.test(password);
//     const validatePhone = phone => /^07\d{8}$/.test(phone);

//     const register = async () => {
//         setError("");

//         const { name, email, password, confirmPassword, gender, birthday, phone, haveACar, livesAt } = formData;

//         if (!name || !email || !password || !confirmPassword || !gender || !birthday || !phone || !haveACar || !livesAt) {
//             setError("Please fill in all fields.");
//             return;
//         }

//         if (!validateEmail(email)) {
//             setError("Invalid email format");
//             return;
//         }

//         if (!validatePassword(password)) {
//             setError("Password must be at least 8 characters long and include at least one letter and one number");
//             return;
//         }

//         if (password !== confirmPassword) {
//             setError("Passwords do not match");
//             return;
//         }

//         if (!validatePhone(phone)) {
//             setError("Phone number must be 10 digits long and start with 07");
//             return;
//         }

//         try {
//             localStorage.setItem("register", name);
//             await Swal.fire({
//                 title: "Welcome To Meshwar!",
//                 text: "You get 50 points. Start your journey.",
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

//     const handleGoogleSignUp = async () => {
//         try {
//             localStorage.setItem("register", formData.name);
//             await Swal.fire({
//                 title: "Welcome To Meshwar!",
//                 text: "You get 50 points. Start your journey.",
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
//             setFormData(prevState => ({ ...prevState, livesAt: `Lat: ${latitude}, Lon: ${longitude}` }));
//         }, error => {
//             setError("Failed to get location");
//         });
//     };

//     return (
//         <div
//             className="flex items-center justify-center p-8 bg-cover bg-center bg-[#F9E1FF20]"
//             style={{ backgroundImage: `url(${route})` }}
//         >
//             <div className="flex max-w-md mx-auto p-8 bg-white bg-opacity-90 shadow-lg rounded-lg">
//                 <div>
//                     <h3 className="text-2xl font-bold mb-4 text-center">
//                         Create Free Account
//                     </h3>
//                     {error && <div className="text-red-500 mb-4">{error}</div>}
                    
//                     <label htmlFor="name">Full Name</label>
//                     <input
//                         id="name"
//                         type="text"
//                         placeholder="Name..."
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label htmlFor="email">Enter your email</label>
//                     <input
//                         id="email"
//                         type="email"
//                         placeholder="Email..."
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label htmlFor="password">Password</label>
//                     <input
//                         id="password"
//                         type="password"
//                         placeholder="Password..."
//                         value={formData.password}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label htmlFor="confirmPassword">Confirm Password</label>
//                     <input
//                         id="confirmPassword"
//                         type="password"
//                         placeholder="Confirm Password..."
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label className="block mb-2">Gender:</label>
//                     <div className="flex items-center mb-4">
//                         <input 
//                             className="mr-2" 
//                             type="radio" 
//                             id="male" 
//                             name="gender" 
//                             value="male" 
//                             checked={formData.gender === "male"}
//                             onChange={handleChange} 
//                         />
//                         <label htmlFor="male">Male</label>
//                         <input 
//                             className="ml-4 mr-2" 
//                             type="radio" 
//                             id="female" 
//                             name="gender" 
//                             value="female" 
//                             checked={formData.gender === "female"}
//                             onChange={handleChange} 
//                         />
//                         <label htmlFor="female">Female</label>
//                     </div>
                    
//                     <label htmlFor="birthday">Date Of Birth</label>
//                     <input
//                         id="birthday"
//                         type="date"
//                         value={formData.birthday}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label htmlFor="phone">Phone number</label>
//                     <input
//                         id="phone"
//                         type="tel"
//                         placeholder="Phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label htmlFor="livesAt" className="flex items-center">
//                         <FaMapMarkerAlt className="mr-2 text-teal-500" /> Lives At
//                     </label>
//                     <div className="relative">
//                         <input
//                             id="livesAt"
//                             type="text"
//                             placeholder="Enter your address..."
//                             value={formData.livesAt}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                         />
//                         <button
//                             type="button"
//                             onClick={handleLocationClick}
//                             className="absolute right-2 top-1/3 transform -translate-y-1/2 bg-teal-500 text-white p-2 rounded-full hover:bg-teal-400"
//                         >
//                             <FaMapMarkerAlt />
//                         </button>
//                     </div>
                    
//                     <label className="block mb-2">Have a car</label>
//                     <div className="flex items-center mb-4">
//                         <input 
//                             className="mr-2" 
//                             type="radio" 
//                             id="yes" 
//                             name="car" 
//                             value="yes" 
//                             checked={formData.haveACar === "yes"}
//                             onChange={handleChange} 
//                         />
//                         <label htmlFor="yes">Yes</label>
//                         <input 
//                             className="ml-4 mr-2" 
//                             type="radio" 
//                             id="no" 
//                             name="car" 
//                             value="no" 
//                             checked={formData.haveACar === "no"}
//                             onChange={handleChange} 
//                         />
//                         <label htmlFor="no">No</label>
//                     </div>
                    
//                     <button
//                         onClick={register}
//                         disabled={!Object.values(formData).every(val => val)}
//                         className={`w-full py-2 ${!Object.values(formData).every(val => val) ? 'bg-teal-500 cursor-not-allowed' : 'bg-teal-300 hover:bg-teal-400'} text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4`}
//                     >
//                         Sign Up
//                     </button>
                    
//                     <button
//                         onClick={handleGoogleSignUp}
//                         className="w-full py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg flex items-center justify-center mb-4"
//                     >
//                         <FontAwesomeIcon icon={faGoogle} className="mr-2" />
//                         <span>Sign Up With Google</span>
//                     </button>
                    
//                     <div className="mt-4 text-center">
//                         <Link to="/login" className="text-teal-500 hover:underline">
//                             Already have an account?
//                         </Link>
//                     </div>
//                 </div>
             
//             </div>
//         </div>
//     );
// };

// export default SignUp;







// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { FaMapMarkerAlt } from "react-icons/fa"; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import route from '../../assets/z-TrhLCn1abMU-unsplash.jpg';

// const SignUp = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         gender: "",
//         birthday: "",
//         phone: "",
//         haveACar: "",
//         livesAt: ""
//     });
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData(prevState => ({ ...prevState, [id]: value }));
//     };

//     const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     const validatePassword = password => /^(?=.*[A-Za-z]).{8,}$/.test(password);
//     const validatePhone = phone => /^07\d{8}$/.test(phone);

//     const register = async () => {
//         setError("");

//         const { name, email, password, confirmPassword, gender, birthday, phone, haveACar, livesAt } = formData;

//         if (!name || !email || !password || !confirmPassword || !gender || !birthday || !phone || !haveACar || !livesAt) {
//             setError("Please fill in all fields.");
//             return;
//         }

//         if (!validateEmail(email)) {
//             setError("Invalid email format");
//             return;
//         }

//         if (!validatePassword(password)) {
//             setError("Password must be at least 8 characters long and include at least one letter and one number");
//             return;
//         }

//         if (password !== confirmPassword) {
//             setError("Passwords do not match");
//             return;
//         }

//         if (!validatePhone(phone)) {
//             setError("Phone number must be 10 digits long and start with 07");
//             return;
//         }

//         try {
//             localStorage.setItem("register", name);
//             await Swal.fire({
//                 title: "Welcome To Meshwar!",
//                 text: "You get 50 points. Start your journey.",
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

//     const handleGoogleSignUp = async () => {
//         try {
//             localStorage.setItem("register", formData.name);
//             await Swal.fire({
//                 title: "Welcome To Meshwar!",
//                 text: "You get 50 points. Start your journey.",
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
//             setFormData(prevState => ({ ...prevState, livesAt: `Lat: ${latitude}, Lon: ${longitude}` }));
//         }, error => {
//             setError("Failed to get location");
//         });
//     };

//     return (
//         <div
//             className="flex items-center justify-center p-8 bg-cover bg-center bg-[#F9E1FF20]"
//             style={{ backgroundImage: `url(${route})` }}
//         >
//             <div className="flex max-w-md mx-auto p-8 bg-white bg-opacity-90 shadow-lg rounded-lg">
//                 <div>
//                     <h3 className="text-2xl font-bold mb-4 text-center">
//                         Create Free Account
//                     </h3>
//                     {error && <div className="text-red-500 mb-4">{error}</div>}
                    
//                     <label htmlFor="name">Full Name</label>
//                     <input
//                         id="name"
//                         type="text"
//                         placeholder="Name..."
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label htmlFor="email">Enter your email</label>
//                     <input
//                         id="email"
//                         type="email"
//                         placeholder="Email..."
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label htmlFor="password">Password</label>
//                     <input
//                         id="password"
//                         type="password"
//                         placeholder="Password..."
//                         value={formData.password}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label htmlFor="confirmPassword">Confirm Password</label>
//                     <input
//                         id="confirmPassword"
//                         type="password"
//                         placeholder="Confirm Password..."
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label className="block mb-2">Gender:</label>
//                     <div className="flex items-center mb-4">
//                         <input 
//                             className="mr-2" 
//                             type="radio" 
//                             id="male" 
//                             name="gender" 
//                             value="male" 
//                             checked={formData.gender === "male"}
//                             onChange={handleChange} 
//                         />
//                         <label htmlFor="male">Male</label>
//                         <input 
//                             className="ml-4 mr-2" 
//                             type="radio" 
//                             id="female" 
//                             name="gender" 
//                             value="female" 
//                             checked={formData.gender === "female"}
//                             onChange={handleChange} 
//                         />
//                         <label htmlFor="female">Female</label>
//                     </div>
                    
//                     <label htmlFor="birthday">Date Of Birth</label>
//                     <input
//                         id="birthday"
//                         type="date"
//                         value={formData.birthday}
//                         onChange={handleChange}
//                         max={new Date().toISOString().split('T')[0]} // Disable future dates
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label htmlFor="phone">Phone number</label>
//                     <input
//                         id="phone"
//                         type="tel"
//                         placeholder="Phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                     />
                    
//                     <label htmlFor="livesAt" className="flex items-center">
//                         <FaMapMarkerAlt className="mr-2 text-teal-500" /> Lives At
//                     </label>
//                     <div className="relative">
//                         <input
//                             id="livesAt"
//                             type="text"
//                             placeholder="Enter your address..."
//                             value={formData.livesAt}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//                         />
//                         <button
//                             type="button"
//                             onClick={handleLocationClick}
//                             className="absolute right-2 top-1/3 transform -translate-y-1/2 bg-teal-500 text-white p-2 rounded-full hover:bg-teal-400"
//                         >
//                             <FaMapMarkerAlt />
//                         </button>
//                     </div>
                    
//                     <label className="block mb-2">Have a car</label>
//                     <div className="flex items-center mb-4">
//                         <input 
//                             className="mr-2" 
//                             type="radio" 
//                             id="yes" 
//                             name="haveACar" 
//                             value="yes" 
//                             checked={formData.haveACar === "yes"}
//                             onChange={handleChange} 
//                         />
//                         <label htmlFor="yes">Yes</label>
//                         <input 
//                             className="ml-4 mr-2" 
//                             type="radio" 
//                             id="no" 
//                             name="haveACar" 
//                             value="no" 
//                             checked={formData.haveACar === "no"}
//                             onChange={handleChange} 
//                         />
//                         <label htmlFor="no">No</label>
//                     </div>
                    
//                     <button
//                         onClick={register}
//                         disabled={!Object.values(formData).every(val => val)}
//                         className={`w-full py-2 ${!Object.values(formData).every(val => val) ? 'bg-teal-500 cursor-not-allowed' : 'bg-teal-300 hover:bg-teal-500'} text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4`}
//                     >
//                         Sign Up
//                     </button>
                    
//                     <button
//                         onClick={handleGoogleSignUp}
//                         className="w-full py-2 bg-teal-300 hover:bg-teal-400 text-white rounded-lg flex items-center justify-center mb-4"
//                     >
//                         <FontAwesomeIcon icon={faGoogle} className="mr-2" />
//                         <span>Sign Up With Google</span>
//                     </button>
                    
//                     <div className="mt-4 text-center">
//                         <Link to="/login" className="text-teal-500 hover:underline">
//                             Already have an account?
//                         </Link>
//                     </div>
//                 </div>
             
//             </div>
//         </div>
//     );
// };

// export default SignUp;
