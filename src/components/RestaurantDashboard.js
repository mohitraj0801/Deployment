import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you're using React Router for navigation
import { ShoppingCart, User, Search, Bell, Leaf } from 'lucide-react'; // Replace with actual icon library

import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RestaurantDashboard = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Donations',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Deliveries',
        data: [30, 45, 28, 50],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        tension: 0.4,
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
        <section className="available-surplus">
          <h2>Available Surplus Foods</h2>
          <div className="surplus-amount">
            <h3>$50.00</h3>
            <span>+24 New Add</span>
          </div>
        </section>
        <section className="total-donations">
          <h2>Total Donations</h2>
          <div className="donations-amount">
            <h3>$150.00</h3>
            <span>+24 New Add</span>
          </div>
        </section>
        <section className="donation-history">
          <h2>Total Donations History</h2>
          <Bar data={barData} />
        </section>
        <section className="delivery-status">
          <h2>Delivery Status</h2>
          <Line data={lineData} />
        </section>
        <section className="restaurant-profile">
          <h2>Restaurant Profile</h2>
          <div className="profile-details">
            <p>Restaurant Name</p>
            <p>Owner Person</p>
            <p>Contact Information</p>
            <p>Location</p>
            <p>Donation Frequency</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RestaurantDashboard;
