import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { ShoppingCart, User, Search, Bell, Leaf } from 'lucide-react'; // Import icons

const Vision = () => {
  return (
    <div className="bg-mint-50 p-8 rounded-lg">
      <div className="flex flex-row gap-8">
        <div className="bg-mint-100 p-8 rounded-lg flex-1">
          <h2 className="text-3xl font-medium underline mb-4">Our Vision</h2>
          <p className="text-xl text-gray-700">
            Content About the vision
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="bg-mint-200 aspect-video rounded-lg">
            <img src="/image-placeholder-1.jpg" alt="Vision Image 1" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-mint-200 aspect-video rounded-lg">
            <img src="/image-placeholder-2.jpg" alt="Vision Image 2" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-mint-200 aspect-video rounded-lg">
            <img src="/image-placeholder-3.jpg" alt="Vision Image 3" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Approach = () => {
  return (
    <div className="bg-mint-50 p-8 rounded-lg">
      <div className="flex flex-row gap-8">
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="bg-mint-200 aspect-video rounded-lg">
            <img src="/image-placeholder-4.jpg" alt="Approach Image 1" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-mint-200 aspect-video rounded-lg">
            <img src="/image-placeholder-5.jpg" alt="Approach Image 2" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-mint-200 aspect-video rounded-lg">
            <img src="/image-placeholder-6.jpg" alt="Approach Image 3" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
        <div className="bg-mint-100 p-8 rounded-lg flex-1">
          <h2 className="text-3xl font-medium underline mb-4">Our Approach</h2>
          <p className="text-xl text-gray-700">
            Content About the Approach
          </p>
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <div className="bg-mint-50 p-8 rounded-lg">
      <div className="flex flex-row gap-8">
        <div className="bg-mint-100 p-8 rounded-lg flex-1">
          <h2 className="text-3xl font-medium underline mb-4">Our Process</h2>
          <p className="text-xl text-gray-700">
            Content About the Process
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="bg-mint-200 aspect-video rounded-lg">
            <img src="/image-placeholder-7.jpg" alt="Process Image 1" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-mint-200 aspect-video rounded-lg">
            <img src="/image-placeholder-8.jpg" alt="Process Image 2" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="bg-mint-200 aspect-video rounded-lg">
            <img src="/image-placeholder-9.jpg" alt="Process Image 3" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
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

      {/* About Page Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gray-100 inline-block px-8 py-2 rounded-full mx-auto">About Us</h1>
        <div className="space-y-8">
          <Vision />
          <Approach />
          <Process />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;