import React from 'react';
import './AssignmentDashboard.css';


const assignments = [
  {
    title: 'HTML Basics',
    dueDate: '2024-08-01',
    status: 'Submitted',
    description: 'Create a static website using basic HTML tags and structure.'
  },
  {
    title: 'CSS Styling',
    dueDate: '2024-08-05',
    status: 'Pending',
    description: 'Design a responsive layout using CSS Flexbox and Grid.'
  },
  {
    title: 'JavaScript Functions',
    dueDate: '2024-08-10',
    status: 'Pending',
    description: 'Implement DOM manipulation and event listeners using JavaScript.'
  },
  {
    title: 'React Components',
    dueDate: '2024-08-15',
    status: 'Pending',
    description: 'Build a to-do list app using functional components and hooks.'
  },
  {
    title: 'Responsive Portfolio',
    dueDate: '2024-08-20',
    status: 'Submitted',
    description: 'Create your personal portfolio website using HTML, CSS, and JavaScript.'
  }
];

const AssignmentDashboard = () => {
  return (
     <div className="assignment-container">
      <h2>Web Development Assignments</h2>
      <p className="subheading">Track and submit your assignments below</p><br /><br />
      <div className="assignment-list">
        {assignments.map((item, index) => (
          <div className="assignment-card" key={index}>
            <h3>{item.title}</h3>
            <p className="description">{item.description}</p>
            <p><strong>Due Date:</strong> {item.dueDate}</p>
            <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
            {item.status === 'Pending' && <button className="submit-btn">Submit Now</button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentDashboard;
