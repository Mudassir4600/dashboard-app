// LoginForm.js
import React, { useState } from 'react';
import '../styles/LoginForm.css';
import Input from './Input';
import Button from './Button';
import SSOButton from './SSOButton';
import axios from 'axios';

const LoginForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const isValidPassword = (password) =>
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,10}$/.test(password);

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // if (!isValidPassword(password)) {
    //   alert(
    //     "Password must be 8-10 characters and include uppercase, lowercase, number, and special character."
    //   );
    //   return;
    // }

    if (!password) {
  alert("Password is required.");
  return;
}


    try {
      const response = await axios.post(
        process.env.REACT_APP_LAMBDA_LOGIN_ENDPOINT,
        { email, password }
      );

      const { token, username } = response.data;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('username', username);
      window.location.href = '/dashboard'; // Redirect to dashboard after successful login
    } catch (error) {
      console.error(error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome Back</h2>
      <p>Log in to continue using Application</p>

      <Input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="your-input-class"
      />

      <Input
        type="password"
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="your-input-class"
      />

      <div className="remember-me">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember Me</label>
      </div>

      <Button text="Login" className="login-btn" type="submit" />

      <p className="signup-text">
        Don’t have an account?{' '}
        <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>
          Sign Up
        </span>
      </p>

      <p>OR</p>

      <SSOButton />
    </form>
  );
};

export default LoginForm;