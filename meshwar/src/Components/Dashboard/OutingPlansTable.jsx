import React from 'react';

function OutingPlansTable({ outingPlans, currentPage, totalPages, setCurrentPage }) {
  const plansPerPage = 5;
  const indexOfLastPlan = currentPage * plansPerPage;
  const indexOfFirstPlan = indexOfLastPlan - plansPerPage;
  const currentPlans = outingPlans.slice(indexOfFirstPlan, indexOfLastPlan);

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4 text-teal-500">Outing Plans</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-teal-500 text-white">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Budget</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPlans.length > 0 ? (
            currentPlans.map((plan) => (
              <tr key={plan._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{plan.name}</td>
                <td className="px-4 py-2">{plan.city}</td>
                <td className="px-4 py-2">{new Date(plan.startDate).toLocaleDateString()}</td>
                <td className="px-4 py-2">${plan.budget.toFixed(2)}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      plan.isApproved ? 'bg-teal-100 text-teal-800' : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {plan.isApproved ? 'Approved' : 'Pending'}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {/* Actions buttons (optional) */}
                  <button
                    className="px-2 py-1 bg-teal-500 text-white rounded hover:bg-teal-600 mr-2"
                    onClick={() => console.log(`Approving plan ${plan._id}`)}
                  >
                    Approve
                  </button>
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => console.log(`Rejecting plan ${plan._id}`)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-4 py-2 text-center text-gray-500">
                No plans available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default OutingPlansTable;
