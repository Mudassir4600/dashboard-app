import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Dashboard = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        {/* Dashboard content goes here */}
      </div>
    </div>
  );
};

export default Dashboard;
