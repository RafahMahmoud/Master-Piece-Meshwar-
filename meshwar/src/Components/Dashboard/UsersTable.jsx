import React from 'react';

function UsersTable({ users, currentPage, totalPages, setCurrentPage, toggleUserStatus }) {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-teal-500">Users</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-teal-500 text-white">
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
            <tr key={user._id} className="border-b">
              <td className="px-4 py-2">{user.fullName}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.gender}</td>
              <td className="px-4 py-2">{new Date(user.dateOfBirth).toLocaleDateString()}</td>
              <td className="px-4 py-2">{new Date(user.createdAt).toLocaleDateString()}</td>
              <td className="px-4 py-2">
                <span className={`px-2 py-1 rounded-full text-sm ${user.isActive ? 'bg-teal-100 text-teal-800' : 'bg-red-100 text-red-800'}`}>
                  {user.isActive ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => toggleUserStatus(user._id, user.isActive)}
                  className={`px-3 py-1 rounded ${user.isActive ? 'bg-red-500' : 'bg-green-500'} text-white hover:opacity-80`}
                >
                  {user.isActive ? 'Deactivate' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 ${currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} rounded`}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 ${currentPage === index + 1 ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} rounded`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 ${currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} rounded`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default UsersTable;
