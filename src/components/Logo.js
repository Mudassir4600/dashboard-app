// components/common/Logo.js
import React from 'react';
import login_logo from '../assets/login-logo.png';

const Logo = ({ className = '' }) => {
  return <img src={login_logo} alt="App Logo" className={className} />;
};

export default Logo;
