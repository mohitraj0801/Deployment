import React from 'react';
import { Menu, User, Search, Bell, ShoppingCart, ChevronDown } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, PieChart, Pie } from 'recharts';

// Sample data for charts
const barData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 600 },
  { name: 'Mar', value: 800 }
];

const pieData = [
  { name: 'Category A', value: 400 },
  { name: 'Category B', value: 300 },
  { name: 'Category C', value: 300 }
];

// Shared Navigation Component
const Navigation = () => (
  <nav className="bg-teal-300 p-4 flex justify-between items-center">
    <div className="flex items-center space-x-2">
      <div className="text-lg font-bold flex items-center">
        <span className="text-green-600">Meal</span>
        Connect
      </div>
    </div>
    <div className="flex space-x-8 items-center">
      <a href="#" className="hover:text-gray-700">Home</a>
      <a href="#" className="hover:text-gray-700">Delivery</a>
      <a href="#" className="hover:text-gray-700">About</a>
      <a href="#" className="hover:text-gray-700">Contact</a>
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-green-600">
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
);

// Shared Sidebar Component
const Sidebar = () => (
  <aside className="w-64 bg-gray-100 min-h-screen p-4">
    <button className="mb-4">
      <Menu className="h-6 w-6" />
    </button>
    <div className="space-y-2">
      <div className="font-medium">
        <span>Dashboard</span>
        <div className="pl-4 space-y-2 text-sm text-gray-600">
          <div>Date Wise Donation Tracking</div>
          <div>Restaurant Donation Details</div>
          <div>Quantity Metrics</div>
          <div>Food Item Categorization</div>
          <div>Daily Donation Summaries</div>
          <div>Cumulative Donation Statistics</div>
        </div>
      </div>
      <div className="font-medium flex items-center">
        Restaurant <ChevronDown className="h-4 w-4 ml-1" />
      </div>
      <div className="font-medium flex items-center">
        Food Banks <ChevronDown className="h-4 w-4 ml-1" />
      </div>
    </div>
  </aside>
);

// Stats Card Component
const StatsCard = ({ title, value, newAdd }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <ChevronDown className="h-4 w-4" />
    </div>
    <div className="flex items-center">
      <div className="bg-gray-200 p-2 rounded mr-2">
        <div className="w-8 h-8 bg-gray-400" />
      </div>
      <span className="text-2xl font-bold">{value}</span>
    </div>
    {newAdd && (
      <div className="mt-2">
        <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
          +24 New Add
        </span>
      </div>
    )}
  </div>
);

// Chart Card Component
const ChartCard = ({ title, type }) => (
  <div className="bg-teal-200 p-6 rounded-lg">
    {type === 'bar' && (
      <BarChart width={300} height={200} data={barData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    )}
    {type === 'line' && (
      <LineChart width={300} height={200} data={barData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
    )}
    {type === 'pie' && (
      <PieChart width={300} height={200}>
        <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#82ca9d" />
      </PieChart>
    )}
    <div className="text-center mt-4">{title}</div>
  </div>
);

// Profile Card Component
const ProfileCard = ({ type }) => (
  <div className="bg-white p-6 rounded-lg">
    <div className="flex items-start space-x-4">
      <div className="bg-gray-200 p-2 rounded">
        <div className="w-12 h-12 bg-gray-400" />
      </div>
      <div className="space-y-1">
        <p className="font-medium">{type === 'restaurant' ? 'Restaurant Name' : 'Food Bank Name'}</p>
        <p>{type === 'restaurant' ? 'Owner Person' : 'Contact Person'}</p>
        <p>Contact Information</p>
        <p>Location</p>
        <p>{type === 'restaurant' ? 'Donation Frequency' : 'Operational Hours'}</p>
      </div>
    </div>
  </div>
);

// Food Bank Dashboard
export const FoodBankDashboard = () => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-50">
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Food Bank Dashboard</h1>
          <div className="flex space-x-2">
            <button className="px-4 py-1 rounded border">Date</button>
            <button className="px-4 py-1 rounded border">Weekly</button>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mb-6">
          <StatsCard title="Total Donations" value="500.00" newAdd />
          <StatsCard title="Available Donations" value="100.00" newAdd />
          <StatsCard title="Received Donations" value="150.00" newAdd />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <ChartCard title="Total Donations" type="bar" />
          <ChartCard title="Coordinate Pickups" type="bar" />
          <ProfileCard type="foodbank" />
        </div>
      </main>
    </div>
  </div>
);

// Restaurant Dashboard
export const RestaurantDashboard = () => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-50">
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Restaurant Dashboard</h1>
          <div className="flex space-x-2">
            <button className="px-4 py-1 rounded border">Date</button>
            <button className="px-4 py-1 rounded border">Weekly</button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <StatsCard title="Available Surplus Foods" value="50.00" newAdd />
          <StatsCard title="Total Donations" value="150.00" newAdd />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <ChartCard title="Total Donations History" type="bar" />
          <ChartCard title="Delivery Status" type="line" />
          <ProfileCard type="restaurant" />
        </div>
      </main>
    </div>
  </div>
);

// MealConnect Main Dashboard
export const MealConnectDashboard = () => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-50">
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">MealConnect Dashboard</h1>
          <div className="flex space-x-2">
            <button className="px-4 py-1 rounded border">Date</button>
            <button className="px-4 py-1 rounded border">Weekly</button>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6 mb-6">
          <ChartCard title="Date Wise Donation Tracking" type="line" />
          <ChartCard title="Restaurant Donation Details" type="bar" />
          <ChartCard title="Quantity Metrics" type="bar" />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <ChartCard title="Daily Donation Summaries" type="line" />
          <div className="flex items-center justify-center">
            <ChartCard title="Food Item Categorization" type="pie" />
          </div>
          <ChartCard title="Cumulative Donation Statistics" type="line" />
        </div>
      </main>
    </div>
  </div>
);

export default {
  FoodBankDashboard,
  RestaurantDashboard,
  MealConnectDashboard
};