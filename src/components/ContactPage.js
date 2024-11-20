import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { ShoppingCart, User, Search, Bell, Leaf } from 'lucide-react'

const ContactPage = () => {
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

      <div className="bg-amber-100 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-start">
            <div className="text-3xl font-bold">
              <img src="/logo.png" alt="MealConnect" className="h-12 mb-4" />
            </div>

            <div className="bg-mint-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Contact</h2>
              <div className="space-y-2">
                <p className="font-bold">Address</p>
                <p>Full Address</p>
                <p className="font-bold mt-4">Contact no.</p>
                <p>info-mealconnect@________.org</p>
              </div>
            </div>

            <div className="bg-mint-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Terms & Privacy</h2>
              <div className="space-y-2">
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Donor Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
