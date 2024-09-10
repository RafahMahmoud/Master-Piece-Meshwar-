import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Calendar, Building, User, Star, MapPin, Clock } from 'lucide-react';
import logo from '../../assets/meshwar-logo.png';
const MeshwarAdminDashboard = () => {
  const [activePage, setActivePage] = useState('overview');

  const dummyData = [
    { name: 'Jan', users: 400, trips: 240 },
    { name: 'Feb', users: 300, trips: 139 },
    { name: 'Mar', users: 200, trips: 980 },
    { name: 'Apr', users: 278, trips: 390 },
    { name: 'May', users: 189, trips: 480 },
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <OverviewPage data={dummyData} />;
      case 'users':
        return <UsersPage />;
      case 'trips':
        return <TripsPage />;
      case 'partners':
        return <PartnersPage />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white w-full drop-shadow-lg">
    
        <nav>
        
          <ul className="flex space-x-4 pl-[7rem] pt-[1rem] ">
            <li><img className="logo-img h-[2.5rem] w-[7.5rem]" src={logo} alt="Meshwar" /></li>
            {['Overview', 'Users', 'Trips', 'Partners'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActivePage(item.toLowerCase())}
                  className={`px-4 py-2 rounded ${
                    activePage === item.toLowerCase() ? 'bg-[#2cf2f2] text-white' : 'text-gray-800 hover:bg-gray-200'
                  }`}
                  >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
  
      <main className="flex-grow p-8">
        {renderPage()}
      </main>
    </div>
  );
};

const OverviewPage = ({ data }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard title="Total Users" value="1,234" icon={<Users />} />
      <StatCard title="Active Trips" value="56" icon={<Calendar />} />
      <StatCard title="New Users (This Month)" value="78" icon={<User />} />
      <StatCard title="Partners" value="25" icon={<Building />} />
    </div>
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">User and Trip Growth</h2>
      <div className="h-80 bg-white p-4 rounded-lg shadow">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#FF204E" />
            <Bar dataKey="trips" fill="#2cf2f2" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);


const UsersPage = () => {
    const users = [
      { id: 1, name: 'Rafah Shraim', tripsCount: 5, lastTripDate: '2024-07-15', avgRating: 4.5 },
      { id: 2, name: 'Noura Khaled', tripsCount: 3, lastTripDate: '2024-07-10', avgRating: 4.2 },
              { id: 3, name: 'Ahmed Al-Sayed', tripsCount: 7, lastTripDate: '2024-06-22', avgRating: 4.8 },
        { id: 4, name: 'Fatima Zahra', tripsCount: 2, lastTripDate: '2024-07-01', avgRating: 4.6 },
        { id: 5, name: 'Mohammed Ali', tripsCount: 6, lastTripDate: '2024-05-30', avgRating: 4.7 },
        { id: 6, name: 'Aisha Bint Omar', tripsCount: 4, lastTripDate: '2024-07-05', avgRating: 4.3 },
        { id: 7, name: 'Omar Al-Hussein', tripsCount: 8, lastTripDate: '2024-06-25', avgRating: 4.9 },
        { id: 8, name: 'Layla Al-Farouq', tripsCount: 1, lastTripDate: '2024-07-12', avgRating: 4.1 },
        { id: 9, name: 'Youssef Ibrahim', tripsCount: 9, lastTripDate: '2024-05-20', avgRating: 4.4 }
    ];
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Trips Count</th>
            <th className="p-3 text-left">Last Trip Date</th>
            <th className="p-3 text-left">Avg Rating</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.tripsCount}</td>
              <td className="p-3">{user.lastTripDate}</td>
              <td className="p-3">{user.avgRating}</td>
              <td className="p-3">
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TripsPage = () => {
  const [sortBy, setSortBy] = useState('rating');
  const trips = [
    { id: 3, name: 'Dead Sea Relaxation', rating: 4.7, date: '2024-06-20', participants: ['Ahmed', 'Fatima'] },
    { id: 4, name: 'Amman City Tour', rating: 4.6, date: '2024-05-25', participants: ['Mohammed', 'Aisha'] },
    { id: 5, name: 'Jerash Ruins Exploration', rating: 4.9, date: '2024-07-10', participants: ['Omar', 'Layla'] },
    { id: 6, name: 'Madaba Mosaics Visit', rating: 4.3, date: '2024-08-05', participants: ['Youssef', 'Noura'] },
    { id: 7, name: 'Rainbow Street Dining', rating: 4.8, date: '2024-06-30', participants: ['Ali', 'Mona'] },
    { id: 8, name: 'King Hussein Park Picnic', rating: 4.4, date: '2024-07-12', participants: ['Hassan', 'Laila'] },
    { id: 9, name: 'Al Quds Restaurant', rating: 4.7, date: '2024-08-10', participants: ['Zaid', 'Sara'] },
    { id: 10, name: 'Sufra Restaurant', rating: 4.6, date: '2024-07-20', participants: ['Tariq', 'Fatima'] },
    { id: 11, name: 'The Royal Automobile Museum', rating: 4.5, date: '2024-06-25', participants: ['Rami', 'Jana'] },
    { id: 12, name: 'Jafra Restaurant', rating: 4.8, date: '2024-08-02', participants: ['Khaled', 'Nadia'] },
    { id: 13, name: 'Mamma Mia Restaurant', rating: 4.7, date: '2024-07-18', participants: ['Salim', 'Rania'] },
    { id: 14, name: 'Zahran Park', rating: 4.9, date: '2024-08-08', participants: ['Fadi', 'Huda'] }
  ];

  const sortedTrips = [...trips].sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Trip Plans</h2>
      <div className="mb-4">
        <label htmlFor="sort" className="mr-2">Sort by:</label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="rating">Rating</option>
          <option value="date">Date</option>
        </select>
      </div>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Trip Name</th>
            <th className="p-3 text-left">Rating</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Participants</th>
          </tr>
        </thead>
        <tbody>
          {sortedTrips.map((trip) => (
            <tr key={trip.id} className="border-b">
              <td className="p-3">{trip.name}</td>
              <td className="p-3">{trip.rating}</td>
              <td className="p-3">{trip.date}</td>
              <td className="p-3">{trip.participants.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PartnersPage = () => {
  const partners = [
    { id: 1, name: 'Fakhreldin Restaurant', suggestedCount: 15, rating: 4.7 },
    { id: 2, name: 'Reem Al Bawadi', suggestedCount: 22, rating: 4.5 },
    { id: 3, name: 'Sufra Restaurant', suggestedCount: 18, rating: 4.8 },
    { id: 4, name: 'Jafra Restaurant', suggestedCount: 10, rating: 4.6 },
    { id: 5, name: 'Al Quds Restaurant', suggestedCount: 20, rating: 4.9 },
    { id: 6, name: 'The Boulevard Arjaan', suggestedCount: 17, rating: 4.7 },
    { id: 7, name: 'Sheraton Amman Al Nabil Hotel', suggestedCount: 14, rating: 4.6 },
    { id: 8, name: 'Movenpick Resort & Spa Dead Sea', suggestedCount: 19, rating: 4.9 },
    { id: 9, name: 'Kempinski Hotel Ishtar Dead Sea', suggestedCount: 21, rating: 4.8 },
    { id: 10, name: 'Four Seasons Hotel Amman', suggestedCount: 16, rating: 4.7 },
    { id: 11, name: 'Grand Hyatt Amman', suggestedCount: 13, rating: 4.5 },
    { id: 12, name: 'InterContinental Jordan', suggestedCount: 20, rating: 4.6 },
    { id: 13, name: 'Dead Sea Marriott Resort & Spa', suggestedCount: 18, rating: 4.8 },
    { id: 14, name: 'Wadi Rum Bubble Luxotel', suggestedCount: 12, rating: 4.9 }
   
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Partner Management</h2>
      <div className="mb-4">
        <button className="bg-[#2cf2f2] text-white px-4 py-2 rounded mr-2">Add Partner</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Remove Partner</button>
      </div>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Partner Name</th>
            <th className="p-3 text-left">Suggested Count</th>
            <th className="p-3 text-left">Rating</th>
          </tr>
        </thead>
        <tbody>
          {partners.map((partner) => (
            <tr key={partner.id} className="border-b">
              <td className="p-3">{partner.name}</td>
              <td className="p-3">{partner.suggestedCount}</td>
              <td className="p-3">{partner.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow flex items-center">
    <div className="mr-4 text-[#FF204E]">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

export default MeshwarAdminDashboard;
