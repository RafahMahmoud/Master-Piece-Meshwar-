import React from 'react';
import { Utensils, Map, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Next Adventure
            <span className="text-purple-600"> Starts Here</span>
          </h1>
          <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover personalized experiences tailored just for you. Whether you're looking for outdoor adventures, 
            indoor activities, or culinary delights, we've got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Quick Survey */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Utensils className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Survey</h3>
            <p className="text-gray-600">Take a brief quiz to help us understand your preferences for the perfect outing.</p>
          </div>

          {/* Personalized Packages */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Map className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Packages</h3>
            <p className="text-gray-600">Get personalized recommendations for activities and dining experiences.</p>
          </div>


          {/* Community */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">Join our community to share experiences and discover new recommendations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;