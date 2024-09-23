import React from 'react';
import '../styles/Dashboard.css'; // Optional: for custom styles
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Button } from 'primereact/button';

const Dashboard = () => {
    const { logout } = useAuth();
    const handleLogout = () => {
        // Perform logout actions, e.g., clearing the authentication context
        // Redirect to the login page or any other desired location
        logout();

        <Navigate to="/" replace />;
    };
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <nav className="dashboard-sidebar">
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><Button onClick={handleLogout} >Logout</Button></li>
          </ul>
        </nav>
        <main className="dashboard-main">
          <h2>Welcome to the Dashboard!</h2>
          <p>This is your main content area. You can add charts, tables, and other components here.</p>
          <div className="stats">
            <div className="stat-card">Stat 1</div>
            <div className="stat-card">Stat 2</div>
            <div className="stat-card">Stat 3</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;