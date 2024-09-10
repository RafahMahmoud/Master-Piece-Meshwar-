// import React, { useState } from 'react';
// import { Search, Bell, Users } from 'lucide-react';

// const SocialMediaProfile = () => {
//   const [activeTab, setActiveTab] = useState('home');

//   const renderContent = () => {
//     switch(activeTab) {
//       case 'groups':
//         return (
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold mb-4">My Groups</h2>
//             {['Hiking Enthusiasts', 'Book Club', 'Foodies Unite', 'Tech Innovators'].map((group, index) => (
//               <div key={index} className="bg-white p-4 rounded-md shadow">
//                 <h3 className="text-lg font-semibold">{group}</h3>
//                 <p className="text-sm text-gray-500">120 members</p>
//               </div>
//             ))}
//           </div>
//         );
//       case 'outings':
//         return (
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold mb-4">My Outings</h2>
//             {['Beach Day', 'Mountain Hike', 'City Tour', 'Cooking Class'].map((outing, index) => (
//               <div key={index} className="bg-white p-4 rounded-md shadow">
//                 <h3 className="text-lg font-semibold">{outing}</h3>
//                 <p className="text-sm text-gray-500">Scheduled for next week</p>
//               </div>
//             ))}
//           </div>
//         );
//       case 'liked':
//         return (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <h2 className="text-2xl font-bold mb-4 col-span-full">Liked Posts</h2>
//             {[1, 2, 3, 4, 5, 6].map((num) => (
//               <div key={num} className="bg-white p-4 rounded-md shadow">
//                 <img src={`/api/placeholder/300/200?text=Liked Post ${num}`} alt={`Liked Post ${num}`} className="w-full h-40 object-cover rounded-md mb-2" />
//                 <p className="text-red-500">❤ {50 + num * 10} likes</p>
//               </div>
//             ))}
//           </div>
//         );
//       default:
//         return (
//           <div className="space-y-4">
//             <h2 className="text-2xl font-bold mb-4">Home Feed</h2>
//             {/* Post 1 */}
//             <div className="bg-white p-4 rounded-md shadow">
//               <img src="/api/placeholder/400/300" alt="Post 1" className="w-full h-48 object-cover rounded-md mb-2" />
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center space-x-2">
//                   <button className="text-red-500">❤ 81 likes</button>
//                 </div>
//                 <p className="text-sm text-gray-500">At Petra, Jordan</p>
//               </div>
//               <p className="mt-2">It was a charming day.</p>
//             </div>
//             {/* Post 2 */}
//             <div className="bg-white p-4 rounded-md shadow">
//               <img src="/api/placeholder/400/300" alt="Post 2" className="w-full h-48 object-cover rounded-md mb-2" />
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center space-x-2">
//                   <button className="text-red-500">❤ 171 likes</button>
//                 </div>
//                 <p className="text-sm text-gray-500">At Amman, Jordan</p>
//               </div>
//               <p className="mt-2">Nothing is more beautiful.</p>
//             </div>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-gray-100">
//       {/* Side Navigation */}
//       <div className="w-full md:w-1/4 bg-white p-4 border-r border-gray-200">
//         <div className="flex flex-col items-center mb-6">
//           <img src="/api/placeholder/100/100" alt="Profile" className="w-24 h-24 rounded-full mb-2" />
//           <h2 className="text-xl font-semibold">Ms.Laila Dweqat</h2>
//           <p className="text-sm text-gray-500">430 points</p>
//           <p className="text-xs text-gray-400">Birthday: 2 April 1985</p>
//           <p className="text-xs text-gray-400">From: Amman, Jordan</p>
//         </div>
//         <nav className="space-y-2">
//           <button 
//             className={`w-full py-2 px-4 text-left rounded-md ${activeTab === 'home' ? 'bg-gray-200' : ''}`}
//             onClick={() => setActiveTab('home')}
//           >
//             Home
//           </button>
//           <button 
//             className={`w-full py-2 px-4 text-left rounded-md ${activeTab === 'groups' ? 'bg-gray-200' : ''}`}
//             onClick={() => setActiveTab('groups')}
//           >
//             Groups
//           </button>
//           <button 
//             className={`w-full py-2 px-4 text-left rounded-md ${activeTab === 'outings' ? 'bg-gray-200' : ''}`}
//             onClick={() => setActiveTab('outings')}
//           >
//             Outings
//           </button>
//           <button 
//             className={`w-full py-2 px-4 text-left rounded-md ${activeTab === 'liked' ? 'bg-gray-200' : ''}`}
//             onClick={() => setActiveTab('liked')}
//           >
//             Liked
//           </button>
//         </nav>
//         <button className="w-full mt-4 py-2 px-4 bg-pink-500 text-white rounded-md">
//           Update Your Preferences
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4 overflow-y-auto">
//         <div className="mb-4 flex justify-between items-center">
//           <div className="relative">
//             <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 border rounded-md" />
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           </div>
//           <div className="flex space-x-4">
//             <Bell />
//             <Users />
//           </div>
//         </div>
        
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default SocialMediaProfile;





import React, { useState } from 'react';
import { Search, Bell, Users } from 'lucide-react';
import pro1 from '../../assets/laila.jpg';
import G1 from '../../assets/activities/m21.jpg';
import G2 from '../../assets/activities/m10.webp';
import L1 from '../../assets/restaurents/pizza.jpg';
import L6 from '../../assets/restaurents/rice.webp';
import L3 from '../../assets/restaurents/rooftop-cafe.jpg';
import L5 from '../../assets/restaurents/shawerma.jpg';
import L2 from '../../assets/activities/s18.jpg';
import L4 from '../../assets/activities/m3.jpg';
import NavBar from '../NavBar/NavBar';
import I1 from '../../assets/new group.png';
import I2 from '../../assets/new trip.jpg';
import { useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';

const SocialMediaProfile = () => {
  const [activeTab, setActiveTab] = useState('gallery');
  const [outingsView, setOutingsView] = useState('upcoming');
  const navigate = useNavigate();


  const renderContent = () => {
    switch(activeTab) {
      case 'groups':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">My Groups</h2>
            {['Hiking Enthusiasts', 'Book Club', 'Foodies Unite', 'Tech Innovators'].map((group, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow">
                <h3 className="text-lg font-semibold">{group}</h3>
                <p className="text-sm text-gray-500">12 members</p>
              </div>
            ))}
          </div>
        );
      case 'outings':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">My Outings</h2>
            <div className="flex space-x-4 mb-4">
              <button 
                className={`py-2 px-4 rounded-md ${outingsView === 'upcoming' ? 'bg-teal-500 text-white' : 'bg-[#F9E1FF]'}`}
                onClick={() => setOutingsView('upcoming')}
              >
                Upcoming Outings
              </button>
              <button 
                className={`py-2 px-4 rounded-md ${outingsView === 'past' ? 'bg-teal-500 text-white' : 'bg-[#F9E1FF]'}`}
                onClick={() => setOutingsView('past')}
              >
                Past Outings
              </button>
            </div>
            {outingsView === 'upcoming' ? (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Upcoming Outings</h3>
                {['Beach Day', 'Mountain Hike', 'City Tour', 'Cooking Class'].map((outing, index) => (
                  <div key={index} className="bg-white p-4 rounded-md shadow">
                    <h4 className="text-lg font-semibold">{outing}</h4>
                    <p className="text-sm text-gray-500">Scheduled for next week</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Past Outings</h3>
                {['Desert Safari', 'Museum Visit', 'Kayaking Adventure', 'Wine Tasting'].map((outing, index) => (
                  <div key={index} className="bg-white p-4 rounded-md shadow">
                    <h4 className="text-lg font-semibold">{outing}</h4>
                    <p className="text-sm text-gray-500">Attended last month</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      case 'liked':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <h2 className="text-2xl font-bold mb-4 col-span-full">Liked Posts</h2>
            {[L1, L2, L3, L4, L5, L6].map((num) => (
              <div key={num} className="bg-white p-4 rounded-md shadow">
                <img src={`${num}`} alt={`Liked Post ${num}`} className="w-full h-40 object-cover rounded-md mb-2" />
                <p className="text-red-500">❤ {50 + 2 * 10} likes</p>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="space-y-4 ">
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            {/* Post 1 */}
            <div className=' grid justify-center align-center space-y-8 w-full'>
            <div className="bg-white p-4 rounded-md shadow  w-[50rem] ">
              <img src={G1} alt="Post 1" className="w-full h-72 object-cover rounded-md mb-2 " />
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <button className="text-red-500">❤ 81 likes</button>
                </div>
                <p className="text-sm text-gray-500">At Petra, Jordan</p>
              </div>
              <p className="mt-2">It was a charming day.</p>
            </div>
            {/* Post 2 */}
            <div className="bg-white p-4 rounded-md shadow w-[50rem] ">
              <img src={G2} alt="Post 2" className="w-full h-72 object-cover rounded-md mb-2 " />
              <div className="flex justify-between items-center">
                <div className="flex items-center ">
                  <button className="text-red-500">❤ 171 likes</button>
                </div>
                <p className="text-sm text-gray-500">At Amman, Jordan</p>
              </div>
              <p className="mt-2">Nothing is more beautiful.</p>
            </div>
            </div>
          </div>
        );
    }
  };
  const goOut = async () => {
    // const navigate = useNavigate();
    navigate("/NewOuting");
  }
  return (
    <div>
      <NavBar/>
    <div className="flex flex-col md:flex-row h-screen ">
      
      {/* Side Navigation */}
      <div className="w-full md:w-1/4  border-r border-gray-200 pt-[2rem]  pl-[7rem] pr-[2rem] ">
        <div className="flex flex-col items-center mb-[3rem] bg-red">
          <img src={pro1} alt="Profile" className="w-24 h-24 rounded-full mb-2" />
          <h2 className="text-2xl font-semibold">Ms.Laila Dweqat</h2>
          <p className="text-base text-black">430 points</p>
          <p className="text-sm text-gray-500">Birthday: 2 April 1985</p>
          <p className="text-sm text-gray-500">From: Amman, Jordan</p>
        </div>
        <nav className="space-y-2">
          <button 
            className={`w-full py-2 px-4 text-left rounded-md hover:bg-[#F9E1FF] ${activeTab === 'gallery' ? 'bg-[#F9E1FF]' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            My Gallery
          </button>
          <button 
            className={`w-full py-2 px-4 text-left rounded-md hover:bg-[#F9E1FF] ${activeTab === 'groups' ? 'bg-[#F9E1FF]' : ''}`}
            onClick={() => setActiveTab('groups')}
          >
            Groups
          </button>
          <button 
            className={`w-full py-2 px-4 text-left rounded-md hover:bg-[#F9E1FF] ${activeTab === 'outings' ? 'bg-[#F9E1FF]' : ''}`}
            onClick={() => setActiveTab('outings')}
          >
            Outings
          </button>
          <button 
            className={`w-full py-2 px-4 text-left rounded-md hover:bg-[#F9E1FF] ${activeTab === 'liked' ? 'bg-[#F9E1FF]' : ''}`}
            onClick={() => setActiveTab('liked')}
          >
            Liked
          </button>
        </nav>
        <button className="w-full mt-4 py-2 px-4 bg-teal-500 text-white rounded-md hover:bg-teal-400">
          Update Your Preferences
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto pt-[3rem]">
        <div className="mb-4 flex justify-between items-center">
          <div className="relative">
            <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 border rounded-md" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex space-x-4">
            <Bell />
            <img src={I1} alt="Profile" className="w-8 h-8  m-0" />
            <img src={I2} alt="Profile" className="w-[3rem] h-[2rem] mt-0 pt-0 cursor-pointer" onClick={goOut}/>
          </div>
        </div>
        
        {renderContent()}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default SocialMediaProfile;