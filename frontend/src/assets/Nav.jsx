import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Bell, LogOut, User2 } from 'lucide-react';
import './Nav.css';

const Nav = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={()=> navigate('/')}>
        <GraduationCap className="logo-icon" />
        <div>
          <h2 className="navbar-brand">EduManage Pro</h2>
          <p className="tagline">Complete Educational Management System</p>
        </div>
      </div>

      <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        {user && user.role === 'student' && (
          <>
            <Link to="/student-dashboard">Dashboard</Link>
            <Link to="/student-courses">Courses</Link>
            <Link to="/student-profile">Profile</Link>
          </>
        )}
        {user && user.role === 'faculty' && (
          <>
            <Link to="/faculty-dashboard">Faculty Panel</Link>
            <Link to="/faculty-classes">Manage Classes</Link>
          </>
        )}
        {user && user.role === 'manager' && (
          <>
            <Link to="/manager-dashboard">Manager Panel</Link>
            <Link to="/reports">Reports</Link>
          </>
        )}
        {user && user.role === 'owner' && (
          <>
            <Link to="/owner-dashboard">Owner Panel</Link>
            <Link to="/overview">Overview</Link>
          </>
        )}
      </div>

      <div className="navbar-right">
        {user ? (
          <>
            <div className="navbar-profile">
              <User2 className="user-icon" />
              <div className="user-details">
                <span className="user-name">{user.name}</span>
                <span className="user-role">
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </span>
              </div>
            </div>
            <button className="icon-btn">
              <Bell />
            </button>
            <button className="icon-btn logout-btn" onClick={handleLogout}>
              <LogOut />
              <span className="logout-text">Logout</span>
            </button>
          </>
        ) : (
          <>
            <Link className="auth-link login" to="/login">Log In</Link>
            <Link className="auth-link signup" to="/sign">Sign Up</Link>
          </>
        )}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Nav;
