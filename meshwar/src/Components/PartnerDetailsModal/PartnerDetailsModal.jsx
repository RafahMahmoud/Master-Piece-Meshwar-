// import React, { useState, useEffect } from 'react';

// const PartnerDetailsModal = ({ isOpen, onClose, partner, onSave }) => {
//   const [details, setDetails] = useState({
//     businessType: '',
//     mealPrice: '',
//     cuisineType: [],
//     drinkPrice: '',
//     dessertPrice: '',
//     drinkTypes: '',
//     dessertTypes: '',
//     activityType: '',
//     activityPrice: '',
//   });

//   useEffect(() => {
//     if (partner) {
//       setDetails({
//         businessType: partner.businessType || '',
//         mealPrice: partner.restaurant?.mealPrice || '',
//         cuisineType: partner.restaurant?.cuisineType || [],
//         drinkPrice: partner.cafe?.drinkPrice || '',
//         dessertPrice: partner.cafe?.dessertPrice || partner.sweetShop?.dessertPrice || '',
//         drinkTypes: partner.cafe?.drinkTypes?.join(', ') || '',
//         dessertTypes: partner.cafe?.dessertTypes?.join(', ') || '',
//         activityType: partner.activityShop?.activityType || '',
//         activityPrice: partner.activityShop?.activityPrice || '',
//       });
//     }
//   }, [partner]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDetails(prev => ({ ...prev, [name]: value }));
//   };

//   const handleCuisineChange = (e) => {
//     const options = e.target.options;
//     const selectedCuisines = [];
//     for (let i = 0; i < options.length; i++) {
//       if (options[i].selected) {
//         selectedCuisines.push(options[i].value);
//       }
//     }
//     setDetails(prev => ({ ...prev, cuisineType: selectedCuisines }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formattedDetails = {
//       businessType: details.businessType,
//       ...(details.businessType === 'restaurant' && {
//         restaurant: {
//           mealPrice: parseFloat(details.mealPrice),
//           cuisineType: details.cuisineType,
//         }
//       }),
//       ...(details.businessType === 'cafe' && {
//         cafe: {
//           drinkPrice: parseFloat(details.drinkPrice),
//           dessertPrice: parseFloat(details.dessertPrice),
//           drinkTypes: details.drinkTypes.split(',').map(item => item.trim()),
//           dessertTypes: details.dessertTypes.split(',').map(item => item.trim()),
//         }
//       }),
//       ...(details.businessType === 'sweetShop' && {
//         sweetShop: {
//           dessertPrice: parseFloat(details.dessertPrice),
//         }
//       }),
//       ...(details.businessType === 'activityShop' && {
//         activityShop: {
//           activityType: details.activityType,
//           activityPrice: parseFloat(details.activityPrice),
//         }
//       }),
//     };
//     onSave(formattedDetails);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
//       <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//         <div className="mt-3 text-center">
//           <h3 className="text-lg leading-6 font-medium text-gray-900">Add Partner Details</h3>
//           <form onSubmit={handleSubmit} className="mt-2 text-left">
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessType">
//                 Business Type
//               </label>
//               <select
//                 id="businessType"
//                 name="businessType"
//                 value={details.businessType}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               >
//                 <option value="">Select business type</option>
//                 <option value="restaurant">Restaurant</option>
//                 <option value="cafe">Cafe</option>
//                 <option value="sweetShop">Sweet Shop</option>
//                 <option value="activityShop">Activity Shop</option>
//               </select>
//             </div>

//             {details.businessType === 'restaurant' && (
//               <>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mealPrice">
//                     Meal Price
//                   </label>
//                   <input
//                     type="number"
//                     id="mealPrice"
//                     name="mealPrice"
//                     value={details.mealPrice}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cuisineType">
//                     Cuisine Type (hold Ctrl to select multiple)
//                   </label>
//                   <select
//                     multiple
//                     id="cuisineType"
//                     name="cuisineType"
//                     value={details.cuisineType}
//                     onChange={handleCuisineChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   >

//                     <option value="Italian">Italian</option>
//                     <option value="Arabic">Arabic</option>
//                     <option value="Mexican">Mexican</option>
//                     <option value="Asian">Asian</option>
//                     <option value="Turkish">Turkish</option>

//                   </select>
//                 </div>
//               </>
//             )}

//             {details.businessType === 'cafe' && (
//               <>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="drinkPrice">
//                     Drink Price
//                   </label>
//                   <input
//                     type="number"
//                     id="drinkPrice"
//                     name="drinkPrice"
//                     value={details.drinkPrice}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dessertPrice">
//                     Dessert Price
//                   </label>
//                   <input
//                     type="number"
//                     id="dessertPrice"
//                     name="dessertPrice"
//                     value={details.dessertPrice}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="drinkTypes">
//                     Drink Types (comma-separated)
//                   </label>
//                   <input
//                     type="text"
//                     id="drinkTypes"
//                     name="drinkTypes"
//                     value={details.drinkTypes}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dessertTypes">
//                     Dessert Types (comma-separated)
//                   </label>
//                   <input
//                     type="text"
//                     id="dessertTypes"
//                     name="dessertTypes"
//                     value={details.dessertTypes}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//               </>
//             )}

//             {details.businessType === 'sweetShop' && (
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dessertPrice">
//                   Dessert Price
//                 </label>
//                 <input
//                   type="number"
//                   id="dessertPrice"
//                   name="dessertPrice"
//                   value={details.dessertPrice}
//                   onChange={handleChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//             )}

//             {details.businessType === 'activityShop' && (
//               <>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="activityType">
//                     Activity Type
//                   </label>
//                   <input
//                     type="text"
//                     id="activityType"
//                     name="activityType"
//                     value={details.activityType}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="activityPrice">
//                     Activity Price
//                   </label>
//                   <input
//                     type="number"
//                     id="activityPrice"
//                     name="activityPrice"
//                     value={details.activityPrice}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//               </>
//             )}

//             <div className="flex justify-end">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PartnerDetailsModal;












// import React, { useState, useEffect } from 'react';

// const PartnerDetailsModal = ({ isOpen, onClose, partner, onSave }) => {
//   const [details, setDetails] = useState({
//     businessType: '',
//     mealPrice: '',
//     cuisineType: [],
//     drinkPrice: '',
//     dessertPrice: '',
//     drinkTypes: '',
//     dessertTypes: '',
//     activityType: '',
//     activityPrice: '',
//   });

//   useEffect(() => {
//     if (partner) {
//       setDetails({
//         businessType: partner.businessType || '',
//         mealPrice: partner.restaurant?.mealPrice || '',
//         cuisineType: partner.restaurant?.cuisineType || [],
//         drinkPrice: partner.cafe?.drinkPrice || '',
//         dessertPrice: partner.cafe?.dessertPrice || partner.sweetShop?.dessertPrice || '',
//         drinkTypes: partner.cafe?.drinkTypes?.join(', ') || '',
//         dessertTypes: partner.cafe?.dessertTypes?.join(', ') || '',
//         activityType: partner.activityShop?.activityType || '',
//         activityPrice: partner.activityShop?.activityPrice || '',
//       });
//     }
//   }, [partner]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDetails(prev => ({ ...prev, [name]: value }));
//   };

//   const handleCuisineChange = (e) => {
//     const options = e.target.options;
//     const selectedCuisines = [];
//     for (let i = 0; i < options.length; i++) {
//       if (options[i].selected) {
//         selectedCuisines.push(options[i].value);
//       }
//     }
//     setDetails(prev => ({ ...prev, cuisineType: selectedCuisines }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formattedDetails = {
//       businessType: details.businessType,
//       ...(details.businessType === 'restaurant' && {
//         restaurant: {
//           mealPrice: parseFloat(details.mealPrice),
//           cuisineType: details.cuisineType,
//         }
//       }),
//       ...(details.businessType === 'cafe' && {
//         cafe: {
//           drinkPrice: parseFloat(details.drinkPrice),
//           dessertPrice: parseFloat(details.dessertPrice),
//           drinkTypes: details.drinkTypes.split(',').map(item => item.trim()),
//           dessertTypes: details.dessertTypes.split(',').map(item => item.trim()),
//         }
//       }),
//       ...(details.businessType === 'sweetShop' && {
//         sweetShop: {
//           dessertPrice: parseFloat(details.dessertPrice),
//         }
//       }),
//       ...(details.businessType === 'activityShop' && {
//         activityShop: {
//           activityType: details.activityType,
//           activityPrice: parseFloat(details.activityPrice),
//         }
//       }),
//     };
//     onSave(formattedDetails);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center" id="my-modal">
//       <div className="relative p-5 border w-96 shadow-lg rounded-md bg-white">
//         <div className="mt-3">
//           <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Add Partner Details</h3>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessType">
//                 Business Type
//               </label>
//               <select
//                 id="businessType"
//                 name="businessType"
//                 value={details.businessType}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               >
//                 <option value="">Select business type</option>
//                 <option value="restaurant">Restaurant</option>
//                 <option value="cafe">Cafe</option>
//                 <option value="sweetShop">Sweet Shop</option>
//                 <option value="activityShop">Activity Shop</option>
//               </select>
//             </div>

//             {details.businessType === 'restaurant' && (
//               <>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mealPrice">
//                     Meal Price
//                   </label>
//                   <input
//                     type="number"
//                     id="mealPrice"
//                     name="mealPrice"
//                     value={details.mealPrice}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cuisineType">
//                     Cuisine Type (hold Ctrl to select multiple)
//                   </label>
//                   <select
//                     multiple
//                     id="cuisineType"
//                     name="cuisineType"
//                     value={details.cuisineType}
//                     onChange={handleCuisineChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   >
//                     <option value="Italian">Italian</option>
//                     <option value="Chinese">Chinese</option>
//                     <option value="Mexican">Mexican</option>
//                     <option value="Japanese">Japanese</option>
//                     <option value="Indian">Indian</option>
//                     <option value="American">American</option>
//                     <option value="French">French</option>
//                     <option value="Thai">Thai</option>
//                     <option value="Mediterranean">Mediterranean</option>
//                     <option value="Greek">Greek</option>
//                   </select>
//                 </div>
//               </>
//             )}

//             {details.businessType === 'cafe' && (
//               <>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="drinkPrice">
//                     Drink Price
//                   </label>
//                   <input
//                     type="number"
//                     id="drinkPrice"
//                     name="drinkPrice"
//                     value={details.drinkPrice}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dessertPrice">
//                     Dessert Price
//                   </label>
//                   <input
//                     type="number"
//                     id="dessertPrice"
//                     name="dessertPrice"
//                     value={details.dessertPrice}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="drinkTypes">
//                     Drink Types (comma-separated)
//                   </label>
//                   <input
//                     type="text"
//                     id="drinkTypes"
//                     name="drinkTypes"
//                     value={details.drinkTypes}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dessertTypes">
//                     Dessert Types (comma-separated)
//                   </label>
//                   <input
//                     type="text"
//                     id="dessertTypes"
//                     name="dessertTypes"
//                     value={details.dessertTypes}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//               </>
//             )}

//             {details.businessType === 'sweetShop' && (
//               <div>
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dessertPrice">
//                   Dessert Price
//                 </label>
//                 <input
//                   type="number"
//                   id="dessertPrice"
//                   name="dessertPrice"
//                   value={details.dessertPrice}
//                   onChange={handleChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 />
//               </div>
//             )}

//             {details.businessType === 'activityShop' && (
//               <>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="activityType">
//                     Activity Type
//                   </label>
//                   <input
//                     type="text"
//                     id="activityType"
//                     name="activityType"
//                     value={details.activityType}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="activityPrice">
//                     Activity Price
//                   </label>
//                   <input
//                     type="number"
//                     id="activityPrice"
//                     name="activityPrice"
//                     value={details.activityPrice}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                 </div>
//               </>
//             )}

//             <div className="flex justify-end space-x-2">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
//               >
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PartnerDetailsModal;




















import React, { useState, useEffect } from 'react';

const outdoorActivities = ["Stargazing", "Camping", "Rock Climbing", "Cycling", "Football"];
const indoorActivities = ["Cinema", "Museums", "cooking workshops", "Games", "Art Exhibitions"];
const hotDrinks = ["Tea", "Coffee", "Cappuccino", "Latte"];
const coldDrinks = ["Iced Tea", "Iced Coffee", "Mojito", "Smoothie"];
const dessertTypes = ["donut", "knafeh", "wafel", "crepe", "ice-cream", "kulage"];

const PartnerDetailsModal = ({ isOpen, onClose, partner, onSave }) => {
  const [details, setDetails] = useState({
    businessType: '',
    mealPrice: '',
    cuisineType: [],
    drinkPrice: '',
    dessertPrice: '',
    hotDrinks: [],
    coldDrinks: [],
    dessertTypes: [],
    indoorActivities: [],
    outdoorActivities: [],
    activityPrice: '',
  });

  useEffect(() => {
    if (partner) {
      setDetails({
        businessType: partner.businessType || '',
        mealPrice: partner.restaurant?.mealPrice || '',
        cuisineType: partner.restaurant?.cuisineType || [],
        drinkPrice: partner.cafe?.drinkPrice || '',
        dessertPrice: partner.cafe?.dessertPrice || partner.sweetShop?.dessertPrice || '',
        hotDrinks: partner.cafe?.hotDrinks || [],
        coldDrinks: partner.cafe?.coldDrinks || [],
        dessertTypes: partner.cafe?.dessertTypes || partner.sweetShop?.dessertTypes || [],
        indoorActivities: partner.activityShop?.indoorActivities || [],
        outdoorActivities: partner.activityShop?.outdoorActivities || [],
        activityPrice: partner.activityShop?.activityPrice || '',
      });
    }
  }, [partner]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (e, field) => {
    const options = e.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setDetails(prev => ({ ...prev, [field]: selectedValues }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDetails = {
      businessType: details.businessType,
      ...(details.businessType === 'restaurant' && {
        restaurant: {
          mealPrice: parseFloat(details.mealPrice),
          cuisineType: details.cuisineType,
        }
      }),
      ...(details.businessType === 'cafe' && {
        cafe: {
          drinkPrice: parseFloat(details.drinkPrice),
          dessertPrice: parseFloat(details.dessertPrice),
          hotDrinks: details.hotDrinks,
          coldDrinks: details.coldDrinks,
          dessertTypes: details.dessertTypes,
        }
      }),
      ...(details.businessType === 'sweetShop' && {
        sweetShop: {
          dessertPrice: parseFloat(details.dessertPrice),
          dessertTypes: details.dessertTypes,
        }
      }),
      ...(details.businessType === 'activityShop' && {
        activityShop: {
          indoorActivities: details.indoorActivities,
          outdoorActivities: details.outdoorActivities,
          activityPrice: parseFloat(details.activityPrice),
        }
      }),
    };
    onSave(formattedDetails);
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center" id="my-modal">
      <div className="relative p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">Add Partner Details</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessType">
                Business Type
              </label>
              <select
                id="businessType"
                name="businessType"
                value={details.businessType}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select business type</option>
                <option value="restaurant">Restaurant</option>
                <option value="cafe">Cafe</option>
                <option value="sweetShop">Sweet Shop</option>
                <option value="activityShop">Activity Shop</option>
              </select>
            </div>

            {details.businessType === 'restaurant' && (
              <>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mealPrice">
                    Meal Price
                  </label>
                  <input
                    type="number"
                    id="mealPrice"
                    name="mealPrice"
                    value={details.mealPrice}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cuisineType">
                    Cuisine Type (hold Ctrl to select multiple)
                  </label>
                  <select
                    multiple
                    id="cuisineType"
                    name="cuisineType"
                    value={details.cuisineType}
                    onChange={(e) => handleMultiSelect(e, 'cuisineType')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="Italian">Italian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Indian">Indian</option>
                    <option value="American">American</option>
                    <option value="French">French</option>
                    <option value="Thai">Thai</option>
                    <option value="Mediterranean">Mediterranean</option>
                    <option value="Greek">Greek</option>
                  </select>
                </div>
              </>
            )}

            {details.businessType === 'cafe' && (
              <>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="drinkPrice">
                    Drink Price
                  </label>
                  <input
                    type="number"
                    id="drinkPrice"
                    name="drinkPrice"
                    value={details.drinkPrice}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dessertPrice">
                    Dessert Price
                  </label>
                  <input
                    type="number"
                    id="dessertPrice"
                    name="dessertPrice"
                    value={details.dessertPrice}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hotDrinks">
                    Hot Drinks (hold Ctrl to select multiple)
                  </label>
                  <select
                    multiple
                    id="hotDrinks"
                    name="hotDrinks"
                    value={details.hotDrinks}
                    onChange={(e) => handleMultiSelect(e, 'hotDrinks')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {hotDrinks.map((drink) => (
                      <option key={drink} value={drink}>{drink}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coldDrinks">
                    Cold Drinks (hold Ctrl to select multiple)
                  </label>
                  <select
                    multiple
                    id="coldDrinks"
                    name="coldDrinks"
                    value={details.coldDrinks}
                    onChange={(e) => handleMultiSelect(e, 'coldDrinks')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {coldDrinks.map((drink) => (
                      <option key={drink} value={drink}>{drink}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dessertTypes">
                    Dessert Types (hold Ctrl to select multiple)
                  </label>
                  <select
                    multiple
                    id="dessertTypes"
                    name="dessertTypes"
                    value={details.dessertTypes}
                    onChange={(e) => handleMultiSelect(e, 'dessertTypes')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {dessertTypes.map((dessert) => (
                      <option key={dessert} value={dessert}>{dessert}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {details.businessType === 'sweetShop' && (
              <>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dessertPrice">
                    Dessert Price
                  </label>
                  <input
                    type="number"
                    id="dessertPrice"
                    name="dessertPrice"
                    value={details.dessertPrice}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dessertTypes">
                    Dessert Types (hold Ctrl to select multiple)
                  </label>
                  <select
                    multiple
                    id="dessertTypes"
                    name="dessertTypes"
                    value={details.dessertTypes}
                    onChange={(e) => handleMultiSelect(e, 'dessertTypes')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {dessertTypes.map((dessert) => (
                      <option key={dessert} value={dessert}>{dessert}</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {details.businessType === 'activityShop' && (
              <>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="indoorActivities">
                    Indoor Activities (hold Ctrl to select multiple)
                  </label>
                  <select
                    multiple
                    id="indoorActivities"
                    name="indoorActivities"
                    value={details.indoorActivities}
                    onChange={(e) => handleMultiSelect(e, 'indoorActivities')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {indoorActivities.map((activity) => (
                      <option key={activity} value={activity}>{activity}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="outdoorActivities">
                    Outdoor Activities (hold Ctrl to select multiple)
                  </label>
                  <select
                    multiple
                    id="outdoorActivities"
                    name="outdoorActivities"
                    value={details.outdoorActivities}
                    onChange={(e) => handleMultiSelect(e, 'outdoorActivities')}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    {outdoorActivities.map((activity) => (
                      <option key={activity} value={activity}>{activity}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="activityPrice">
                    Activity Price
                  </label>
                  <input
                    type="number"
                    id="activityPrice"
                    name="activityPrice"
                    value={details.activityPrice}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </>
            )}

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetailsModal;