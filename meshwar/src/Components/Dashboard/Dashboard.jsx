// import React, { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { Users, Calendar, Building, User, Star, MapPin, Clock } from 'lucide-react';
// import logo from '../../assets/meshwar-logo.png';
// const MeshwarAdminDashboard = () => {
//   const [activePage, setActivePage] = useState('overview');

//   const dummyData = [
//     { name: 'Jan', users: 400, trips: 240 },
//     { name: 'Feb', users: 300, trips: 139 },
//     { name: 'Mar', users: 200, trips: 980 },
//     { name: 'Apr', users: 278, trips: 390 },
//     { name: 'May', users: 189, trips: 480 },
//   ];

//   const renderPage = () => {
//     switch (activePage) {
//       case 'overview':
//         return <OverviewPage data={dummyData} />;
//       case 'users':
//         return <UsersPage />;
//       case 'trips':
//         return <TripsPage />;
//       case 'partners':
//         return <PartnersPage />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-white w-full drop-shadow-lg">
    
//         <nav>
        
//           <ul className="flex space-x-4 pl-[7rem] pt-[1rem] ">
//             <li><img className="logo-img h-[2.5rem] w-[7.5rem]" src={logo} alt="Meshwar" /></li>
//             {['Overview', 'Users', 'Trips', 'Partners'].map((item) => (
//               <li key={item}>
//                 <button
//                   onClick={() => setActivePage(item.toLowerCase())}
//                   className={`px-4 py-2 rounded ${
//                     activePage === item.toLowerCase() ? 'bg-[#2cf2f2] text-white' : 'text-gray-800 hover:bg-gray-200'
//                   }`}
//                   >
//                   {item}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
  
//       <main className="flex-grow p-8">
//         {renderPage()}
//       </main>
//     </div>
//   );
// };

// const OverviewPage = ({ data }) => (
//   <div>
//     <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//       <StatCard title="Total Users" value="1,234" icon={<Users />} />
//       <StatCard title="Active Trips" value="56" icon={<Calendar />} />
//       <StatCard title="New Users (This Month)" value="78" icon={<User />} />
//       <StatCard title="Partners" value="25" icon={<Building />} />
//     </div>
//     <div className="mb-8">
//       <h2 className="text-2xl font-semibold mb-4">User and Trip Growth</h2>
//       <div className="h-80 bg-white p-4 rounded-lg shadow">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="users" fill="#FF204E" />
//             <Bar dataKey="trips" fill="#2cf2f2" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   </div>
// );


// const UsersPage = () => {
//     const users = [
//       { id: 1, name: 'Rafah Shraim', tripsCount: 5, lastTripDate: '2024-07-15', avgRating: 4.5 },
//       { id: 2, name: 'Noura Khaled', tripsCount: 3, lastTripDate: '2024-07-10', avgRating: 4.2 },
//               { id: 3, name: 'Ahmed Al-Sayed', tripsCount: 7, lastTripDate: '2024-06-22', avgRating: 4.8 },
//         { id: 4, name: 'Fatima Zahra', tripsCount: 2, lastTripDate: '2024-07-01', avgRating: 4.6 },
//         { id: 5, name: 'Mohammed Ali', tripsCount: 6, lastTripDate: '2024-05-30', avgRating: 4.7 },
//         { id: 6, name: 'Aisha Bint Omar', tripsCount: 4, lastTripDate: '2024-07-05', avgRating: 4.3 },
//         { id: 7, name: 'Omar Al-Hussein', tripsCount: 8, lastTripDate: '2024-06-25', avgRating: 4.9 },
//         { id: 8, name: 'Layla Al-Farouq', tripsCount: 1, lastTripDate: '2024-07-12', avgRating: 4.1 },
//         { id: 9, name: 'Youssef Ibrahim', tripsCount: 9, lastTripDate: '2024-05-20', avgRating: 4.4 }
//     ];
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">User Management</h2>
//       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="p-3 text-left">Name</th>
//             <th className="p-3 text-left">Trips Count</th>
//             <th className="p-3 text-left">Last Trip Date</th>
//             <th className="p-3 text-left">Avg Rating</th>
//             <th className="p-3 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id} className="border-b">
//               <td className="p-3">{user.name}</td>
//               <td className="p-3">{user.tripsCount}</td>
//               <td className="p-3">{user.lastTripDate}</td>
//               <td className="p-3">{user.avgRating}</td>
//               <td className="p-3">
//                 <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const TripsPage = () => {
//   const [sortBy, setSortBy] = useState('rating');
//   const trips = [
//     { id: 3, name: 'Dead Sea Relaxation', rating: 4.7, date: '2024-06-20', participants: ['Ahmed', 'Fatima'] },
//     { id: 4, name: 'Amman City Tour', rating: 4.6, date: '2024-05-25', participants: ['Mohammed', 'Aisha'] },
//     { id: 5, name: 'Jerash Ruins Exploration', rating: 4.9, date: '2024-07-10', participants: ['Omar', 'Layla'] },
//     { id: 6, name: 'Madaba Mosaics Visit', rating: 4.3, date: '2024-08-05', participants: ['Youssef', 'Noura'] },
//     { id: 7, name: 'Rainbow Street Dining', rating: 4.8, date: '2024-06-30', participants: ['Ali', 'Mona'] },
//     { id: 8, name: 'King Hussein Park Picnic', rating: 4.4, date: '2024-07-12', participants: ['Hassan', 'Laila'] },
//     { id: 9, name: 'Al Quds Restaurant', rating: 4.7, date: '2024-08-10', participants: ['Zaid', 'Sara'] },
//     { id: 10, name: 'Sufra Restaurant', rating: 4.6, date: '2024-07-20', participants: ['Tariq', 'Fatima'] },
//     { id: 11, name: 'The Royal Automobile Museum', rating: 4.5, date: '2024-06-25', participants: ['Rami', 'Jana'] },
//     { id: 12, name: 'Jafra Restaurant', rating: 4.8, date: '2024-08-02', participants: ['Khaled', 'Nadia'] },
//     { id: 13, name: 'Mamma Mia Restaurant', rating: 4.7, date: '2024-07-18', participants: ['Salim', 'Rania'] },
//     { id: 14, name: 'Zahran Park', rating: 4.9, date: '2024-08-08', participants: ['Fadi', 'Huda'] }
//   ];

//   const sortedTrips = [...trips].sort((a, b) => b[sortBy] - a[sortBy]);

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Trip Plans</h2>
//       <div className="mb-4">
//         <label htmlFor="sort" className="mr-2">Sort by:</label>
//         <select
//           id="sort"
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="rating">Rating</option>
//           <option value="date">Date</option>
//         </select>
//       </div>
//       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="p-3 text-left">Trip Name</th>
//             <th className="p-3 text-left">Rating</th>
//             <th className="p-3 text-left">Date</th>
//             <th className="p-3 text-left">Participants</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sortedTrips.map((trip) => (
//             <tr key={trip.id} className="border-b">
//               <td className="p-3">{trip.name}</td>
//               <td className="p-3">{trip.rating}</td>
//               <td className="p-3">{trip.date}</td>
//               <td className="p-3">{trip.participants.join(', ')}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const PartnersPage = () => {
//   const partners = [
//     { id: 1, name: 'Fakhreldin Restaurant', suggestedCount: 15, rating: 4.7 },
//     { id: 2, name: 'Reem Al Bawadi', suggestedCount: 22, rating: 4.5 },
//     { id: 3, name: 'Sufra Restaurant', suggestedCount: 18, rating: 4.8 },
//     { id: 4, name: 'Jafra Restaurant', suggestedCount: 10, rating: 4.6 },
//     { id: 5, name: 'Al Quds Restaurant', suggestedCount: 20, rating: 4.9 },
//     { id: 6, name: 'The Boulevard Arjaan', suggestedCount: 17, rating: 4.7 },
//     { id: 7, name: 'Sheraton Amman Al Nabil Hotel', suggestedCount: 14, rating: 4.6 },
//     { id: 8, name: 'Movenpick Resort & Spa Dead Sea', suggestedCount: 19, rating: 4.9 },
//     { id: 9, name: 'Kempinski Hotel Ishtar Dead Sea', suggestedCount: 21, rating: 4.8 },
//     { id: 10, name: 'Four Seasons Hotel Amman', suggestedCount: 16, rating: 4.7 },
//     { id: 11, name: 'Grand Hyatt Amman', suggestedCount: 13, rating: 4.5 },
//     { id: 12, name: 'InterContinental Jordan', suggestedCount: 20, rating: 4.6 },
//     { id: 13, name: 'Dead Sea Marriott Resort & Spa', suggestedCount: 18, rating: 4.8 },
//     { id: 14, name: 'Wadi Rum Bubble Luxotel', suggestedCount: 12, rating: 4.9 }
   
//   ];

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Partner Management</h2>
//       <div className="mb-4">
//         <button className="bg-[#2cf2f2] text-white px-4 py-2 rounded mr-2">Add Partner</button>
//         <button className="bg-red-500 text-white px-4 py-2 rounded">Remove Partner</button>
//       </div>
//       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="p-3 text-left">Partner Name</th>
//             <th className="p-3 text-left">Suggested Count</th>
//             <th className="p-3 text-left">Rating</th>
//           </tr>
//         </thead>
//         <tbody>
//           {partners.map((partner) => (
//             <tr key={partner.id} className="border-b">
//               <td className="p-3">{partner.name}</td>
//               <td className="p-3">{partner.suggestedCount}</td>
//               <td className="p-3">{partner.rating}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const StatCard = ({ title, value, icon }) => (
//   <div className="bg-white p-6 rounded-lg shadow flex items-center">
//     <div className="mr-4 text-[#FF204E]">{icon}</div>
//     <div>
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-2xl font-bold">{value}</p>
//     </div>
//   </div>
// );

// export default MeshwarAdminDashboard;










// // components/Dashboard.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PartnerDetailsModal from '../PartnerDetailsModal/PartnerDetailsModal';

// export default function Dashboard() {
//   const [partners, setPartners] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPartner, setSelectedPartner] = useState(null);

//   useEffect(() => {
//     fetchPartners();
//   }, []);

//   const fetchPartners = async () => {
//     try {
//       const response = await axios.get('http://localhost:3003/api/partners');
//       setPartners(response.data);
//     } catch (error) {
//       console.error('Error fetching partners:', error);
//     }
//   };

//   const handleAcceptReject = async (id, isAccepted) => {
//     try {
//       await axios.patch(`http://localhost:3003/api/partners/${id}`, { isAccepted });
//       fetchPartners();
//     } catch (error) {
//       console.error('Error updating partner status:', error);
//     }
//   };

//   const handleAddDetails = (partner) => {
//     setSelectedPartner(partner);
//     setIsModalOpen(true);
//   };

//   const handleSaveDetails = async (details) => {
//     try {
//       await axios.patch(`http://localhost:3003/api/partners/${selectedPartner._id}`, details);
//       setIsModalOpen(false);
//       fetchPartners();
//     } catch (error) {
//       console.error('Error adding partner details:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Partner Requests Dashboard</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">Company Name</th>
//               <th className="px-4 py-2">Full Name</th>
//               <th className="px-4 py-2">Email</th>
//               <th className="px-4 py-2">Phone</th>
//               <th className="px-4 py-2">Status</th>
//               <th className="px-4 py-2">Business Details</th>
//               <th className="px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {partners.map((partner) => (
//               <tr key={partner._id}>
//                 <td className="border px-4 py-2">{partner.companyName}</td>
//                 <td className="border px-4 py-2">{partner.fullName}</td>
//                 <td className="border px-4 py-2">{partner.businessEmail}</td>
//                 <td className="border px-4 py-2">{partner.phoneNumber}</td>
//                 <td className="border px-4 py-2">{partner.isAccepted ? 'Accepted' : 'Pending'}</td>
//                 <td className="border px-4 py-2">{getBusinessTypeDetails(partner)}</td>
//                 <td className="border px-4 py-2">
//                   {!partner.isAccepted && (
//                     <>
//                       <button
//                         onClick={() => handleAcceptReject(partner._id, true)}
//                         className="bg-green-500 text-white px-2 py-1 rounded mr-2"
//                       >
//                         Accept
//                       </button>
//                       <button
//                         onClick={() => handleAcceptReject(partner._id, false)}
//                         className="bg-red-500 text-white px-2 py-1 rounded"
//                       >
//                         Reject
//                       </button>
//                     </>
//                   )}
//                   <button
//                     onClick={() => handleAddDetails(partner)}
//                     className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
//                   >
//                     {partner.businessType ? 'Edit Details' : 'Add Details'}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <PartnerDetailsModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         partner={selectedPartner}
//         onSave={handleSaveDetails}
//       />
//     </div>
//   );
// }

// function getBusinessTypeDetails(partner) {
//   if (!partner.businessType) return 'Details not added';

//   switch (partner.businessType) {
//     case 'restaurant':
//       return `Restaurant - Cuisine: ${partner.restaurant.cuisineType}, Meal Price: $${partner.restaurant.mealPrice}`;
//     case 'cafe':
//       return `Cafe - Drink Price: $${partner.cafe.drinkPrice}, Dessert Price: $${partner.cafe.dessertPrice}`;
//     case 'sweetShop':
//       return `Sweet Shop - Dessert Price: $${partner.sweetShop.dessertPrice}`;
//     case 'activityShop':
//       return `Activity Shop - Type: ${partner.activityShop.activityType}, Price: $${partner.activityShop.activityPrice}`;
//     default:
//       return 'Unknown business type';
//   }
// }















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PartnerDetailsModal from '../PartnerDetailsModal/PartnerDetailsModal';

// export default function Dashboard() {
//   const [partners, setPartners] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPartner, setSelectedPartner] = useState(null);

//   useEffect(() => {
//     fetchPartners();
//   }, []);

//   const fetchPartners = async () => {
//     try {
//       const response = await axios.get('http://localhost:3003/api/partners');
//       setPartners(response.data);
//     } catch (error) {
//       console.error('Error fetching partners:', error);
//     }
//   };

//   const handleAcceptReject = async (partner) => {
//     const newStatus = !partner.isAccepted;
//     try {
//       await axios.patch(`http://localhost:3003/api/partners/${partner._id}`, { isAccepted: newStatus });
//       fetchPartners();
//     } catch (error) {
//       console.error('Error updating partner status:', error);
//     }
//   };

//   const handleAddDetails = (partner) => {
//     setSelectedPartner(partner);
//     setIsModalOpen(true);
//   };

//   const handleSaveDetails = async (details) => {
//     try {
//       await axios.patch(`http://localhost:3003/api/partners/${selectedPartner._id}`, details);
//       setIsModalOpen(false);
//       fetchPartners();
//     } catch (error) {
//       console.error('Error adding partner details:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Partner Requests Dashboard</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">Company Name</th>
//               <th className="px-4 py-2">Full Name</th>
//               <th className="px-4 py-2">Email</th>
//               <th className="px-4 py-2">Phone</th>
//               <th className="px-4 py-2">Status</th>
//               <th className="px-4 py-2">Business Details</th>
//               <th className="px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {partners.map((partner) => (
//               <tr key={partner._id}>
//                 <td className="border px-4 py-2">{partner.companyName}</td>
//                 <td className="border px-4 py-2">{partner.fullName}</td>
//                 <td className="border px-4 py-2">{partner.businessEmail}</td>
//                 <td className="border px-4 py-2">{partner.phoneNumber}</td>
//                 <td className="border px-4 py-2">{partner.isAccepted ? 'Accepted' : 'Rejected'}</td>
//                 <td className="border px-4 py-2">{getBusinessTypeDetails(partner)}</td>
//                 <td className="border px-4 py-2">
//                   <button
//                     onClick={() => handleAcceptReject(partner)}
//                     className={`${
//                       partner.isAccepted ? 'bg-red-500' : 'bg-green-500'
//                     } text-white px-2 py-1 rounded mr-2`}
//                   >
//                     {partner.isAccepted ? 'Reject' : 'Accept'}
//                   </button>
//                   <button
//                     onClick={() => handleAddDetails(partner)}
//                     className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
//                   >
//                     {partner.businessType ? 'Edit Details' : 'Add Details'}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <PartnerDetailsModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         partner={selectedPartner}
//         onSave={handleSaveDetails}
//       />
//     </div>
//   );
// }


// function getBusinessTypeDetails(partner) {
//   if (!partner.businessType) return 'Details not added';

//   switch (partner.businessType) {
//     case 'restaurant':
//       return `Restaurant - Cuisine: ${partner.restaurant?.cuisineType?.join(', ') || 'N/A'}, Meal Price: $${partner.restaurant?.mealPrice || 'N/A'}`;
//     case 'cafe':
//       return `Cafe - Drink Price: $${partner.cafe?.drinkPrice || 'N/A'}, Dessert Price: $${partner.cafe?.dessertPrice || 'N/A'}, 
//               Hot Drinks: ${partner.cafe?.hotDrinks?.join(', ') || 'N/A'}, 
//               Cold Drinks: ${partner.cafe?.coldDrinks?.join(', ') || 'N/A'}, 
//               Desserts: ${partner.cafe?.dessertTypes?.join(', ') || 'N/A'}`;
//     case 'sweetShop':
//       return `Sweet Shop - Dessert Price: $${partner.sweetShop?.dessertPrice || 'N/A'}, 
//               Desserts: ${partner.sweetShop?.dessertTypes?.join(', ') || 'N/A'}`;
//     case 'activityShop':
//       return `Activity Shop - Price: $${partner.activityShop?.activityPrice || 'N/A'}, 
//               Indoor Activities: ${partner.activityShop?.indoorActivities?.join(', ') || 'N/A'}, 
//               Outdoor Activities: ${partner.activityShop?.outdoorActivities?.join(', ') || 'N/A'}`;
//     default:
//       return 'Unknown business type';
//   }
// }




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PartnerDetailsModal from '../PartnerDetailsModal/PartnerDetailsModal';
import { CalendarDays, Clock, DollarSign, Users } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('partners');
  const [partners, setPartners] = useState([]);
  const [outingPlans, setOutingPlans] = useState([]);
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [userCurrentPage, setUserCurrentPage] = useState(1);
  const [limit] = useState(10); // Number of users per page

  useEffect(() => {
    fetchPartners();
    fetchOutingPlans();
    fetchUsers(userCurrentPage);
  }, [userCurrentPage]);


  const fetchPartners = async () => {
    try {
      const response = await axios.get('http://localhost:3003/api/partners');
      setPartners(response.data);
    } catch (error) {
      console.error('Error fetching partners:', error);
    }
  };

  const fetchOutingPlans = async () => {
    try {
      const response = await axios.get('http://localhost:3003/api/outing/all');
      setOutingPlans(response.data);
    } catch (error) {
      console.error('Error fetching outing plans:', error);
    }
  };
  const fetchUsers = async (page) => {
    try {
      const response = await axios.get(`http://localhost:3003/api/auth/users?page=${page}&limit=${limit}`);
      setUsers(response.data.users);
      setTotalPages(response.data.pagination.totalPages);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const toggleUserStatus = async (userId, currentStatus) => {
    try {
      await axios.patch(`http://localhost:3003/api/auth/users/${userId}/status`, {
        isActive: !currentStatus
      });
      fetchUsers(userCurrentPage);
    } catch (error) {
      console.error('Error toggling user status:', error);
    }
  };

  const handleAcceptReject = async (partner) => {
    const newStatus = !partner.isAccepted;
    try {
      await axios.patch(`http://localhost:3003/api/partners/${partner._id}`, { isAccepted: newStatus });
      fetchPartners();
    } catch (error) {
      console.error('Error updating partner status:', error);
    }
  };

  const handleAddDetails = (partner) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
  };

  const handleSaveDetails = async (details) => {
    try {
      await axios.patch(`http://localhost:3003/api/partners/${selectedPartner._id}`, details);
      setIsModalOpen(false);
      fetchPartners();
    } catch (error) {
      console.error('Error adding partner details:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      {/* Tab Navigation - Added Users tab */}
      <div className="flex border-b mb-4">
        <button
          className={`mr-4 pb-2 ${activeTab === 'partners' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
          onClick={() => setActiveTab('partners')}
        >
          Partner Requests
        </button>
        <button
          className={`mr-4 pb-2 ${activeTab === 'outingPlans' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
          onClick={() => setActiveTab('outingPlans')}
        >
          Outing Plans
        </button>
        <button
          className={`mr-4 pb-2 ${activeTab === 'users' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
      </div>


      {/* Partners Tab Content */}
      {activeTab === 'partners' && (
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mb-4">Partner Requests</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2">Company Name</th>
                <th className="px-4 py-2">Full Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Business Details</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((partner) => (
                <tr key={partner._id}>
                  <td className="border px-4 py-2">{partner.companyName}</td>
                  <td className="border px-4 py-2">{partner.fullName}</td>
                  <td className="border px-4 py-2">{partner.businessEmail}</td>
                  <td className="border px-4 py-2">{partner.phoneNumber}</td>
                  <td className="border px-4 py-2">{partner.isAccepted ? 'Accepted' : 'Rejected'}</td>
                  <td className="border px-4 py-2">{getBusinessTypeDetails(partner)}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleAcceptReject(partner)}
                      className={`${partner.isAccepted ? 'bg-red-500' : 'bg-green-500'} text-white px-2 py-1 rounded mr-2`}
                    >
                      {partner.isAccepted ? 'Reject' : 'Accept'}
                    </button>
                    <button
                      onClick={() => handleAddDetails(partner)}
                      className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
                    >
                      {partner.businessType ? 'Edit Details' : 'Add Details'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <PartnerDetailsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            partner={selectedPartner}
            onSave={handleSaveDetails}
          />
        </div>
      )}

      {/* Outing Plans Tab Content */}
      {/* Outing Plans Tab Content */}
{/* Outing Plans Tab Content */}
{/* Outing Plans Tab Content */}
{activeTab === 'outingPlans' && (
  <div className="p-6">
    <h2 className="text-xl font-bold mb-6">Outing Plans</h2>
    
    {(() => {
      // Pagination logic
      const plansPerPage = 5;
      const indexOfLastPlan = currentPage * plansPerPage;
      const indexOfFirstPlan = indexOfLastPlan - plansPerPage;
      const currentPlans = outingPlans.slice(indexOfFirstPlan, indexOfLastPlan);
      const totalPages = Math.ceil(outingPlans.length / plansPerPage);

      return (
        <>
          <div className="grid gap-6">
            {currentPlans.map((plan) => (
              <div key={plan._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  {/* Header Section */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{plan.name || "Unnamed Plan"}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-sm ${
                          plan.isWithinBudget 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {plan.isWithinBudget ? 'Within Budget' : 'Over Budget'}
                        </span>
                        <span className="px-2 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                          {plan.status}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-gray-600">
                        <span>{new Date(plan.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Content Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Time & Location</h4>
                        <div className="text-gray-600 space-y-1">
                          <p>City: {plan.city}</p>
                          <p>Start: {plan.startTime}</p>
                          <p>End: {plan.endTime}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Budget Details</h4>
                        <div className="text-gray-600 space-y-1">
                          <p>Budget: ${plan.budget}</p>
                          <p>Total Cost: ${plan.totalCost}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Plan Details</h4>
                        <div className="text-gray-600 space-y-2">
                          {plan.activity && (
                            <div className="flex justify-between">
                              <span>Activity:</span>
                              <span>{plan.activity.type} - {plan.activity.name} (${plan.activity.price})</span>
                            </div>
                          )}
                          {plan.food && (
                            <div className="flex justify-between">
                              <span>Food:</span>
                              <span>{plan.food.cuisineType} (${plan.food.price})</span>
                            </div>
                          )}
                          {plan.drink && (
                            <div className="flex justify-between">
                              <span>Drink:</span>
                              <span>{plan.drink.type} - {plan.drink.name} (${plan.drink.price})</span>
                            </div>
                          )}
                          {plan.dessert && (
                            <div className="flex justify-between">
                              <span>Dessert:</span>
                              <span>{plan.dessert.name} (${plan.dessert.price})</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Partners</h4>
                        <p className="text-gray-600">
                          {plan.partners.map(partner => partner.fullName).join(', ')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-4 text-sm text-gray-500">
                    Created: {new Date(plan.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination Controls */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">
                  Showing {indexOfFirstPlan + 1} to {Math.min(indexOfLastPlan, outingPlans.length)} of {outingPlans.length} plans
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Previous
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-3 py-1 rounded ${
                        currentPage === index + 1
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      );
    })()}
  </div>
)}
      {/* New Users Tab Content */}
      {activeTab === 'users' && (
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mb-4">Users</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2">Full Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Gender</th>
                <th className="px-4 py-2">Date of Birth</th>
                <th className="px-4 py-2">Joined Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="border px-4 py-2">{user.fullName}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.gender}</td>
                  <td className="border px-4 py-2">{new Date(user.dateOfBirth).toLocaleDateString()}</td>
                  <td className="border px-4 py-2">{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="border px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => toggleUserStatus(user._id, user.isActive)}
                      className={`${
                        user.isActive ? 'bg-red-500' : 'bg-green-500'
                      } text-white px-3 py-1 rounded hover:opacity-80`}
                    >
                      {user.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-700">
              Page {userCurrentPage} of {totalPages}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setUserCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={userCurrentPage === 1}
                className={`px-3 py-1 rounded ${
                  userCurrentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setUserCurrentPage(index + 1)}
                  className={`px-3 py-1 rounded ${
                    userCurrentPage === index + 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => setUserCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={userCurrentPage === totalPages}
                className={`px-3 py-1 rounded ${
                  userCurrentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




function getBusinessTypeDetails(partner) {
  if (!partner.businessType) return 'Details not added';

  switch (partner.businessType) {
    case 'restaurant':
      return `Restaurant - Cuisine: ${partner.restaurant?.cuisineType?.join(', ') || 'N/A'}, Meal Price: $${partner.restaurant?.mealPrice || 'N/A'}`;
    case 'cafe':
      return `Cafe - Drink Price: $${partner.cafe?.drinkPrice || 'N/A'}, Dessert Price: $${partner.cafe?.dessertPrice || 'N/A'}, 
              Hot Drinks: ${partner.cafe?.hotDrinks?.join(', ') || 'N/A'}, 
              Cold Drinks: ${partner.cafe?.coldDrinks?.join(', ') || 'N/A'}, 
              Desserts: ${partner.cafe?.dessertTypes?.join(', ') || 'N/A'}`;
    case 'sweetShop':
      return `Sweet Shop - Dessert Price: $${partner.sweetShop?.dessertPrice || 'N/A'}, 
              Desserts: ${partner.sweetShop?.dessertTypes?.join(', ') || 'N/A'}`;
    case 'activityShop':
      return `Activity Shop - Price: $${partner.activityShop?.activityPrice || 'N/A'}, 
              Indoor Activities: ${partner.activityShop?.indoorActivities?.join(', ') || 'N/A'}, 
              Outdoor Activities: ${partner.activityShop?.outdoorActivities?.join(', ') || 'N/A'}`;
    default:
      return 'Unknown business type';
  }
}