import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import axios from 'axios';

const UpcomingOutingsTab = () => {
  const [outings, setOutings] = useState([]);
  
  useEffect(() => {
    fetchUpcomingOutings();
  }, []);

  const fetchUpcomingOutings = async () => {
    try {
      const response = await axios.get('http://localhost:3003/api/outing/upcoming-outings', {
        withCredentials: true
      });
      setOutings(response.data);
    } catch (error) {
      console.error('Error fetching upcoming outings:', error);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Upcoming Outings</h2>
      {outings.map(outing => (
        <div key={outing._id} className="bg-white p-6 rounded-lg shadow-md mb-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">{outing.city}</h3>
              <p className="text-gray-600">
                {new Date(outing.date).toLocaleDateString()}
              </p>
              <p className="text-teal-600 font-medium">
                Budget: ${outing.budget} | Total Cost: ${outing.totalCost}
              </p>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Activities:</h4>
            {outing.activity && (
              <p>{outing.activity.type}: {outing.activity.name}</p>
            )}
          </div>

          <div className="mt-4">
            <h4 className="font-semibold mb-2">Partners:</h4>
            {outing.partners.map(partner => (
              <div key={partner._id} className="bg-gray-50 p-3 rounded mb-2">
                <p className="font-medium">{partner.companyName}</p>
                <p className="text-sm text-gray-600">{partner.businessType}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingOutingsTab;