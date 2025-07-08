// // SignupForm.js
// import React, { useState } from 'react';
// import '../styles/LoginForm.css';
// import Input from './Input';
// import Button from './Button';
// import SSOButton from './SSOButton';
// import axios from 'axios';

// const SignupForm = ({ toggleForm }) => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const isValidFullName = (name) => name.trim().length > 0;
//     const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
//     const isValidPassword = (password) =>
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,10}$/.test(password);

//     if (!isValidFullName(fullName)) {
//       alert("Please enter your full name.");
//       return;
//     }

//     if (!isValidEmail(email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     // if (!isValidPassword(password)) {
//     //   alert(
//     //     "Password must be 8-10 characters and include uppercase, lowercase, number, and special character."
//     //   );
//     //   return;
//     // }
//     if (!password) {
//   alert("Password is required.");
//   return;
// }


//     try {
//   const response = await axios.post(
//     process.env.REACT_APP_LAMBDA_SIGNUP_ENDPOINT,
//     {
//       full_name: fullName,
//       email,
//       password,
//     }
//   );

//   alert(response.data?.message || 'Signup successful! You can now log in.');
//   toggleForm();
//     // } catch (error) {
//     //   console.error(error);
//     //   alert('Signup failed. Try again.');
//     // }
// //      } catch (error) {
// //   console.error('Signup error:', error.response?.data || error.message);
// //   alert(error.response?.data?.message || 'Signup failed. Try again.');
// // }
//     }catch (error) {
//   console.error('Signup error:', error.response?.data || error.message);
//   alert(error.response?.data?.message || 'Signup failed. Try again.');
// }

//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Create Account</h2>
//       <p>Sign up to get started</p>

//       <Input
//         type="text"
//         placeholder="Full Name"
//         value={fullName}
//         onChange={(e) => setFullName(e.target.value)}
//         className="your-input-class"
//       />
//       <Input
//         type="email"
//         placeholder="Enter Your Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="your-input-class"
//       />
//       <Input
//         type="password"
//         placeholder="Create Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="your-input-class"
//       />

//       <div className="remember-me">
//         <input type="checkbox" id="terms" />
//         <label htmlFor="terms">I agree to the Terms & Conditions</label>
//       </div>

//       <Button text="Sign Up" className="login-btn" type="submit" />

//       <p className="signup-text">
//         Already have an account?{' '}
//         <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue' }}>
//           Login
//         </span>
//       </p>

//       <p>OR</p>

//       <SSOButton />
//     </form>
//   );
// };

// export default SignupForm;


import React, { useState } from 'react';
import '../styles/LoginForm.css';
import Input from './Input';
import Button from './Button';
import SSOButton from './SSOButton';
import axios from 'axios';

const SignupForm = ({ toggleForm }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (!password || password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    const signupData = {
      full_name: fullName,
      email,
      password,
    };

    console.log("Sending signup data:", signupData);

    try {
      const response = await axios.post(
        process.env.REACT_APP_LAMBDA_SIGNUP_ENDPOINT,
        signupData
      );

      console.log("Signup successful:", response.data);
      alert("Signup successful! You can now log in.");
      toggleForm();
    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Signup failed. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <p>Sign up to get started</p>

      <Input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="your-input-class"
      />
      <Input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="your-input-class"
      />
      <Input
        type="password"
        placeholder="Create Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="your-input-class"
      />

      <div className="remember-me">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">I agree to the Terms & Conditions</label>
      </div>

      <Button text="Sign Up" className="login-btn" type="submit" />

      <p className="signup-text">
        Already have an account?{" "}
        <span onClick={toggleForm} style={{ cursor: "pointer", color: "blue" }}>
          Login
        </span>
      </p>

      <p>OR</p>

      <SSOButton />
    </form>
  );
};

export default SignupForm;
