import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div style={{ marginLeft: '64px', padding: '20px' }}>
        {/* Main content will go here later */}
      </div>
    </div>
  );
}

export default App;
