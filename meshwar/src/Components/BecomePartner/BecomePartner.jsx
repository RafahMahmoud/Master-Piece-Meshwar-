// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import become from '../../assets/qq.jpg';
// export default function BecomePartner() {
//   const [partnerData, setPartnerData] = useState({
//     companyName: "",
//     fullName: "",
//     businessEmail: "",
//     details: "",
//     phoneNumber: "",
//   });
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (!partnerData.companyName || !partnerData.fullName || !partnerData.businessEmail || !partnerData.details || !partnerData.phoneNumber) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(partnerData.businessEmail)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     const phonePattern = /^[0-9]{10,15}$/;
//     if (!phonePattern.test(partnerData.phoneNumber)) {
//       alert("Please enter a valid phone number.");
//       return;
//     }

//     sessionStorageStorage.setItem('partner', JSON.stringify(partnerData));
//       navigate('/');
//   };

//   return (
//     <div className="bocome-page flex">
//         <div>
//         <p className="become-title text-4xl font-bold">Grow your business online with Meshwar!</p>
//         <p className="become-disc text-lg">Partner with us to reach more customers,earn more money and grow your business online - your success story begins here</p>
      
//     <div className="auth-container ml-28 mt-20">
//       <h2 className="text-xl font-bold mb-8">Ready to grow your business?</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Form Inputs */}
//         <div className="input-group ml-8 mb-4">
//           <label htmlFor="companyname" className="text-lg font-semibold mr-4">Company Name</label>
//           <input
//             className="mb-2 p-2 border border-gray-300 rounded w-1/3"
//             type="text"
//             id="companyname"
//             value={partnerData.companyName}
//             onChange={(e) => setPartnerData({ ...partnerData, companyName: e.target.value })}
//           />
//         </div>

        // <div className="input-group ml-8 mb-4">
        //   <label htmlFor="partnerFullname" className="text-lg font-semibold mr-4">Full Name</label>
        //   <input
        //     className="mb-2 p-2 border border-gray-300 rounded w-1/3"
        //     type="text"
        //     id="partnerFullname"
        //     value={partnerData.fullName}
        //     onChange={(e) => setPartnerData({ ...partnerData, fullName: e.target.value })}
        //   />
        // </div>

        // <div className="input-group ml-8 mb-4">
        //   <label htmlFor="businessemail" className="text-lg font-semibold mr-16">Business E-mail</label>
        //   <input
        //     className="mb-2 p-2 border border-gray-300 rounded w-1/3"
        //     type="email"
        //     id="businessemail"
        //     value={partnerData.businessEmail}
        //     onChange={(e) => setPartnerData({ ...partnerData, businessEmail: e.target.value })}
        //   />
        // </div>

        // <div className="input-group ml-8 mb-4">
        //   <label htmlFor="details" className="text-lg font-semibold mr-4">Details</label>
        //   <input
        //     className="mb-2 p-2 border border-gray-300 rounded w-1/3"
        //     type="text"
        //     id="details"
        //     value={partnerData.details}
        //     onChange={(e) => setPartnerData({ ...partnerData, details: e.target.value })}
        //   />
        // </div>

        // <div className="input-group ml-8 mb-4">
        //   <label htmlFor="partnerPhonenumber" className="text-lg font-semibold mr-8">Phone Number</label>
        //   <input
        //     className="mb-2 p-2 border border-gray-300 rounded w-1/3"
        //     type="tel"
        //     id="partnerPhonenumber"
        //     value={partnerData.phoneNumber}
        //     onChange={(e) => setPartnerData({ ...partnerData, phoneNumber: e.target.value })}
        //   />
        // </div>

//         <button
//           type="submit"
//           className="btn ml-8 mt-8 mb-52 px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-700"
//         >
//           Send
//         </button>
//       </form>

      
//     </div>
//     </div>

//         <img className="become-img mt-[1rem] w-1/3 " src={become} alt="Business Improvment"/>
//     </div>
    
//   );
// }





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// export default function BecomePartner() {
//   const [partnerData, setPartnerData] = useState({
//     companyName: "",
//     fullName: "",
//     businessEmail: "",
//     details: "",
//     phoneNumber: "",
//   });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!partnerData.companyName || !partnerData.fullName || !partnerData.businessEmail || !partnerData.details || !partnerData.phoneNumber) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(partnerData.businessEmail)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     const phonePattern = /^[0-9]{10,15}$/;
//     if (!phonePattern.test(partnerData.phoneNumber)) {
//       alert("Please enter a valid phone number.");
//       return;
//     }

//     try {
//       await axios.post('http://localhost:3003/api/partners', partnerData);
//       alert('Partner request submitted successfully!');
//       navigate('/');
//     } catch (error) {
//       console.error('Error submitting partner request:', error);
//       alert('An error occurred while submitting your request. Please try again.');
//     }
//   };

//   return (
//     <div className="become-page flex flex-col md:flex-row p-4">
//       <div className="md:w-2/3">
//         <h1 className="become-title text-4xl font-bold mb-4">Grow your business online with Meshwar!</h1>
//         <p className="become-disc text-lg mb-8">Partner with us to reach more customers, earn more money and grow your business online - your success story begins here</p>
      
//         <div className="auth-container">
//           <h2 className="text-xl font-bold mb-8">Ready to grow your business?</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Form inputs */}
//             <div className="input-group">
//               <label htmlFor="companyname" className="block text-lg font-semibold mb-2">Company Name</label>
//               <input
//                 className="w-full p-2 border border-gray-300 rounded"
//                 type="text"
//                 id="companyname"
//                 value={partnerData.companyName}
//                 onChange={(e) => setPartnerData({ ...partnerData, companyName: e.target.value })}
//               />
//             </div>


//             <div className="input-group ml-8 mb-4">
//           <label htmlFor="partnerFullname" className="text-lg font-semibold mr-4">Full Name</label>
//           <input
//             className="mb-2 p-2 border border-gray-300 rounded w-1/3"
//             type="text"
//             id="partnerFullname"
//             value={partnerData.fullName}
//             onChange={(e) => setPartnerData({ ...partnerData, fullName: e.target.value })}
//           />
//         </div>

//         <div className="input-group ml-8 mb-4">
//           <label htmlFor="businessemail" className="text-lg font-semibold mr-16">Business E-mail</label>
//           <input
//             className="mb-2 p-2 border border-gray-300 rounded w-1/3"
//             type="email"
//             id="businessemail"
//             value={partnerData.businessEmail}
//             onChange={(e) => setPartnerData({ ...partnerData, businessEmail: e.target.value })}
//           />
//         </div>

//         <div className="input-group ml-8 mb-4">
//           <label htmlFor="details" className="text-lg font-semibold mr-4">Details</label>
//           <input
//             className="mb-2 p-2 border border-gray-300 rounded w-1/3"
//             type="text"
//             id="details"
//             value={partnerData.details}
//             onChange={(e) => setPartnerData({ ...partnerData, details: e.target.value })}
//           />
//         </div>

//         <div className="input-group ml-8 mb-4">
//           <label htmlFor="partnerPhonenumber" className="text-lg font-semibold mr-8">Phone Number</label>
//           <input
//             className="mb-2 p-2 border border-gray-300 rounded w-1/3"
//             type="tel"
//             id="partnerPhonenumber"
//             value={partnerData.phoneNumber}
//             onChange={(e) => setPartnerData({ ...partnerData, phoneNumber: e.target.value })}
//           />
//         </div>

//             <button
//               type="submit"
//               className="btn px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-700 w-full md:w-auto"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="md:w-1/3 mt-8 md:mt-0">
//         <img className="become-img w-full" src="/path/to/your/image.jpg" alt="Business Improvement"/>
//       </div>
//     </div>
//   );
// }





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// export default function BecomePartner() {
//   const [partnerData, setPartnerData] = useState({
//     companyName: "",
//     fullName: "",
//     businessEmail: "",
//     details: "",
//     phoneNumber: "",
//   });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!partnerData.companyName || !partnerData.fullName || !partnerData.businessEmail || !partnerData.details || !partnerData.phoneNumber) {
//       alert("Please fill out all fields.");
//       return;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(partnerData.businessEmail)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     const phonePattern = /^[0-9]{10,15}$/;
//     if (!phonePattern.test(partnerData.phoneNumber)) {
//       alert("Please enter a valid phone number.");
//       return;
//     }

//     try {
//       await axios.post('http://localhost:3003/api/partners', partnerData);
//       alert('Partner request submitted successfully!');
//       navigate('/');
//     } catch (error) {
//       console.error('Error submitting partner request:', error);
//       alert('An error occurred while submitting your request. Please try again.');
//     }
//   };

//   return (
//     <div className="become-page flex flex-col md:flex-row p-4">
//       <div className="md:w-2/3">
//         <h1 className="become-title text-4xl font-bold mb-4">Grow your business online with Meshwar!</h1>
//         <p className="become-disc text-lg mb-8">Partner with us to reach more customers, earn more money and grow your business online - your success story begins here</p>
      
//         <div className="auth-container">
//           <h2 className="text-xl font-bold mb-8">Ready to grow your business?</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="input-group">
//               <label htmlFor="companyname" className="block text-lg font-semibold mb-2">Company Name</label>
//               <input
//                 className="w-full p-2 border border-gray-300 rounded"
//                 type="text"
//                 id="companyname"
//                 value={partnerData.companyName}
//                 onChange={(e) => setPartnerData({ ...partnerData, companyName: e.target.value })}
//               />
//             </div>

//             <div className="input-group ml-8 mb-4">
//               <label htmlFor="partnerFullname" className="text-lg font-semibold mr-4">Full Name</label>
//               <input
//                 className="mb-2 p-2 border border-gray-300 rounded w-1/3"
//                 type="text"
//                 id="partnerFullname"
//                 value={partnerData.fullName}
//                 onChange={(e) => setPartnerData({ ...partnerData, fullName: e.target.value })}
//               />
//             </div>

//             <div className="input-group ml-8 mb-4">
//               <label htmlFor="businessemail" className="text-lg font-semibold mr-16">Business E-mail</label>
//               <input
//                 className="mb-2 p-2 border border-gray-300 rounded w-1/3"
//                 type="email"
//                 id="businessemail"
//                 value={partnerData.businessEmail}
//                 onChange={(e) => setPartnerData({ ...partnerData, businessEmail: e.target.value })}
//               />
//             </div>

//             <div className="input-group ml-8 mb-4">
//               <label htmlFor="details" className="text-lg font-semibold mr-4">Details</label>
//               <input
//                 className="mb-2 p-2 border border-gray-300 rounded w-1/3"
//                 type="text"
//                 id="details"
//                 value={partnerData.details}
//                 onChange={(e) => setPartnerData({ ...partnerData, details: e.target.value })}
//               />
//             </div>

//             <div className="input-group ml-8 mb-4">
//               <label htmlFor="partnerPhonenumber" className="text-lg font-semibold mr-8">Phone Number</label>
//               <input
//                 className="mb-2 p-2 border border-gray-300 rounded w-1/3"
//                 type="tel"
//                 id="partnerPhonenumber"
//                 value={partnerData.phoneNumber}
//                 onChange={(e) => setPartnerData({ ...partnerData, phoneNumber: e.target.value })}
//               />
//             </div>

//             <button
//               type="submit"
//               className="btn px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-700 w-full md:w-auto"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="md:w-1/3 mt-8 md:mt-0">
//         <img className="become-img w-full" src="/path/to/your/image.jpg" alt="Business Improvement"/>
//       </div>
//     </div>
//   );
// }





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faUser, 
  faEnvelope, 
  faInfo, 
  faCity, 
  faPhone,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
const BecomePartner = () => {
  const [partnerData, setPartnerData] = useState({
    companyName: "",
    fullName: "",
    businessEmail: "",
    details: "",
    phoneNumber: "",
    city: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!partnerData.companyName || !partnerData.fullName || !partnerData.businessEmail || 
        !partnerData.details || !partnerData.phoneNumber || !partnerData.city) {
      alert("Please fill out all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(partnerData.businessEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(partnerData.phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
    }


    try {
      await axios.post('http://localhost:3003/api/partners', partnerData);
      alert('Partner request submitted successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error submitting partner request:', error);
      alert('An error occurred while submitting your request. Please try again.');
    }
  };
  const inputClasses = "w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 bg-white bg-opacity-90";
  const labelClasses = "block text-lg font-semibold text-gray-700 mb-2";
  const iconClasses = "absolute left-3 top-11 text-teal-500";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fcf2ff] to-teal-50">
      <NavBar/>
      <motion.div 
        className="max-w-4xl mx-auto mt-[4rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            Grow your business online with Meshwar
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Partner with us to reach more customers, earn more money and grow your business online
          </motion.p>
        </div>

        <motion.div 
          className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label htmlFor="companyName" className={labelClasses}>Company Name</label>
              <FontAwesomeIcon icon={faBuilding} className={iconClasses} />
              <input
                id="companyName"
                type="text"
                className={inputClasses}
                value={partnerData.companyName}
                onChange={(e) => setPartnerData({ ...partnerData, companyName: e.target.value })}
                placeholder="Enter company name"
              />
            </div>

            <div className="relative">
              <label htmlFor="fullName" className={labelClasses}>Full Name</label>
              <FontAwesomeIcon icon={faUser} className={iconClasses} />
              <input
                id="fullName"
                type="text"
                className={inputClasses}
                value={partnerData.fullName}
                onChange={(e) => setPartnerData({ ...partnerData, fullName: e.target.value })}
                placeholder="Enter your full name"
              />
            </div>

            <div className="relative">
              <label htmlFor="businessEmail" className={labelClasses}>Business Email</label>
              <FontAwesomeIcon icon={faEnvelope} className={iconClasses} />
              <input
                id="businessEmail"
                type="email"
                className={inputClasses}
                value={partnerData.businessEmail}
                onChange={(e) => setPartnerData({ ...partnerData, businessEmail: e.target.value })}
                placeholder="Enter business email"
              />
            </div>

            <div className="relative">
              <label htmlFor="details" className={labelClasses}>Details</label>
              <FontAwesomeIcon icon={faInfo} className={iconClasses} />
              <input
                id="details"
                type="text"
                className={inputClasses}
                value={partnerData.details}
                onChange={(e) => setPartnerData({ ...partnerData, details: e.target.value })}
                placeholder="Enter business details"
              />
            </div>

            <div className="relative">
              <label htmlFor="city" className={labelClasses}>City</label>
              <FontAwesomeIcon icon={faCity} className={iconClasses} />
              <input
                id="city"
                type="text"
                className={inputClasses}
                value={partnerData.city}
                onChange={(e) => setPartnerData({ ...partnerData, city: e.target.value })}
                placeholder="Enter your city"
              />
            </div>

            <div className="relative">
              <label htmlFor="phoneNumber" className={labelClasses}>Phone Number</label>
              <FontAwesomeIcon icon={faPhone} className={iconClasses} />
              <input
                id="phoneNumber"
                type="tel"
                className={inputClasses}
                value={partnerData.phoneNumber}
                onChange={(e) => setPartnerData({ ...partnerData, phoneNumber: e.target.value })}
                placeholder="Enter phone number"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 mt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              <span>Send Request</span>
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
      <Footer/>
    </div>
  );
};

export default BecomePartner;
