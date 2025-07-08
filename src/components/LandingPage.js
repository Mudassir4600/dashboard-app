import React from 'react';

const LandingPage = () => {
  const username = sessionStorage.getItem('username');

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = '/';
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome, {username}!</h1>
      <p style={styles.subtext}>You have successfully logged in.</p>
      <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '10vh',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  subtext: {
    fontSize: '1.2rem',
    color: 'gray',
    marginBottom: '2rem',
  },
  logoutButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default LandingPage;
