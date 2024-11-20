import React from 'react';
import { ShoppingCart, MapPin, Clock, User, Search, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-teal-300 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">MealConnect</span>
        </div>
        <div className="flex space-x-8 items-center">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/Delivery-Page" className="hover:text-gray-600">Delivery</Link>
          <Link to="/about" className="hover:text-gray-600">About</Link>
          <Link to="/contact" className="hover:text-gray-600">Contact</Link>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-2">Your Cart (0)</span>
            </div>
            <button className="p-2 rounded-full bg-white">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full bg-white">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full bg-white">
              <Bell className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          {/* Order Status Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold mb-4">Your Order Is Ready For Pickup !</h1>
            <p className="text-lg">Pick Up By Day And Date</p>
          </div>

          {/* Order Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <ShoppingCart className="h-20 w-20 text-black" />
              <div className="absolute -right-2 -top-2">
                <div className="bg-green-500 rounded-full p-1">
                  <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Order Number */}
          <div className="text-center mb-8">
            <p className="text-lg">Order Number=</p>
          </div>

          {/* Pickup Information */}
          <div className="bg-teal-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-center mb-8">Pick Up At Customer Service Desk</h2>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <MapPin className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-medium mb-2">Pick Up Location</h3>
                <p className="text-sm text-gray-600">Address</p>
                <p className="text-sm text-gray-600">Contact Number</p>
              </div>
              
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-medium mb-2">Store Hours</h3>
                <p className="text-sm text-gray-600">Mon-Sat= Timing</p>
                <p className="text-sm text-gray-600">Sun= Timing</p>
              </div>
              
              <div className="text-center">
                <User className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-medium mb-2">Pick Up Person</h3>
                <p className="text-sm text-gray-600">Name</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderConfirmation;
