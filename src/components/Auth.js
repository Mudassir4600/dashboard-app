// Auth.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Logo from './Logo';
import '../styles/LoginForm.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-page">
      <div className="login-card">
        <Logo className="logo" />
        {isLogin ? (
          <LoginForm toggleForm={() => setIsLogin(false)} />
        ) : (
          <SignupForm toggleForm={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
};

export default Auth;
