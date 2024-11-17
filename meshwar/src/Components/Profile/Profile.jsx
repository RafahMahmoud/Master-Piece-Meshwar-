// import React, { useState, useEffect } from 'react';
// import { Search, Bell } from 'lucide-react';
// import NavBar from '../NavBar/NavBar';
// import Footer from '../Footer/Footer';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import StepperPopup from '../stepper/stepper';

// const SocialMediaProfile = () => {
//   const [activeTab, setActiveTab] = useState('profile');
//   const [userData, setUserData] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [updatedUserData, setUpdatedUserData] = useState({
//     fullName: '',
//     dateOfBirth: '',
//     phoneNumber: '',
//     gender: '',
//     email: ''
//   });
//   const navigate = useNavigate();
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3003/api/info/user-profile', {
//         withCredentials: true // هذه الخاصية مهمة لإرسال الكوكي
//       });
//       setUserData(response.data);
//       setUpdatedUserData({
//         fullName: response.data.fullName,
//         dateOfBirth: response.data.dateOfBirth,
//         phoneNumber: response.data.phoneNumber,
//         gender: response.data.gender,
//         email: response.data.email
//       });
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//     }
//   };

//   const handleEditToggle = () => {
//     setEditMode(!editMode);
//   };

//   const handleInputChange = (e) => {
//     setUpdatedUserData({
//       ...updatedUserData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSaveChanges = async () => {
//     try {
//       await axios.put('http://localhost:3003/api/info/update-profile', updatedUserData,{
//         withCredentials: true // هذه الخاصية مهمة لإرسال الكوكي
//       }); // Assuming an API for updating user data
//       setEditMode(false);
//       fetchUserData(); // Re-fetch updated data
//     } catch (error) {
//       console.error('Error updating user data:', error);
//     }
//   };

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'profile':
//         return (
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
//             <div className="bg-white p-6 rounded-md shadow">
//               {editMode ? (
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Full Name</label>
//                     <input
//                       type="text"
//                       name="fullName"
//                       value={updatedUserData.fullName}
//                       onChange={handleInputChange}
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={updatedUserData.email}
//                       onChange={handleInputChange}
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//                     <input
//                       type="text"
//                       name="phoneNumber"
//                       value={updatedUserData.phoneNumber}
//                       onChange={handleInputChange}
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
//                     <input
//                       type="date"
//                       name="dateOfBirth"
//                       value={updatedUserData.dateOfBirth}
//                       onChange={handleInputChange}
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Gender</label>
//                     <select
//                       name="gender"
//                       value={updatedUserData.gender}
//                       onChange={handleInputChange}
//                       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
//                     >
//                       <option value="male">Male</option>
//                       <option value="female">Female</option>
//                     </select>
//                   </div>
//                   <div className="flex justify-end space-x-4">
//                     <button
//                       className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
//                       onClick={handleEditToggle}
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300"
//                       onClick={handleSaveChanges}
//                     >
//                       Save Changes
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   <p><strong>Full Name:</strong> {userData?.fullName}</p>
//                   <p><strong>Email:</strong> {userData?.email}</p>
//                   <p><strong>Phone Number:</strong> {userData?.phoneNumber}</p>
//                   <p><strong>Date of Birth:</strong> {userData?.dateOfBirth}</p>
//                   <p><strong>Gender:</strong> {userData?.gender}</p>
//                   <button
//                     className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300"
//                     onClick={handleEditToggle}
//                   >
//                     Edit Profile
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         );
//       default:
//         return <div>Select a tab</div>;
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <NavBar />
//       <div className="flex flex-col md:flex-row container mx-auto py-8">
//         {/* Side Navigation */}
//         <div className="w-full md:w-1/4 md:pr-8 mb-8 md:mb-0">
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex flex-col items-center mb-6">
//               <img
//                 src="https://via.placeholder.com/100"
//                 alt="Profile"
//                 className="w-24 h-24 rounded-full mb-4"
//               />
//               <h2 className="text-2xl font-semibold">{userData?.fullName}</h2>
//               <p className="text-base text-black">{userData?.points} points</p>
//             </div>
//             <nav className="space-y-2">
//               <button
//                 className={`w-full py-2 px-4 text-left rounded-md hover:bg-[#F9E1FF] transition duration-300 ${activeTab === 'profile' ? 'bg-[#F9E1FF]' : ''}`}
//                 onClick={() => setActiveTab('profile')}
//               >
//                 Profile
//               </button>
//             </nav>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 bg-white rounded-lg shadow p-6">
//           <div className="mb-6 flex justify-between items-center">
//             <div className="relative">
//               <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 border rounded-md" />
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </div>
//             <div className="flex space-x-4 items-center">
//               <Bell className="text-gray-600 hover:text-gray-800 cursor-pointer" />
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 mt-4"
//                 onClick={() => setIsPopupOpen(true)}
//               >
//                 Plan New Outing
//               </button>
//             </div>
//           </div>

//           {renderContent()}
//         </div>
//       </div>
//       <StepperPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
//       <Footer />
//     </div>
//   );
// };

// export default SocialMediaProfile;




import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import StepperPopup from '../stepper/stepper';
import PreviousOutingsTab from './PreviousOutingsTab';
import UpcomingOutingsTab from './UpcomingOutings';
const SocialMediaProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({
    fullName: '',
    dateOfBirth: '',
    phoneNumber: '',
    gender: '',
    email: ''
  });
  const [profileImage, setProfileImage] = useState(null); // حالة لتخزين رابط الصورة
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  useEffect(() => {
    fetchUserData();
  }, []);


  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:3003/api/info/user-profile', {
        withCredentials: true
      });
      setUserData(response.data);
      setUpdatedUserData({
        fullName: response.data.fullName,
        dateOfBirth: response.data.dateOfBirth,
        phoneNumber: response.data.phoneNumber,
        gender: response.data.gender,
        email: response.data.email
      });
      setProfileImage(response.data.profilePic); // تحميل رابط الصورة
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    setUpdatedUserData({
      ...updatedUserData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put('http://localhost:3003/api/info/update-profile', updatedUserData, {
        withCredentials: true
      });
      setEditMode(false);
      fetchUserData();
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('profileImage', file);

    try {
      const response = await axios.post('http://localhost:3003/api/info/profile-picture', formData, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setProfileImage(response.data.profilePic); // تحديث الصورة في الحالة بعد رفعها
      alert("Profile picture updated successfully!");
    } catch (error) {
      console.error('Error uploading profile picture:', error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
            <div className="bg-white p-6 rounded-md shadow">
              {editMode ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={updatedUserData.fullName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={updatedUserData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={updatedUserData.phoneNumber}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={updatedUserData.dateOfBirth}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <select
                      name="gender"
                      value={updatedUserData.gender}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
                      onClick={handleEditToggle}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300"
                      onClick={handleSaveChanges}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p><strong>Full Name:</strong> {userData?.fullName}</p>
                  <p><strong>Email:</strong> {userData?.email}</p>
                  <p><strong>Date of Birth:</strong> {userData?.dateOfBirth.split('T')[0]}</p>

                  <p><strong>Gender:</strong> {userData?.gender}</p>
                  <button
                    className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300"
                    onClick={handleEditToggle}
                  >
                    Edit Profile
                  </button>
                </div>
              )}
            </div>
          </div>
        );
        case 'previousOutings':
          return <PreviousOutingsTab />;
          case 'upcomingOutings':
  return <UpcomingOutingsTab />;
        default:
          return <div>Select a tab</div>;
      }
    };

  return (
    <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
      <NavBar />
      <div className="flex flex-col md:flex-row container mx-auto py-8">
        <div className="w-full md:w-1/4 md:pr-8 mb-8 md:mb-0">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col items-center mb-6">
            <img
  src={profileImage ? `http://localhost:3003/${profileImage}` : "https://via.placeholder.com/100"}
  alt="Profile"
  className="w-24 h-24 rounded-full mb-4"
/>

              <label className="text-sm font-medium text-gray-700 cursor-pointer mb-[1rem]">
                Change your Profile Picture
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              <h2 className="text-2xl font-semibold mb-[1.6rem]">{userData?.fullName}</h2>
            </div>
            <nav className="space-y-2">
  <button
    className={`w-full py-2 px-4 text-left rounded-md hover:bg-[#F9E1FF] transition duration-300 ${
      activeTab === 'profile' ? 'bg-[#F9E1FF]' : ''
    }`}
    onClick={() => setActiveTab('profile')}
  >
    Profile
  </button>
  <button
    className={`w-full py-2 px-4 text-left rounded-md hover:bg-[#F9E1FF] transition duration-300 ${
      activeTab === 'previousOutings' ? 'bg-[#F9E1FF]' : ''
    }`}
    onClick={() => setActiveTab('previousOutings')}
  >
    Previous Outings
  </button>
  <button
  className={`w-full py-2 px-4 text-left rounded-md hover:bg-[#F9E1FF] transition duration-300 ${
    activeTab === 'upcomingOutings' ? 'bg-[#F9E1FF]' : ''
  }`}
  onClick={() => setActiveTab('upcomingOutings')}
>
  Upcoming Outings
</button>
</nav>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow p-6">
       <div className="mb-6 flex justify-end items-center">
    
             <button
                className="bg-[#F9E1FF] px-4 py-2 rounded-md hover:bg-[#fcf2ff] transition duration-300 mt-4"
                onClick={() => setIsPopupOpen(true)}
              >
                Plan New Outing
              </button>
          </div> 
          {renderContent()}
        </div>
      </div>
      <StepperPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <Footer />
    </div>
  );
};

export default SocialMediaProfile;
