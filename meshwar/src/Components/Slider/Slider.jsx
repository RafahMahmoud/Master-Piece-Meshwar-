// import "./Slider.css";

// const SliderPar = ({ width, height, quantity, images, reverse }) => {
//   return (
//     <div
//       className="slider"
//       style={{
//         "--width": `${width}px`,
//         "--height": `${height}px`,
//         "--quantity": quantity,
//       }}
//       data-reverse={reverse}
//     >
//       <div className="list">
//         {images.map((src, index) => (
//           <div className="item" key={index} style={{ "--position": index + 1 }}>
//             <img src={src} alt={`slider_image_${index + 1}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SliderPar;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Slider.css";

const PartnerSlider = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/partners');
        // Filter accepted and non-deleted partners
        const activePartners = response.data.partners.filter(
          partner => partner.isAccepted && !partner.isDeleted && partner.logoPic
        );
        setPartners(activePartners);
        setLoading(false);
      } catch (err) {
        setError('Failed to load partners');
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-32">Loading partners...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (partners.length === 0) {
    return <div className="text-center">No partners to display</div>;
  }

  return (
    <div 
      className="slider" 
      style={{ 
        "--width": "150px", 
        "--height": "150px", 
        "--quantity": partners.length || 1,
      }}
    > 
      <div className="list"> 
        {partners.map((partner, index) => ( 
          <div 
            className="item" 
            key={partner._id} 
            style={{ "--position": index + 1 }}
          > 
            <img 
src={`http://localhost:3003/${partner.logoPic}`}
              alt={`${partner.companyName} logo`}
              title={partner.companyName} 
            /> 
          </div> 
        ))} 
      </div> 
    </div> 
  );
}; 

export default PartnerSlider;