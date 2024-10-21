// import React, { useState } from 'react';
// import axios from 'axios';

// const StepperPopup = ({ isOpen, onClose }) => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     location: '',
//     date: '',
//     startTime: '',
//     endTime: '',
//     budget: '',
//     activityType: '',
//     activity: '',
//     wantFood: false,
//     cuisineType: '',
//     wantDrink: false,
//     drinkType: '',
//     drinkChoice: '',
//     wantDessert: false,
//     dessertChoice: '',
//   });

//   const jordanianCities = ["Amman", "Irbid", "Zarqa", "Aqaba", "Jerash", "Madaba", "Salt", "Karak"];
//   const outdoorActivities = ["Stargazing", "Camping", "Rock Climbing", "Cycling", "Football"];
//   const indoorActivities = ["Cinema", "Museums", "cooking workshops", "Games", "Art Exhibitions"];
//   const hotDrinks = ["Tea", "Coffee", "Cappuccino", "Latte"];
//   const coldDrinks = ["Iced Tea", "Iced Coffee", "Mojito", "Smoothie"];

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       await axios.post('http://localhost:3003/api/requests', formData, { withCredentials: true });
//       onClose();
//     } catch (error) {
//       console.error('Error submitting request:', error);
//     }
//   };

//   const renderStep = () => {
//     switch(step) {
//       case 1:
//         return (
//           <div className="space-y-4">
//             <select name="location" onChange={handleInputChange} className="w-full p-2 border rounded">
//               <option value="">Select a city</option>
//               {jordanianCities.map(city => (
//                 <option key={city} value={city}>{city}</option>
//               ))}
//             </select>
//             <input type="date" name="date" onChange={handleInputChange} className="w-full p-2 border rounded" />
//             <input type="time" name="startTime" onChange={handleInputChange} className="w-full p-2 border rounded" />
//             <input type="time" name="endTime" onChange={handleInputChange} className="w-full p-2 border rounded" />
//             <input type="number" name="budget" onChange={handleInputChange} placeholder="Budget" className="w-full p-2 border rounded" />
//           </div>
//         );
//       case 2:
//         return (
//           <div className="space-y-4">
//             <div>
//               <label className="block mb-2">Activity Type:</label>
//               <div className="space-x-4">
//                 <label>
//                   <input type="radio" name="activityType" value="outdoor" onChange={handleInputChange} />
//                   Outdoor
//                 </label>
//                 <label>
//                   <input type="radio" name="activityType" value="indoor" onChange={handleInputChange} />
//                   Indoor
//                 </label>
//               </div>
//             </div>
//             {formData.activityType && (
//               <select name="activity" onChange={handleInputChange} className="w-full p-2 border rounded">
//                 <option value="">Select an activity</option>
//                 {(formData.activityType === 'outdoor' ? outdoorActivities : indoorActivities).map(activity => (
//                   <option key={activity} value={activity}>{activity}</option>
//                 ))}
//               </select>
//             )}
//             {/* Weather display would go here */}
//           </div>
//         );
//       case 3:
//         return (
//           <div className="space-y-4">
//             <div>
//               <label>
//                 <input type="checkbox" name="wantFood" onChange={handleInputChange} />
//                 Do you want to eat?
//               </label>
//             </div>
//             {formData.wantFood && (
//               <select name="cuisineType" onChange={handleInputChange} className="w-full p-2 border rounded">
//                 <option value="">Select cuisine type</option>
//                 {["Arabic", "Italian", "Asian", "Mexican", "Turkish"].map(cuisine => (
//                   <option key={cuisine} value={cuisine}>{cuisine}</option>
//                 ))}
//               </select>
//             )}
//           </div>
//         );
//       case 4:
//         return (
//           <div className="space-y-4">
//             <div>
//               <label>
//                 <input type="checkbox" name="wantDrink" onChange={handleInputChange} />
//                 Do you want a drink?
//               </label>
//             </div>
//             {formData.wantDrink && (
//               <>
//                 <div className="space-x-4">
//                   <label>
//                     <input type="radio" name="drinkType" value="hot" onChange={handleInputChange} />
//                     Hot
//                   </label>
//                   <label>
//                     <input type="radio" name="drinkType" value="cold" onChange={handleInputChange} />
//                     Cold
//                   </label>
//                 </div>
//                 {formData.drinkType && (
//                   <select name="drinkChoice" onChange={handleInputChange} className="w-full p-2 border rounded">
//                     <option value="">Select a drink</option>
//                     {(formData.drinkType === 'hot' ? hotDrinks : coldDrinks).map(drink => (
//                       <option key={drink} value={drink}>{drink}</option>
//                     ))}
//                   </select>
//                 )}
//               </>
//             )}
//           </div>
//         );
//       case 5:
//         return (
//           <div className="space-y-4">
//             <div>
//               <label>
//                 <input type="checkbox" name="wantDessert" onChange={handleInputChange} />
//                 Do you want dessert?
//               </label>
//             </div>
//             {formData.wantDessert && (
//               <select name="dessertChoice" onChange={handleInputChange} className="w-full p-2 border rounded">
//                 <option value="">Select a dessert</option>
//                 {["donut", "knafeh", "wafel", "crepe", "ice-cream", "kulag"].map(dessert => (
//                   <option key={dessert} value={dessert}>{dessert}</option>
//                 ))}
//               </select>
//             )}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Plan Your Outing</h2>
//         {renderStep()}
//         <div className="mt-6 flex justify-between">
//           {step > 1 && (
//             <button onClick={() => setStep(step - 1)} className="px-4 py-2 bg-gray-300 rounded">
//               Previous
//             </button>
//           )}
//           {step < 5 ? (
//             <button onClick={() => setStep(step + 1)} className="px-4 py-2 bg-blue-500 text-white rounded">
//               Next
//             </button>
//           ) : (
//             <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">
//               Submit
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepperPopup;








import React, { useState } from 'react';
import axios from 'axios';

const StepperPopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    startTime: '',
    endTime: '',
    budget: '',
    activityType: '',
    activity: '',
    wantFood: false,
    cuisineType: '',
    wantDrink: false,
    drinkType: '',
    drinkChoice: '',
    wantDessert: false,
    dessertChoice: '',
  });
  const [budgetCheckResult, setBudgetCheckResult] = useState(null);

  const jordanianCities = ["Amman", "Irbid", "Zarqa", "Aqaba", "Jerash", "Madaba", "Salt", "Karak"];
  const outdoorActivities = ["Stargazing", "Camping", "Rock Climbing", "Cycling", "Football"];
  const indoorActivities = ["Cinema", "Museums", "cooking workshops", "Games", "Art Exhibitions"];
  const hotDrinks = ["Tea", "Coffee", "Cappuccino", "Latte"];
  const coldDrinks = ["Iced Tea", "Iced Coffee", "Mojito", "Smoothie"];
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async () => {
    // try {
      // First, submit the request
      await axios.post('http://localhost:3003/api/requests', formData, { withCredentials: true });
      
    //   // Then, check the partner budget
    //   const response = await axios.post('http://localhost:3003/api/check-partner-budget', {
    //     city: formData.location,
    //     businessTypes: getBusinessTypes(),
    //     hotDrink: formData.drinkType === 'hot' ? formData.drinkChoice : null,
    //     coldDrink: formData.drinkType === 'cold' ? formData.drinkChoice : null,
    //     dessert: formData.wantDessert ? formData.dessertChoice : null,
    //     indoorActivity: formData.activityType === 'indoor' ? formData.activity : null,
    //     outdoorActivity: formData.activityType === 'outdoor' ? formData.activity : null,
    //     meal: formData.wantFood ? formData.cuisineType : null,
    //     budget: parseFloat(formData.budget)
    //   }, { withCredentials: true });

    //   setBudgetCheckResult(response.data);
    //   setStep(6); // Move to a new step to show the result
    // } catch (error) {
    //   console.error('Error submitting request or checking budget:', error);
    //   if (error.response) {
    //     // The request was made and the server responded with a status code
    //     // that falls out of the range of 2xx
    //     console.error('Error data:', error.response.data);
    //     console.error('Error status:', error.response.status);
    //     console.error('Error headers:', error.response.headers);
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     console.error('Error request:', error.request);
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     console.error('Error message:', error.message);
    //   }
    //   setError('An error occurred while processing your request. Please try again.');
    // }
  };

  // const getBusinessTypes = () => {
  //   const types = [];
  //   if (formData.wantFood) types.push('restaurant');
  //   if (formData.wantDrink || formData.wantDessert) types.push('cafe');
  //   if (formData.wantDessert) types.push('sweetShop');
  //   if (formData.activityType) types.push('activityShop');
  //   return types;
  // };

  
  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            <select name="location" onChange={handleInputChange} className="w-full p-2 border rounded">
              <option value="">Select a city</option>
              {jordanianCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <input type="date" name="date" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input type="time" name="startTime" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input type="time" name="endTime" onChange={handleInputChange} className="w-full p-2 border rounded" />
            <input type="number" name="budget" onChange={handleInputChange} placeholder="Budget" className="w-full p-2 border rounded" />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Activity Type:</label>
              <div className="space-x-4">
                <label>
                  <input type="radio" name="activityType" value="outdoor" onChange={handleInputChange} />
                  Outdoor
                </label>
                <label>
                  <input type="radio" name="activityType" value="indoor" onChange={handleInputChange} />
                  Indoor
                </label>
              </div>
            </div>
            {formData.activityType && (
              <select name="activity" onChange={handleInputChange} className="w-full p-2 border rounded">
                <option value="">Select an activity</option>
                {(formData.activityType === 'outdoor' ? outdoorActivities : indoorActivities).map(activity => (
                  <option key={activity} value={activity}>{activity}</option>
                ))}
              </select>
            )}
            {/* Weather display would go here */}
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label>
                <input type="checkbox" name="wantFood" onChange={handleInputChange} />
                Do you want to eat?
              </label>
            </div>
            {formData.wantFood && (
              <select name="cuisineType" onChange={handleInputChange} className="w-full p-2 border rounded">
                <option value="">Select cuisine type</option>
                {["Arabic", "Italian", "Asian", "Mexican", "Turkish"].map(cuisine => (
                  <option key={cuisine} value={cuisine}>{cuisine}</option>
                ))}
              </select>
            )}
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <div>
              <label>
                <input type="checkbox" name="wantDrink" onChange={handleInputChange} />
                Do you want a drink?
              </label>
            </div>
            {formData.wantDrink && (
              <>
                <div className="space-x-4">
                  <label>
                    <input type="radio" name="drinkType" value="hot" onChange={handleInputChange} />
                    Hot
                  </label>
                  <label>
                    <input type="radio" name="drinkType" value="cold" onChange={handleInputChange} />
                    Cold
                  </label>
                </div>
                {formData.drinkType && (
                  <select name="drinkChoice" onChange={handleInputChange} className="w-full p-2 border rounded">
                    <option value="">Select a drink</option>
                    {(formData.drinkType === 'hot' ? hotDrinks : coldDrinks).map(drink => (
                      <option key={drink} value={drink}>{drink}</option>
                    ))}
                  </select>
                )}
              </>
            )}
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <div>
              <label>
                <input type="checkbox" name="wantDessert" onChange={handleInputChange} />
                Do you want dessert?
              </label>
            </div>
            {formData.wantDessert && (
              <select name="dessertChoice" onChange={handleInputChange} className="w-full p-2 border rounded">
                <option value="">Select a dessert</option>
                {["donut", "knafeh", "wafel", "crepe", "ice-cream", "kulag"].map(dessert => (
                  <option key={dessert} value={dessert}>{dessert}</option>
                ))}
              </select>
            )}
          </div>
        );
      // case 6:
      //   return (
      //     <div className="space-y-4">
      //       <h3 className="text-xl font-bold">Your Outing Plan</h3>
      //       {budgetCheckResult && (
      //         <>
      //           {budgetCheckResult.isWithinBudget ? (
      //             <p className="text-green-600">Great! Your plan is within budget.</p>
      //           ) : (
      //             <p className="text-red-600">Sorry, your plan exceeds your budget.</p>
      //           )}
      //           <p>Total Cost: ${budgetCheckResult.totalCost}</p>
      //           <h4 className="font-bold mt-4">Suggested Itinerary:</h4>
      //           <ul className="list-disc pl-5">
      //             {budgetCheckResult.details.map((detail, index) => (
      //               <li key={index}>
      //                 <strong>{detail.businessType}:</strong>
      //                 <ul className="list-disc pl-5">
      //                   {detail.items.map((item, idx) => (
      //                     <li key={idx}>{item.type}: {item.item} (${item.price})</li>
      //                   ))}
      //                 </ul>
      //               </li>
      //             ))}
      //           </ul>
      //         </>
      //       )}
      //     </div>
      //   );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Plan Your Outing</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {renderStep()}
        <div className="mt-6 flex justify-between">
          {step > 1 && step < 6 && (
            <button onClick={() => setStep(step - 1)} className="px-4 py-2 bg-gray-300 rounded">
              Previous
            </button>
          )}
          {step < 5 ? (
            <button onClick={() => setStep(step + 1)} className="px-4 py-2 bg-blue-500 text-white rounded">
              Next
            </button>
          ) : step === 5 ? (
            <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">
              Submit
            </button>
          ) : (
            <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded">
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepperPopup;