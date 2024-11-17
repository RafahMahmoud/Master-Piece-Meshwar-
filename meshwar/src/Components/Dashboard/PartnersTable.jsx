import React from 'react';

function PartnersTable({ partners, handleAddDetails, handleEditCompanyDetails, handleDeletePartner, currentPage, totalPages, setCurrentPage }) {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-teal-500">Partners</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-teal-500 text-white">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Details</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {partners.map((partner) => (
            <tr key={partner._id} className="border-b">
              <td className="px-4 py-2">{partner.name}</td>
              <td className="px-4 py-2">{getBusinessTypeDetails(partner)}</td>
              <td className="px-4 py-2 flex justify-around">
                <button
                  onClick={() => handleAddDetails(partner)}
                  className="bg-teal-500 text-white px-2 py-1 rounded"
                >
                  {partner.businessType ? 'Edit Details' : 'Add Details'}
                </button>
                <button
                  onClick={() => handleEditCompanyDetails(partner)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit Company
                </button>
                <button
                  onClick={() => handleDeletePartner(partner)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
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
export default PartnersTable;

