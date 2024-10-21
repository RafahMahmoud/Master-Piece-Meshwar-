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

export default function BecomePartner() {
  const [partnerData, setPartnerData] = useState({
    companyName: "",
    fullName: "",
    businessEmail: "",
    details: "",
    phoneNumber: "",
    city:"",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!partnerData.companyName || !partnerData.fullName || !partnerData.businessEmail || !partnerData.details || !partnerData.phoneNumber || !partnerData.city) {
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

  return (
    <div className="become-page flex flex-col md:flex-row p-4">
      <div className="md:w-2/3">
        <h1 className="become-title text-4xl font-bold mb-4">Grow your business online with Meshwar!</h1>
        <p className="become-disc text-lg mb-8">Partner with us to reach more customers, earn more money and grow your business online - your success story begins here</p>
      
        <div className="auth-container">
          <h2 className="text-xl font-bold mb-8">Ready to grow your business?</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Form inputs */}
            <div className="input-group">
              <label htmlFor="companyname" className="block text-lg font-semibold mb-2">Company Name</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                id="companyname"
                value={partnerData.companyName}
                onChange={(e) => setPartnerData({ ...partnerData, companyName: e.target.value })}
              />
            </div>


            <div className="input-group ml-8 mb-4">
          <label htmlFor="partnerFullname" className="text-lg font-semibold mr-4">Full Name</label>
          <input
            className="mb-2 p-2 border border-gray-300 rounded w-1/3"
            type="text"
            id="partnerFullname"
            value={partnerData.fullName}
            onChange={(e) => setPartnerData({ ...partnerData, fullName: e.target.value })}
          />
        </div>

        <div className="input-group ml-8 mb-4">
          <label htmlFor="businessemail" className="text-lg font-semibold mr-16">Business E-mail</label>
          <input
            className="mb-2 p-2 border border-gray-300 rounded w-1/3"
            type="email"
            id="businessemail"
            value={partnerData.businessEmail}
            onChange={(e) => setPartnerData({ ...partnerData, businessEmail: e.target.value })}
          />
        </div>

        <div className="input-group ml-8 mb-4">
          <label htmlFor="details" className="text-lg font-semibold mr-4">Details</label>
          <input
            className="mb-2 p-2 border border-gray-300 rounded w-1/3"
            type="text"
            id="details"
            value={partnerData.details}
            onChange={(e) => setPartnerData({ ...partnerData, details: e.target.value })}
          />
        </div>
        <div className="input-group ml-8 mb-4">
          <label htmlFor="city" className="text-lg font-semibold mr-4">City</label>
          <input
            className="mb-2 p-2 border border-gray-300 rounded w-1/3"
            type="text"
            id="city"
            value={partnerData.city}
            onChange={(e) => setPartnerData({ ...partnerData, city: e.target.value })}
          />
        </div>

        <div className="input-group ml-8 mb-4">
          <label htmlFor="partnerPhonenumber" className="text-lg font-semibold mr-8">Phone Number</label>
          <input
            className="mb-2 p-2 border border-gray-300 rounded w-1/3"
            type="tel"
            id="partnerPhonenumber"
            value={partnerData.phoneNumber}
            onChange={(e) => setPartnerData({ ...partnerData, phoneNumber: e.target.value })}
          />
        </div>

            <button
              type="submit"
              className="btn px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-700 w-full md:w-auto"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="md:w-1/3 mt-8 md:mt-0">
        <img className="become-img w-full" src="/path/to/your/image.jpg" alt="Business Improvement"/>
      </div>
    </div>
  );
}
