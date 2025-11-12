import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './components/Dashboard.css';

export const Managerdashboard = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h2>Welcome, {user?.name || 'Manager'}!</h2>
        <p>
          You are logged in as a <strong>{user?.role}</strong> in the{' '}
          <strong>{user?.department || 'Management'}</strong> department
        </p>

        <h3>Your Access Level</h3>

        <div className="dashboard-links">
          <div className="dashboard-card" onClick={() => navigate('/reports')}>
            Reports
          </div>
          <div className="dashboard-card" onClick={() => navigate('/manage-users')}>
            Manage Users
          </div>
          <div className="dashboard-card" onClick={() => navigate('/manager-profile')}>
            Profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default Managerdashboard;
