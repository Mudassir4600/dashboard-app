import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Auth from "./components/Auth";
import LandingPage from "./components/LandingPage"; // Dashboard content
import "./App.css";

function App() {
  const isAuthenticated = sessionStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

function Dashboard() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
