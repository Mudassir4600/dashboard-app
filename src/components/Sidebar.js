import React from 'react';
import { Home, MessageSquare, Settings } from 'lucide-react';
import './Sidebar.css';
import logo from '../assets/logo.png'; // ✅ Correct import

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div
        className="logo"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <div className="menu">
        <div className="icon-wrapper active"><Home size={22} /></div>
        <div className="icon-wrapper"><MessageSquare size={22} /></div>
        <div className="bottom-icon"><Settings size={22} /></div>
      </div>
    </div>
  );
};

export default Sidebar;
