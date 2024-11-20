import React from 'react';
import { ShoppingCart, PieChart, Leaf, User, Search, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonationCard = ({ restaurant, foodItem, quantity, expiryDate, location }) => (
  <div className="bg-gray-100 p-4 rounded-lg">
    <div className="bg-gray-200 aspect-square mb-4 flex items-center justify-center text-gray-500">
      Image
    </div>
    <div className="space-y-1 text-sm">
      <p>Restaurant- {restaurant}</p>
      <p>Food Item- {foodItem}</p>
      <p>Quantity- {quantity}</p>
      {expiryDate && <p>Expiry Date- {expiryDate}</p>}
      <p>Location- {location}</p>
    </div>
  </div>
);

const RestaurantCard = ({ restaurant, foodItems, quantity, location, expiryDate }) => (
  <div className="bg-gray-100 p-4 rounded-lg">
    <div className="bg-gray-200 aspect-video mb-4 flex items-center justify-center text-gray-500">
      Image
    </div>
    <p className="font-medium">Restaurant- {restaurant}</p>
    <div className="text-sm">
      <p>Food Items- {foodItems}</p>
      <p>Quantity- {quantity}</p>
      <p>Location- {location}</p>
      {expiryDate && <p>Exp. Date- {expiryDate}</p>}
    </div>
  </div>
);

const ImpactMetric = ({ label, value }) => (
  <div className="bg-gray-50 p-4">
    <h3 className="font-medium">{label}</h3>
    <p className="text-lg">{value}</p>
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

const FoodBankDetails = () => {
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
        {/* Navigation Links for Surplus Food and Available Food Bank */}
      <div className="flex justify-center space-x-4 p-4 bg-gray-100">
        <Link to="/restaurant-food-page" className="text-green-500 font-medium">Surplus Food</Link>
        <Link to="/available-food-banks" className="text-green-500 font-medium">Available Food Banks</Link>
        <Link to="/meal-connect-app" className="text-green-500 font-medium">Meal Connect App</Link>
      </div>
      

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

          <h1 className="text-3xl font-medium text-cyan-500">Your Food Bank Name</h1>

          <div className="flex items-center gap-2">
            <span>Sort by: </span>
            <select className="border rounded px-2 py-1">
              <option>Recommended ▼</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex-1">
            <h2 className="text-2xl text-cyan-500 mb-4">Available Donations</h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[...Array(3)].map((_, i) => (
                <DonationCard
                  key={i}
                  restaurant="Name"
                  foodItem="Item"
                  quantity="Amount"
                  expiryDate="Date"
                  location="Address"
                />
              ))}
            </div>

            <h3 className="text-cyan-500 mb-4">Donor Restaurant Details</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[...Array(2)].map((_, i) => (
                <RestaurantCard
                  key={i}
                  restaurant="Name"
                  foodItems="Items"
                  quantity="Amount"
                  location="Address"
                  expiryDate="Date"
                />
              ))}
            </div>

            <div className="flex gap-4 mb-8">
              <div className="flex-1 bg-cyan-100 p-4 rounded-lg">
                <PieChart className="w-full h-32 mb-4" />
                <p className="text-center">Pie Chart</p>
              </div>
              <div className="flex-1 space-y-4">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-100" />
                    <div>
                      <p>Food Item</p>
                      <p className="text-sm">Collection Date</p>
                      <p className="text-sm">Quantity</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-cyan-500 text-2xl mb-4">Impact Metrics</h3>
            <div className="grid grid-cols-4 gap-4">
              <ImpactMetric label="Total Donations" value="100" />
              <ImpactMetric label="Total Distributed" value="80" />
              <ImpactMetric label="Total Donors" value="25" />
              <ImpactMetric label="Total Beneficiaries" value="500" />
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

export default FoodBankDetails;
