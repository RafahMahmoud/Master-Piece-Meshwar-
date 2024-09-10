import React from 'react';
import { User, MapPin, Clock } from 'lucide-react';
import out from '../../assets/route2-removebg-preview.png';
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
const NewOuting = () => {
  const navigate = useNavigate();
  const outDetails = () => {
    navigate("/OutDetails");
  };

  return (
    <div className="min-h-screen bg-[#F9E1FF20] ">
      <NavBar/>

      
      <div className="max-w-4xl mx-auto bg-white rounded-lg   shadow-md overflow-hidden  my-20">
      

        {/* Main Content */}
        <div className="flex flex-col md:flex-row  ">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-6">Let's Start An Unforgettable Experience</h2>
            <form className="space-y-4">
              <div className="flex items-center">
                <User className="mr-2 text-gray-400" />
                <input type="text" placeholder="People" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
                <button className="ml-2 bg-gray-200 p-2 rounded-full">+</button>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 text-gray-400" />
                <input type="text" placeholder="Where to go?" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-gray-400" />
                <span>Time</span>
                <input type="text" placeholder="From" className="w-1/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
                <input type="text" placeholder="To" className="w-1/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 text-gray-400" />
                <input type="text" placeholder="Should have (Optional)" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <button className="w-full bg-teal-500 text-white p-3 rounded-md hover:bg-teal-400 transition-colors" onClick={outDetails} >
                Count Down
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
            <div className="w-full h-64 md:h-full relative">
              <img
                src={out}
                alt="Winding road"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default NewOuting;