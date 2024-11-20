import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you're using React Router for navigation
import { ShoppingCart, User, Search, Bell, Leaf } from 'lucide-react'; // Replace with actual icon library


import { Bar } from 'react-chartjs-2'; // If you are using charts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FoodBankDashboard = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Donations History',
        data: [120, 200, 150, 180, 220],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-teal-300 p-4 flex justify-between items-center">
        {/* Left Section: Logo and Links */}
        <div className="flex items-center space-x-4">
          {/* Leaf Icon and Logo */}
          <div className="flex items-center ">
            <Leaf className="text-green-500 h-6 w-6" />
            <span className="font-semibold text-black">Meal</span>
            <span className="font-semibold text-green-500">Connect</span>
          </div>
          {/* Links */}
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-gray-600">Home</Link>
            <Link to="/Delivery-Page" className="hover:text-gray-600">Delivery</Link>
            <Link to="/about" className="hover:text-gray-600">About</Link>
            <Link to="/contact" className="hover:text-gray-600">Contact</Link>
          </div>
        </div>

        {/* Right Section: Icons */}
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
      </nav>

      {/* Main Content */}
      <main className="main">
        <section className="total-donations">
          <h2>Total Donations</h2>
          <div className="donations-amount">
            <h3>$500.00</h3>
            <span>+24 New Add</span>
          </div>
        </section>
        <section className="available-donations">
          <h2>Available Donations</h2>
          <div className="donations-amount">
            <h3>$100.00</h3>
            <span>+24 New Add</span>
          </div>
        </section>
        <section className="received-donations">
          <h2>Received Donations</h2>
          <div className="donations-amount">
            <h3>$150.00</h3>
            <span>+24 New Add</span>
          </div>
        </section>
        <section className="total-donations-history">
          <h2>Total Donations History</h2>
          <Bar data={barData} />
        </section>
        <section className="coordinate-pickups">
          <h2>Coordinate Pickups</h2>
          <div className="bar-chart"></div>
        </section>
        <section className="food-bank-profile">
          <h2>Food Bank Profile</h2>
          <div className="profile-details">
            <p>Food Bank Name</p>
            <p>Contact Person</p>
            <p>Contact Information</p>
            <p>Location</p>
            <p>Operational Hours</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FoodBankDashboard;
