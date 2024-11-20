import React from 'react';
import { Search, ShoppingCart, Bell, User, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const FoodBankCard = ({ foodBank, location }) => (
  <div className="bg-gray-100 p-4 rounded-lg">
    <div className="bg-gray-200 aspect-video mb-4 flex items-center justify-center text-gray-500">
      Image
    </div>
    <div>
      <p className="text-sm">Food Bank- {foodBank}</p>
      <p className="text-sm">Location- {location}</p>
    </div>
  </div>
);

const DonationHistoryCard = ({ name, foodItem, meals, notes }) => (
  <div className="flex gap-4 mb-4 bg-white p-2 rounded">
    <div className="w-16 h-16 bg-gray-100" />
    <div>
      <h3 className="font-medium">{name}</h3>
      <p className="text-sm">Food Item - {foodItem}</p>
      <p className="text-xs text-gray-500">{meals} Meals</p>
      <p className="text-xs">Notes-</p>
    </div>
  </div>
);

const AvailableFoodBanks = () => {
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

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Food Banks"
              className="border rounded px-3 py-1 pr-8"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          
          <h1 className="text-3xl font-medium text-cyan-500">Available Food Banks</h1>
          
          <div className="flex items-center gap-2">
            <span>Sort by: </span>
            <select className="border rounded px-2 py-1">
              <option>Recommended ▼</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <FoodBankCard 
                  key={i}
                  foodBank="Name"
                  location="Address"
                />
              ))}
            </div>
          </div>

          <div className="w-72">
            <h2 className="text-xl text-cyan-500 mb-4">Donation History</h2>
            {[...Array(4)].map((_, i) => (
              <DonationHistoryCard
                key={i}
                name="Name of Food Bank"
                foodItem="Food Item"
                meals="28"
                notes=""
              />
            ))}
            <div className="flex justify-between items-center mt-4">
              <ShoppingCart className="h-6 w-6 text-green-500" />
              <button className="bg-green-200 px-4 py-1 rounded">
                Deliver To
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoodBanks;
