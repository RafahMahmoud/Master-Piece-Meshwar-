import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PartnerDetailsModal from '../PartnerDetailsModal/PartnerDetailsModal';
import CompanyDetailsModal from './CompanyDetailsModal';
import DashboardOverview from './OverView';
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
  const [logoImage, setLogoImage] = useState(null);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [selectedPartnerForEdit, setSelectedPartnerForEdit] = useState(null);
  const [partnerCurrentPage, setPartnerCurrentPage] = useState(1);
  const [partnerTotalPages, setPartnerTotalPages] = useState(1);

  useEffect(() => {

    fetchOutingPlans();
    fetchUsers(userCurrentPage);
  }, [userCurrentPage]);
  useEffect(() => {
    fetchPartners();
  }, [partnerCurrentPage]);

  const fetchPartners = async () => {
    try {
      const response = await axios.get(`http://localhost:3003/api/partners?page=${partnerCurrentPage}`);
      setPartners(response.data.partners);
      setPartnerTotalPages(response.data.pagination.totalPages);
    } catch (error) {
      console.error('Error fetching partners:', error);
    }
  };

  const handleEditCompanyDetails = (partner) => {
    console.log('Opening modal with partner:', partner);
    setSelectedPartnerForEdit(partner);
    setIsCompanyModalOpen(true);
  };

  const handleSaveCompanyDetails = async (details) => {
    try {
      console.log('Selected Partner ID:', selectedPartnerForEdit._id);
      console.log('Details being sent:', details);
      
      const response = await axios.patch(
        `http://localhost:3003/api/partners/${selectedPartnerForEdit._id}/company-details`, 
        details
      );
      
      console.log('Response:', response.data);
      setIsCompanyModalOpen(false);
      fetchPartners();
    } catch (error) {
      console.error('Error updating company details:', error.response || error);
      // Add a user-friendly error message
      alert('Failed to update company details. Please try again.');
    }
  };

  const handleDeletePartner = async (partner) => {
    if (window.confirm('Are you sure you want to delete this partner?')) {
      try {
        await axios.patch(`http://localhost:3003/api/partners/${partner._id}/soft-delete`);
        fetchPartners(); // Refresh the partners list
      } catch (error) {
        console.error('Error deleting partner:', error);
        alert('Failed to delete partner. Please try again.');
      }
    }
  };

  const handleImageUpload = async (event, partnerId) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('logoPic', file);
    formData.append('partnerId', partnerId); // Add the partner ID
  
    try {
      const response = await axios.post('http://localhost:3003/api/partners/partner-logo', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setLogoImage(response.data.logoPic);
      alert("Profile picture updated successfully!");
    } catch (error) {
      console.error('Error uploading profile picture:', error);
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
    <div className="container mx-auto p-2 md:p-4 bg-gradient-to-br from-white to-[#F9E1FF]/10">
      <h1 className="text-xl md:text-2xl font-bold mb-4 text-teal-500">Dashboard</h1>
     
      {/* Responsive Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b mb-4">
        <button
          className={`pb-2 px-3 transition-colors ${
            activeTab === 'overview' 
              ? 'border-b-2 border-teal-500 text-teal-500 font-bold' 
              : 'text-gray-600 hover:text-teal-500'
          }`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`pb-2 px-3 transition-colors ${
            activeTab === 'partners' 
              ? 'border-b-2 border-teal-500 text-teal-500 font-bold' 
              : 'text-gray-600 hover:text-teal-500'
          }`}
          onClick={() => setActiveTab('partners')}
        >
          Partner Requests
        </button>
        <button
          className={`pb-2 px-3 transition-colors ${
            activeTab === 'outingPlans' 
              ? 'border-b-2 border-teal-500 text-teal-500 font-bold' 
              : 'text-gray-600 hover:text-teal-500'
          }`}
          onClick={() => setActiveTab('outingPlans')}
        >
          Outing Plans
        </button>
        <button
          className={`pb-2 px-3 transition-colors ${
            activeTab === 'users' 
              ? 'border-b-2 border-teal-500 text-teal-500 font-bold' 
              : 'text-gray-600 hover:text-teal-500'
          }`}
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
      </div>

      {activeTab === 'overview' && (
        <DashboardOverview users={users} outingPlans={outingPlans} />
      )}

      {/* Partners Tab Content */}
      {activeTab === 'partners' && (
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mb-4 text-teal-500">Partner Requests</h2>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#F9E1FF]">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Logo</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Company Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Full Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Email</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Phone</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">City</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Details</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Business Details</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {partners.map((partner) => (
                    <tr key={partner._id} className="hover:bg-gray-50">
                      <td className="px-4 py-2">
                        <div className="flex flex-col items-center">
                          <img
                            className="h-12 w-12 rounded-full object-cover mb-2"
                            src={`http://localhost:3003/${partner.logoPic}`}
                            alt={partner.companyName}
                          />
                          <label className="text-xs font-medium text-teal-500 cursor-pointer">
                            Change Logo
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageUpload(e, partner._id)}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </td>
                      <td className="px-4 py-2">{partner.companyName}</td>
                      <td className="px-4 py-2">{partner.fullName}</td>
                      <td className="px-4 py-2">{partner.businessEmail}</td>
                      <td className="px-4 py-2">{partner.phoneNumber}</td>
                      <td className="px-4 py-2">{partner.city}</td>
                      <td className="px-4 py-2">{partner.details}</td>
                      <td className="px-4 py-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          partner.isAccepted 
                            ? 'bg-teal-100 text-teal-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {partner.isAccepted ? 'Accepted' : 'Rejected'}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-sm">{getBusinessTypeDetails(partner)}</td>
                      <td className="px-4 py-2">
                        <div className="flex flex-col sm:flex-row gap-2">
                          <button
                            onClick={() => handleAcceptReject(partner)}
                            className={`${
                              partner.isAccepted 
                                ? 'bg-red-500 hover:bg-red-600' 
                                : 'bg-teal-500 hover:bg-teal-600'
                            } text-white px-2 py-1 rounded text-sm`}
                          >
                            {partner.isAccepted ? 'Reject' : 'Accept'}
                          </button>
                          <button
                            onClick={() => handleAddDetails(partner)}
                            className="bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded text-sm"
                          >
                            {partner.businessType ? 'Edit Details' : 'Add Details'}
                          </button>
                          <button
                            onClick={() => handleEditCompanyDetails(partner)}
                            className="bg-[#F9E1FF] hover:bg-[#F9E1FF]/80 text-gray-700 px-2 py-1 rounded text-sm"
                          >
                            Edit Company
                          </button>
                          <button
                            onClick={() => handleDeletePartner(partner)}
                            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {activeTab === 'partners' && (
    <div className="mt-4 flex justify-center space-x-2">
      <button
        onClick={() => setPartnerCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={partnerCurrentPage === 1}
        className={`px-3 py-1 rounded ${
          partnerCurrentPage === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Previous
      </button>
      
      {[...Array(partnerTotalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => setPartnerCurrentPage(index + 1)}
          className={`px-3 py-1 rounded ${
            partnerCurrentPage === index + 1
              ? 'bg-[#F9E1FF] '
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {index + 1}
        </button>
      ))}
      
      <button
        onClick={() => setPartnerCurrentPage(prev => Math.min(prev + 1, partnerTotalPages))}
        disabled={partnerCurrentPage === partnerTotalPages}
        className={`px-3 py-1 rounded ${
          partnerCurrentPage === partnerTotalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Next
      </button>
    </div>
  )}

  {/* Add the CompanyDetailsModal */}
  <CompanyDetailsModal
    isOpen={isCompanyModalOpen}
    onClose={() => setIsCompanyModalOpen(false)}
    partner={selectedPartnerForEdit}
    onSave={handleSaveCompanyDetails}
  />
          <PartnerDetailsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            partner={selectedPartner}
            onSave={handleSaveDetails}
          />
        </div>
      )}
  {/* Outing Plans Tab Content */}
{activeTab === 'outingPlans' && (
  <div className="p-4 md:p-6 bg-[#F9E1FF] bg-opacity-10 rounded-lg">
    <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-teal-500">Outing Plans</h2>
    
    {(() => {
      const plansPerPage = 5;
      const indexOfLastPlan = currentPage * plansPerPage;
      const indexOfFirstPlan = indexOfLastPlan - plansPerPage;
      const currentPlans = outingPlans.slice(indexOfFirstPlan, indexOfLastPlan);
      const totalPages = Math.ceil(outingPlans.length / plansPerPage);

      return (
        <>
          <div className="grid gap-4 md:gap-6">
            {currentPlans.map((plan) => (
              <div key={plan._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-4 md:p-6">

                  {/* Main Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Left Column */}
                    <div className="space-y-4">
                      <div className="bg-[#F9E1FF] bg-opacity-10 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-teal-500">Time & Location</h4>
                        <div className="text-gray-600 space-y-1">
                          <p>City: {plan.city}</p>
                          <p>Date: {new Date(plan.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="bg-[#F9E1FF] bg-opacity-10 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-teal-500">Budget Details</h4>
                        <div className="text-gray-600 space-y-1">
                          <p>Budget: ${plan.budget}</p>
                          <p>Total Cost: ${plan.totalCost}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                 
                      <div className="bg-[#F9E1FF] bg-opacity-10 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-teal-500">Partners</h4>
                        <p className="text-gray-600">
                          {plan.partners.map(partner => partner.companyName).join(', ')}
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
            <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
              <div className="text-sm text-gray-700">
                Showing {indexOfFirstPlan + 1} to {Math.min(indexOfLastPlan, outingPlans.length)} of {outingPlans.length} plans
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded transition-colors ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-teal-500 text-white hover:bg-teal-600'
                  }`}
                >
                  Previous
                </button>
                <div className="flex items-center gap-1 flex-wrap justify-center">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-3 py-1 rounded transition-colors ${
                        currentPage === index + 1
                          ? 'bg-[#F9E1FF] text-teal-800'
                          : 'bg-gray-200 text-gray-700 hover:bg-teal-100'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded transition-colors ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-teal-500 text-white hover:bg-teal-600'
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
    {/* Users Tab Content */}
{activeTab === 'users' && (
  <div className="w-full overflow-hidden bg-[#F9E1FF] bg-opacity-10 rounded-lg shadow-lg p-4">
    <h2 className="text-2xl font-bold mb-6 text-teal-500">Users Management</h2>
    
    {/* Responsive table wrapper */}
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full divide-y divide-teal-200">
        <thead className="bg-teal-500">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Full Name</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider hidden md:table-cell">Email</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider hidden sm:table-cell">Gender</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider hidden lg:table-cell">Date of Birth</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider hidden xl:table-cell">Joined Date</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-teal-100">
          {users.map((user) => (
            <tr key={user._id} className="hover:bg-[#F9E1FF] hover:bg-opacity-20 transition-colors">
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{user.fullName}</div>
                {/* Show email on mobile only */}
                <div className="text-sm text-gray-500 md:hidden">{user.email}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap hidden md:table-cell">
                <div className="text-sm text-gray-900">{user.email}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap hidden sm:table-cell">
                <div className="text-sm text-gray-900">{user.gender}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap hidden lg:table-cell">
                <div className="text-sm text-gray-900">{new Date(user.dateOfBirth).toLocaleDateString()}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap hidden xl:table-cell">
                <div className="text-sm text-gray-900">{new Date(user.createdAt).toLocaleDateString()}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  user.isActive 
                    ? 'bg-teal-100 text-teal-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {user.isActive ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <button
                  onClick={() => toggleUserStatus(user._id, user.isActive)}
                  className={`${
                    user.isActive 
                      ? 'bg-red-500 hover:bg-red-600' 
                      : 'bg-teal-500 hover:bg-teal-600'
                  } text-white text-sm px-3 py-1 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    user.isActive ? 'focus:ring-red-500' : 'focus:ring-teal-500'
                  }`}
                >
                  {user.isActive ? 'Deactivate' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Responsive Pagination */}
    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-sm text-gray-700 w-full sm:w-auto text-center sm:text-left">
        Page {userCurrentPage} of {totalPages}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setUserCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={userCurrentPage === 1}
          className={`px-3 py-1 rounded-full text-sm ${
            userCurrentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-teal-500 text-white hover:bg-teal-600'
          }`}
        >
          Previous
        </button>
        
        <div className="flex gap-2 flex-wrap justify-center">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setUserCurrentPage(index + 1)}
              className={`px-3 py-1 rounded-full text-sm ${
                userCurrentPage === index + 1
                  ? 'bg-[#F9E1FF] text-teal-800 font-medium'
                  : 'bg-teal-100 text-teal-600 hover:bg-teal-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => setUserCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={userCurrentPage === totalPages}
          className={`px-3 py-1 rounded-full text-sm ${
            userCurrentPage === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-teal-500 text-white hover:bg-teal-600'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  </div>
)}
  </div>
)}


function getBusinessTypeDetails(partner) {
  if (!partner.businessType) return 'Details not added';

  switch (partner.businessType) {
    case 'restaurant':
      return `Restaurant - Cuisine: ${partner.restaurant?.cuisineType?.join(', ') || 'N/A'}, Meal Price: $${partner.restaurant?.mealPrice || 'N/A'}`;
    case 'cafe':
      return `Cafe - Drink Price: $${partner.cafe?.drinkPrice || 'N/A'}, Dessert Price: $${partner.cafe?.dessertPrice || 'N/A'}, ` +
             `Hot Drinks: ${partner.cafe?.hotDrinks?.join(', ') || 'N/A'}, ` +
             `Cold Drinks: ${partner.cafe?.coldDrinks?.join(', ') || 'N/A'}, ` +
             `Desserts: ${partner.cafe?.dessertTypes?.join(', ') || 'N/A'}`;
    case 'sweetShop':
      return `Sweet Shop - Dessert Price: $${partner.sweetShop?.dessertPrice || 'N/A'}, ` +
             `Desserts: ${partner.sweetShop?.dessertTypes?.join(', ') || 'N/A'}`;
    case 'activityShop':
      return `Activity Shop - Price: $${partner.activityShop?.activityPrice || 'N/A'}, ` +
             `Indoor Activities: ${partner.activityShop?.indoorActivities?.join(', ') || 'N/A'}, ` +
             `Outdoor Activities: ${partner.activityShop?.outdoorActivities?.join(', ') || 'N/A'}`;
    default:
      return 'Unknown business type';
  }
}



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PartnerDetailsModal from '../PartnerDetailsModal/PartnerDetailsModal';
// import CompanyDetailsModal from './CompanyDetailsModal';
// import DashboardOverview from './OverView';
// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState('partners');
//   const [partners, setPartners] = useState([]);
//   const [outingPlans, setOutingPlans] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPartner, setSelectedPartner] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [userCurrentPage, setUserCurrentPage] = useState(1);
//   const [limit] = useState(10); // Number of users per page
//   const [logoImage, setLogoImage] = useState(null);
//   const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
//   const [selectedPartnerForEdit, setSelectedPartnerForEdit] = useState(null);
//   const [partnerCurrentPage, setPartnerCurrentPage] = useState(1);
//   const [partnerTotalPages, setPartnerTotalPages] = useState(1);

//   useEffect(() => {

//     fetchOutingPlans();
//     fetchUsers(userCurrentPage);
//   }, [userCurrentPage]);
//   useEffect(() => {
//     fetchPartners();
//   }, [partnerCurrentPage]);

//   const fetchPartners = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3003/api/partners?page=${partnerCurrentPage}`);
//       setPartners(response.data.partners);
//       setPartnerTotalPages(response.data.pagination.totalPages);
//     } catch (error) {
//       console.error('Error fetching partners:', error);
//     }
//   };

//   const handleEditCompanyDetails = (partner) => {
//     console.log('Opening modal with partner:', partner);
//     setSelectedPartnerForEdit(partner);
//     setIsCompanyModalOpen(true);
//   };

//   const handleSaveCompanyDetails = async (details) => {
//     try {
//       console.log('Selected Partner ID:', selectedPartnerForEdit._id);
//       console.log('Details being sent:', details);
      
//       const response = await axios.patch(
//         `http://localhost:3003/api/partners/${selectedPartnerForEdit._id}/company-details`, 
//         details
//       );
      
//       console.log('Response:', response.data);
//       setIsCompanyModalOpen(false);
//       fetchPartners();
//     } catch (error) {
//       console.error('Error updating company details:', error.response || error);
//       // Add a user-friendly error message
//       alert('Failed to update company details. Please try again.');
//     }
//   };

//   const handleDeletePartner = async (partner) => {
//     if (window.confirm('Are you sure you want to delete this partner?')) {
//       try {
//         await axios.patch(`http://localhost:3003/api/partners/${partner._id}/soft-delete`);
//         fetchPartners(); // Refresh the partners list
//       } catch (error) {
//         console.error('Error deleting partner:', error);
//         alert('Failed to delete partner. Please try again.');
//       }
//     }
//   };

//   const handleImageUpload = async (event, partnerId) => {
//     const file = event.target.files[0];
//     const formData = new FormData();
//     formData.append('logoPic', file);
//     formData.append('partnerId', partnerId); // Add the partner ID
  
//     try {
//       const response = await axios.post('http://localhost:3003/api/partners/partner-logo', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       setLogoImage(response.data.logoPic);
//       alert("Profile picture updated successfully!");
//     } catch (error) {
//       console.error('Error uploading profile picture:', error);
//     }
//   };

//   const fetchOutingPlans = async () => {
//     try {
//       const response = await axios.get('http://localhost:3003/api/outing/all');
//       setOutingPlans(response.data);
//     } catch (error) {
//       console.error('Error fetching outing plans:', error);
//     }
//   };
//   const fetchUsers = async (page) => {
//     try {
//       const response = await axios.get(`http://localhost:3003/api/auth/users?page=${page}&limit=${limit}`);
//       setUsers(response.data.users);
//       setTotalPages(response.data.pagination.totalPages);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const toggleUserStatus = async (userId, currentStatus) => {
//     try {
//       await axios.patch(`http://localhost:3003/api/auth/users/${userId}/status`, {
//         isActive: !currentStatus
//       });
//       fetchUsers(userCurrentPage);
//     } catch (error) {
//       console.error('Error toggling user status:', error);
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
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
//       {/* Tab Navigation - Added Users tab */}
//       <div className="flex border-b mb-4">
//       <button
//   className={`mr-4 pb-2 ${activeTab === 'overview' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
//   onClick={() => setActiveTab('overview')}
// >
//   Overview
// </button>
//         <button
//           className={`mr-4 pb-2 ${activeTab === 'partners' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
//           onClick={() => setActiveTab('partners')}
//         >
//           Partner Requests
//         </button>
//         <button
//           className={`mr-4 pb-2 ${activeTab === 'outingPlans' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
//           onClick={() => setActiveTab('outingPlans')}
//         >
//           Outing Plans
//         </button>
//         <button
//           className={`mr-4 pb-2 ${activeTab === 'users' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
//           onClick={() => setActiveTab('users')}
//         >
//           Users
//         </button>
//       </div>

//       {activeTab === 'overview' && (
//   <DashboardOverview users={users} outingPlans={outingPlans} />
// )}
//       {/* Partners Tab Content */}
//       {activeTab === 'partners' && (
//         <div className="overflow-x-auto">
//           <h2 className="text-xl font-bold mb-4">Partner Requests</h2>
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//               <th className="px-4 py-2">Logo</th>
//                 <th className="px-4 py-2">Company Name</th>
//                 <th className="px-4 py-2">Full Name</th>
//                 <th className="px-4 py-2">Email</th>
//                 <th className="px-4 py-2">Phone</th>
//                 <th className="px-4 py-2">City</th>
//                 <th className="px-4 py-2">Details</th>
//                 <th className="px-4 py-2">Status</th>
//                 <th className="px-4 py-2">Business Details</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {partners.map((partner) => (
//                 <tr key={partner._id}>
//                                     <td className="border px-4 py-2"> <img
                    
//                     src={`http://localhost:3003/${partner.logoPic}`} 
//                     alt={partner.logoPic}
//                   />
//                   <label className="text-sm font-medium text-gray-700 cursor-pointer mb-[1rem]">
//                 Change Logo Picture
//                 <input
//   type="file"
//   accept="image/*"
//   onChange={(e) => handleImageUpload(e, partner._id)} // Pass the partner ID
//   className="hidden"
// />
//               </label></td>
//                   <td className="border px-4 py-2">{partner.companyName}</td>
//                   <td className="border px-4 py-2">{partner.fullName}</td>
//                   <td className="border px-4 py-2">{partner.businessEmail}</td>
//                   <td className="border px-4 py-2">{partner.phoneNumber}</td>
//                   <td className="border px-4 py-2">{partner.city}</td>
//                   <td className="border px-4 py-2">{partner.details}</td>
//                   <td className="border px-4 py-2">{partner.isAccepted ? 'Accepted' : 'Rejected'}</td>
//                   <td className="border px-4 py-2">{getBusinessTypeDetails(partner)}</td>
//                   <td className="border px-4 py-2">
//       <button
//         onClick={() => handleAcceptReject(partner)}
//         className={`${partner.isAccepted ? 'bg-red-500' : 'bg-green-500'} text-white px-2 py-1 rounded mr-2`}
//       >
//         {partner.isAccepted ? 'Reject' : 'Accept'}
//       </button>
//       <button
//         onClick={() => handleAddDetails(partner)}
//         className="bg-blue-500 text-white px-2 py-1 rounded mx-1"
//       >
//         {partner.businessType ? 'Edit Details' : 'Add Details'}
//       </button>
//       <button
//         onClick={() => handleEditCompanyDetails(partner)}
//         className="bg-yellow-500 text-white px-2 py-1 rounded mx-1"
//       >
//         Edit Company
//       </button>
//       <button
//         onClick={() => handleDeletePartner(partner)}
//         className="bg-red-600 text-white px-2 py-1 rounded ml-1"
//       >
//         Delete
//       </button>
//     </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//   {/* Add pagination controls for partners */}
//   {activeTab === 'partners' && (
//     <div className="mt-4 flex justify-center space-x-2">
//       <button
//         onClick={() => setPartnerCurrentPage(prev => Math.max(prev - 1, 1))}
//         disabled={partnerCurrentPage === 1}
//         className={`px-3 py-1 rounded ${
//           partnerCurrentPage === 1
//             ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//             : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//         }`}
//       >
//         Previous
//       </button>
      
//       {[...Array(partnerTotalPages)].map((_, index) => (
//         <button
//           key={index + 1}
//           onClick={() => setPartnerCurrentPage(index + 1)}
//           className={`px-3 py-1 rounded ${
//             partnerCurrentPage === index + 1
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//           }`}
//         >
//           {index + 1}
//         </button>
//       ))}
      
//       <button
//         onClick={() => setPartnerCurrentPage(prev => Math.min(prev + 1, partnerTotalPages))}
//         disabled={partnerCurrentPage === partnerTotalPages}
//         className={`px-3 py-1 rounded ${
//           partnerCurrentPage === partnerTotalPages
//             ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//             : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//         }`}
//       >
//         Next
//       </button>
//     </div>
//   )}

//   {/* Add the CompanyDetailsModal */}
//   <CompanyDetailsModal
//     isOpen={isCompanyModalOpen}
//     onClose={() => setIsCompanyModalOpen(false)}
//     partner={selectedPartnerForEdit}
//     onSave={handleSaveCompanyDetails}
//   />
//           <PartnerDetailsModal
//             isOpen={isModalOpen}
//             onClose={() => setIsModalOpen(false)}
//             partner={selectedPartner}
//             onSave={handleSaveDetails}
//           />
//         </div>
//       )}
// {/* Outing Plans Tab Content */}
// {activeTab === 'outingPlans' && (
//   <div className="p-6">
//     <h2 className="text-xl font-bold mb-6">Outing Plans</h2>
    
//     {(() => {
//       // Pagination logic
//       const plansPerPage = 5;
//       const indexOfLastPlan = currentPage * plansPerPage;
//       const indexOfFirstPlan = indexOfLastPlan - plansPerPage;
//       const currentPlans = outingPlans.slice(indexOfFirstPlan, indexOfLastPlan);
//       const totalPages = Math.ceil(outingPlans.length / plansPerPage);

//       return (
//         <>
//           <div className="grid gap-6">
//             {currentPlans.map((plan) => (
//               <div key={plan._id} className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <div className="p-6">
//                   {/* Header Section */}
//                   <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
//                     <div>
//                       <h3 className="text-xl font-semibold mb-2">{plan.name || "Unnamed Plan"}</h3>
//                       <div className="flex items-center gap-2">
//                         <span className={`px-2 py-1 rounded-full text-sm ${
//                           plan.isWithinBudget 
//                             ? 'bg-green-100 text-green-800' 
//                             : 'bg-red-100 text-red-800'
//                         }`}>
//                           {plan.isWithinBudget ? 'Within Budget' : 'Over Budget'}
//                         </span>
//                         <span className="px-2 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
//                           {plan.status}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="mt-2 md:mt-0">
//                       <div className="flex items-center gap-2 text-gray-600">
//                         <span>{new Date(plan.date).toLocaleDateString()}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Main Content Grid */}
//                   <div className="grid md:grid-cols-2 gap-6">
//                     {/* Left Column */}
//                     <div className="space-y-4">
//                       <div>
//                         <h4 className="font-semibold mb-2">Time & Location</h4>
//                         <div className="text-gray-600 space-y-1">
//                           <p>City: {plan.city}</p>
//                           <p>Date: {plan.date}</p>
//                         </div>
//                       </div>

//                       <div>
//                         <h4 className="font-semibold mb-2">Budget Details</h4>
//                         <div className="text-gray-600 space-y-1">
//                           <p>Budget: ${plan.budget}</p>
//                           <p>Total Cost: ${plan.totalCost}</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Right Column */}
//                     <div className="space-y-4">
//                       <div>
//                         <h4 className="font-semibold mb-2">Plan Details</h4>
//                         <div className="text-gray-600 space-y-2">
//                           {plan.activity && (
//                             <div className="flex justify-between">
//                               <span>Activity:</span>
//                               <span>{plan.activity.type} - {plan.activity.name} (${plan.activity.price})</span>
//                             </div>
//                           )}
//                           {plan.food && (
//                             <div className="flex justify-between">
//                               <span>Food:</span>
//                               <span>{plan.food.cuisineType} (${plan.food.price})</span>
//                             </div>
//                           )}
//                           {plan.drink && (
//                             <div className="flex justify-between">
//                               <span>Drink:</span>
//                               <span>{plan.drink.type} - {plan.drink.name} (${plan.drink.price})</span>
//                             </div>
//                           )}
//                           {plan.dessert && (
//                             <div className="flex justify-between">
//                               <span>Dessert:</span>
//                               <span>{plan.dessert.name} (${plan.dessert.price})</span>
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                       <div>
//                         <h4 className="font-semibold mb-2">Partners</h4>
//                         <p className="text-gray-600">
//                           {plan.partners.map(partner => partner.fullName).join(', ')}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Footer */}
//                   <div className="mt-4 text-sm text-gray-500">
//                     Created: {new Date(plan.createdAt).toLocaleDateString()}
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Pagination Controls */}
//             <div className="flex items-center justify-between mt-6">
//               <div className="flex items-center gap-2">
//                 <span className="text-sm text-gray-700">
//                   Showing {indexOfFirstPlan + 1} to {Math.min(indexOfLastPlan, outingPlans.length)} of {outingPlans.length} plans
//                 </span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                   disabled={currentPage === 1}
//                   className={`px-3 py-1 rounded ${
//                     currentPage === 1
//                       ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                       : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                   }`}
//                 >
//                   Previous
//                 </button>

//                 {/* Page Numbers */}
//                 <div className="flex items-center gap-1">
//                   {[...Array(totalPages)].map((_, index) => (
//                     <button
//                       key={index + 1}
//                       onClick={() => setCurrentPage(index + 1)}
//                       className={`px-3 py-1 rounded ${
//                         currentPage === index + 1
//                           ? 'bg-blue-500 text-white'
//                           : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                       }`}
//                     >
//                       {index + 1}
//                     </button>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                   disabled={currentPage === totalPages}
//                   className={`px-3 py-1 rounded ${
//                     currentPage === totalPages
//                       ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                       : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                   }`}
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>
//         </>
//       );
//     })()}
//   </div>
// )}
//       {/* New Users Tab Content */}
//       {activeTab === 'users' && (
//         <div className="overflow-x-auto">
//           <h2 className="text-xl font-bold mb-4">Users</h2>
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2">Full Name</th>
//                 <th className="px-4 py-2">Email</th>
//                 <th className="px-4 py-2">Gender</th>
//                 <th className="px-4 py-2">Date of Birth</th>
//                 <th className="px-4 py-2">Joined Date</th>
//                 <th className="px-4 py-2">Status</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user._id}>
//                   <td className="border px-4 py-2">{user.fullName}</td>
//                   <td className="border px-4 py-2">{user.email}</td>
//                   <td className="border px-4 py-2">{user.gender}</td>
//                   <td className="border px-4 py-2">{new Date(user.dateOfBirth).toLocaleDateString()}</td>
//                   <td className="border px-4 py-2">{new Date(user.createdAt).toLocaleDateString()}</td>
//                   <td className="border px-4 py-2">
//                     <span className={`px-2 py-1 rounded-full text-sm ${
//                       user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                     }`}>
//                       {user.isActive ? 'Active' : 'Inactive'}
//                     </span>
//                   </td>
//                   <td className="border px-4 py-2">
//                     <button
//                       onClick={() => toggleUserStatus(user._id, user.isActive)}
//                       className={`${
//                         user.isActive ? 'bg-red-500' : 'bg-green-500'
//                       } text-white px-3 py-1 rounded hover:opacity-80`}
//                     >
//                       {user.isActive ? 'Deactivate' : 'Activate'}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination Controls */}
//           <div className="flex items-center justify-between mt-4">
//             <div className="text-sm text-gray-700">
//               Page {userCurrentPage} of {totalPages}
//             </div>
//             <div className="flex gap-2">
//               <button
//                 onClick={() => setUserCurrentPage(prev => Math.max(prev - 1, 1))}
//                 disabled={userCurrentPage === 1}
//                 className={`px-3 py-1 rounded ${
//                   userCurrentPage === 1
//                     ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 Previous
//               </button>
//               {[...Array(totalPages)].map((_, index) => (
//                 <button
//                   key={index + 1}
//                   onClick={() => setUserCurrentPage(index + 1)}
//                   className={`px-3 py-1 rounded ${
//                     userCurrentPage === index + 1
//                       ? 'bg-blue-500 text-white'
//                       : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                   }`}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//               <button
//                 onClick={() => setUserCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                 disabled={userCurrentPage === totalPages}
//                 className={`px-3 py-1 rounded ${
//                   userCurrentPage === totalPages
//                     ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
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