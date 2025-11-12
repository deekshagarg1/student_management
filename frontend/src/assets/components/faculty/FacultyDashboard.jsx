// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // import './Dashboard.css';


// export const FacultyDashboard = () => {
//   const user = JSON.parse(localStorage.getItem('loggedInUser'));
//   const navigate = useNavigate();

//   return (
//     <div className="dashboard">
//       <div className="dashboard-content">
//         <h2>Welcome, {user?.name || 'Faculty'}!</h2>
//         <p>
//           You are logged in as a <strong>{user?.role}</strong> in the{' '}
//           <strong>{user?.department || 'Science'}</strong> department
//         </p>

//         <h3>Your Access Level</h3>

//         <div className="dashboard-links">
//           <div className="dashboard-card" onClick={() => navigate('/faculty-classes')}>
//             Manage Classes
//           </div>
//           <div className="dashboard-card" onClick={() => navigate('/faculty-students')}>
//             View Students
//           </div>
//           <div className="dashboard-card" onClick={() => navigate('/faculty-profile')}>
//             Profile
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FacultyDashboard;








import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './StudentDashboard.css';
import { BarChart2, User, Calendar, CreditCard, BookOpen, GraduationCap, Users, FileText, CalendarClock } from 'lucide-react';

export const FacultyDashboard = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* Top Nav or Mini Sidebar Section */}
      {/* <div className="top-section">
        <div className="top-tab active-tab">
          <BarChart2 size={16} />
          <span>Dashboard</span>
        </div>
      </div> */}

      <div className="dashboard-content">
        <h2>Welcome, {user?.name || 'Faculty'}!</h2>
        <p>
          You are logged in as a <strong>{user?.role}</strong> in the{' '}
          <strong>{user?.department || 'Science'}</strong> department
        </p>

        <h3>Your Access Level</h3>

        <div className="dashboard-links">
          <div className="dashboard-card" onClick={() => navigate('/faculty-dashboard')}>
            <BarChart2 size={18} /> Dashboard
          </div>
          <div className="dashboard-card" onClick={() => navigate('/faculty-profile')}>
            <User size={18} /> Profile
          </div>
          <div className="dashboard-card" onClick={() => navigate('/faculty-classes')}>
            <GraduationCap size={18} /> My Classes
          </div>
          <div className="dashboard-card" onClick={() => navigate('/faculty-students')}>
            <Users size={18} /> Students
          </div>
          <div className="dashboard-card" onClick={() => navigate('/faculty-assignments')}>
            <FileText size={18} /> Assignments
          </div>
          <div className="dashboard-card" onClick={() => navigate('/faculty-attendance')}>
            <BarChart2 size={18} /> Attendance
          </div>
          <div className="dashboard-card" onClick={() => navigate('/faculty-schedule')}>
            <CalendarClock size={18} /> Schedule
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
