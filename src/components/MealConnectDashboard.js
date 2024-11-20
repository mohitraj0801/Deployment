import React from 'react';

const MealConnectDashboard = () => {
  return (
    <div>
      <h1>MealConnect Dashboard</h1>
      <div className="row">
        <div className="col">
          <h2>Line Graph</h2>
          <div className="line-graph">Date Wise Donation Tracking</div>
        </div>
        <div className="col">
          <h2>Bar Graph</h2>
          <div className="bar-graph">Restaurant Donation Details</div>
        </div>
        <div className="col">
          <h2>Bar Graph</h2>
          <div className="bar-graph">Quantity Metrics</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Line Graph</h2>
          <div className="line-graph">Daily Donation Summaries</div>
        </div>
        <div className="col">
          <h2>Pie Chart</h2>
          <div className="pie-chart">Food Item Categorization</div>
        </div>
        <div className="col">
          <h2>Line Graph</h2>
          <div className="line-graph">Cumulative Donation Statistics</div>
        </div>
      </div>
    </div>
  );
};

export default MealConnectDashboard;