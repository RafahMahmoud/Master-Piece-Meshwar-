// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import NavBar from '../NavBar/NavBar';
// import {Rating} from '../Rating/Rating';
// import Footer from '../Footer/Footer';

// const OutDetails= () => {
//   const [expandedTime, setExpandedTime] = useState(null);
//   const [expandedDetails, setExpandedDetails] = useState(null);

//   const itineraryData = [
//     {
//       time: '9:00 AM',
//       location: 'Al-Dakhliya Circle',
//       details: 'Meet Sarah at Dakhbiyyeh Circle in Amman at 2:00 pm.'
//     },
//     {
//       time: '11:00 AM',
//       location: ' The Jordan Museum',
//       details: 'At 3:30pm, Arrive at the Jordan Museum and explore the exhibits showcasing Jordan\'s rich history and cultural heritage.'
//     },
//     {
//       time: '2:00 PM',
//       location: 'Wild Jordan Center',
//       details: 'At 4:00pm, Head to the Wild Jordan Center for a coffee break overlooking the city skyline. Enjoy locally sourced coffee or green tea for a stunning view of Amman.'
//     },
//     {
//       time: '4:00 PM',
//       location: 'Jabal Al-Weibdeh',
//       details: 'At 5:00pm, Drive to Jabal Al-Weibdeh and stroll through its artsy streets. Explore local boutiques, art galleries, and souvenir shops.'
//     },
//     {
//       time: '6:00 PM',
//       location: 'Romero Restaurant',
//       details: 'At 6:30pm, Drive to Romero Restaurant, known for its cozy ambiance and delicious Middle Eastern cuisine. Enjoy your dinner of Mansaf, Maqluba, Mixed Grill Platter (Mashawi) and a fresh Orange juice as you watch the sunset. After that eat Um Ali as a dessert.'
//     }
//   ];

//   const toggleExpandTime = (index) => {
//     setExpandedTime(expandedTime === index ? null : index);
//     setExpandedDetails(null);
//   };

//   const toggleExpandDetails = (index) => {
//     setExpandedDetails(expandedDetails === index ? null : index);
//   };

//   return (
//     <div className='w-full h-screen '>
//       <NavBar/>
//     <div className="max-w-4xl mx-auto p-4 ">
//       <div className="flex flex-wrap justify-between mb-4 mt-[3rem]">
//         {itineraryData.map((item, index) => (
//           <div key={index} className="w-1/5 mb-4">
//             <div 
//               className={`p-2 text-center relative cursor-pointer ${
//                 index === expandedTime ? 'bg-teal-500 py-[1rem] text-white' : 'bg-[#F9E1FF70] hover:bg-teal-500 hover:text-white py-[1rem]'
//               }`}
//               onClick={() => toggleExpandTime(index)}
//             >
//               {item.time}
//               {index === expandedTime && (
//                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
//                   {/* <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-teal-500 border-solid"></div> */}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
      
//       {expandedTime !== null && (
//         <div className="mt-8">
//           <div 
//             className="p-4 bg-white border rounded-lg shadow-md flex justify-between items-center cursor-pointer"
//             onClick={() => toggleExpandDetails(expandedTime)}
//           >
//             <h3 className="text-xl font-semibold">{itineraryData[expandedTime].location}</h3>
//             <ChevronDown className={`transform transition-transform ${expandedDetails === expandedTime ? 'rotate-180' : ''}`} />
//           </div>
//           {expandedDetails === expandedTime && (
//             <div className="mt-2 p-4 bg-gray-50 border rounded-lg">
//               <p className='mb-[1rem]'>{itineraryData[expandedTime].details}</p>
//               <iframe
//                     className="w-full h-64 rounded-lg shadow-md"
//                     frameBorder="0"
//                     scrolling="no"
//                     marginHeight="0"
//                     marginWidth="0"
//                     src={`https://maps.google.com/maps?q=${encodeURIComponent(itineraryData[expandedTime].location)}+(culture)&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
//                     title="Event Location"
//                   >
//                     <a href={`https://www.google.com/maps?q=${encodeURIComponent(itineraryData[expandedTime].location)}+(culture)`} className="text-blue-500 hover:underline">View on Google Maps</a>
//                   </iframe>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//     <div 
//             className="p-4 mx-[21rem] bg-white border mb-[8rem] rounded-lg shadow-md flex justify-between items-center ">
//               How mouch is intresting? <Rating/>
//             </div>
//             <Footer/>
//     </div>
//   );
// };

// export default OutDetails;
