import React from "react";
import "../styles/Topbar.css";
import { UserCircle } from "lucide-react";

const Topbar = () => {
  const username = sessionStorage.getItem("username") || "User";

  return (
    <div className="topbar">
      <div className="topbar-title">Agentic - AI Chatbot</div>

      <div className="topbar-profile">
        <span className="topbar-username">{username}</span>
        <UserCircle size={32} color="#0b2b48" strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default Topbar;
