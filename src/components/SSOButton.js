// components/common/SSOButtons.js
import React from 'react';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import windows from '../assets/windows.png';

const SSOButton = () => {
  return (
    <div className="social-icons">
      <img src={google} alt="Google" />
      <img src={windows} alt="Windows" />
      <img src={facebook} alt="Facebook" />
    </div>
  );
};

export default SSOButton;
