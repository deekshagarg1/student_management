// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // import './Dashboard.css';


// export const AdminDashboard = () => {
//   const user = JSON.parse(localStorage.getItem('loggedInUser'));
//   const navigate = useNavigate();

//   return (
//     <div className="dashboard">
//       <div className="dashboard-content">
//         <h2>Welcome, {user?.name || 'Admin'}!</h2>
//         <p>You are logged in as <strong>Admin</strong> with full access.</p>

//         <h3>Full Access Panel</h3>

//         <div className="dashboard-links">
//           <div className="dashboard-card" onClick={() => navigate('/student-overview')}>
//             Student Overview
//           </div>
//           <div className="dashboard-card" onClick={() => navigate('/faculty-classes')}>
//             Faculty Management
//           </div>
//           <div className="dashboard-card" onClick={() => navigate('/manager-reports')}>
//             Manager Reports
//           </div>
//           <div className="dashboard-card" onClick={() => navigate('/manage-users')}>
//             All User Management
//           </div>
//           <div className="dashboard-card" onClick={() => navigate('/courses')}>
//             All Courses
//           </div>
//           <div className="dashboard-card" onClick={() => navigate('/admin-settings')}>
//             Admin Settings
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;














import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './StudentDashboard.css';
import { BarChart2, User, Users, GraduationCap, FileText, CalendarClock, LayoutDashboard, Settings, BookOpen } from 'lucide-react';

export const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* Top Nav or Mini Sidebar Section */}
      {/* <div className="top-section">
        <div className="top-tab active-tab">
          <LayoutDashboard size={16} />
          <span>Dashboard</span>
        </div>
      </div> */}
<br /><br />
      <div className="dashboard-content">
        <h2>Welcome, {user?.name || 'Admin'}!</h2>
        <p>You are logged in as <strong>Admin</strong> with full access.</p>

        <h3>Full Access Panel</h3>

        <div className="dashboard-links">
          <div className="dashboard-card" onClick={() => navigate('/student-overview')}>
            <Users size={18} /> Student Overview
          </div>
          <div className="dashboard-card" onClick={() => navigate('/faculty-classes')}>
            <GraduationCap size={18} /> Faculty Management
          </div>
          <div className="dashboard-card" onClick={() => navigate('/manager-reports')}>
            <BarChart2 size={18} /> Manager Reports
          </div>
          <div className="dashboard-card" onClick={() => navigate('/manage-users')}>
            <User size={18} /> All User Management
          </div>
          <div className="dashboard-card" onClick={() => navigate('/courses')}>
            <BookOpen size={18} /> All Courses
          </div>
          <div className="dashboard-card" onClick={() => navigate('/admin-settings')}>
            <Settings size={18} /> Admin Settings
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

