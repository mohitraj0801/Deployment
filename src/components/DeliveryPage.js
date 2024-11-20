import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import { ShoppingCart, User, Search, Bell, Leaf } from 'lucide-react'; // Importing icons

const DeliveryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold flex items-center">
            <Leaf className="h-6 w-6 text-green-500 mr-2" /> {/* Leaf icon before Meal */}
            <span>Meal</span>
            <span className="text-green-500">Connect</span> {/* Removed the margin to have no space between Meal and Connect */}
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/Delivery-Page" className="hover:text-gray-600">Delivery</Link>
          <Link to="/about" className="hover:text-gray-600">About</Link>
          <Link to="/contact" className="hover:text-gray-600">Contact</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            <span className="ml-2 text-gray-700">Your Cart (0)</span>
          </div>
          <User className="h-5 w-5 text-gray-600" />
          <Search className="h-5 w-5 text-gray-600" />
          <Bell className="h-5 w-5 text-gray-600" />
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6 bg-[#e8f5e9] min-h-[calc(100vh-80px)] flex">
        <div className="max-w-6xl w-full mx-auto flex">
          {/* Left Side - Image Section */}
          <div className="w-1/2">
            <img 
              src="/images/11th.jpg" 
              alt="Delivery van"
              className="w-full h-auto rounded-lg shadow-lg" // Style the image as needed
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-1/2 flex flex-col pl-8">
            <div className="bg-[#98c49c] text-black rounded-lg px-8 py-4 inline-block mb-6">
              <h2 className="text-2xl font-medium">Delivery & Pick Up Service</h2>
            </div>

            <p className="text-gray-800 text-lg mb-6">
              Restaurants send information about the surplus food to the Food Bank, 
              and the Food Bank will send their delivery partner to collect the food.
            </p>

            <div className="bg-[#98c49c] text-black rounded-lg px-8 py-4">
              <h3 className="text-xl font-medium">More content about the pickup service</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
