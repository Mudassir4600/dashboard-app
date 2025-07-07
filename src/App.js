import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        {/* page content will go here */}
      </div>
    </div>
  );
}

export default App;
