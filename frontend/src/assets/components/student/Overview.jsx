import React from 'react'
import './overview1.css'
const Overview = () => {
  return (
      <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome back, John Smith! Here's your academic overview.</p>

      <div className="stats">
        <div className="stat-box green">
          <p>Overall Attendance</p>
          <h2>89.2%</h2>
        </div>
        <div className="stat-box blue">
          <p>Average Grade</p>
          <h2>A-</h2>
        </div>
        <div className="stat-box orange">
          <p>Pending Assignments</p>
          <h2>2</h2>
        </div>
        <div className="stat-box red">
          <p>Fee Status</p>
          <h2>₹5,000 Due</h2>
        </div>
      </div>

      <div className="grades-assignments">
        <div className="grades">
          <h3>Recent Grades</h3>
          <div className="grade-item">
            <div>
              <strong>Mathematics</strong>
              <p>92/100</p>
            </div>
            <span className="badge green">A</span>
          </div>
          <div className="grade-item">
            <div>
              <strong>Science</strong>
              <p>88/100</p>
            </div>
            <span className="badge green">A-</span>
          </div>
          <div className="grade-item">
            <div>
              <strong>English</strong>
              <p>85/100</p>
            </div>
            <span className="badge blue">B+</span>
          </div>
        </div>

        <div className="assignments">
          <h3>Upcoming Assignments</h3>
          <div className="assignment-item">
            <div>
              <strong>Algebra Problems Set 5</strong>
              <p>Mathematics</p>
            </div>
            <div className="assignment-meta">
              <span className="date red">2024-01-15</span>
              <span className="priority red">High</span>
            </div>
          </div>
          <div className="assignment-item">
            <div>
              <strong>Essay on Climate Change</strong>
              <p>English</p>
            </div>
            <div className="assignment-meta">
              <span className="date yellow">2024-01-20</span>
              <span className="priority yellow">Medium</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview