// import React from 'react'

// export const StudentDashboard = () => {
//     const user = JSON.parse(localStorage.getItem("loggedInUser"));
//   return (
//     <>
//    <div style={{ padding: "20px" }}>
//       <h2>Welcome to your Dashboard</h2>
//       <p><strong>Name:</strong> {user?.name}</p>
//       <p><strong>Email:</strong> {user?.email}</p>
//       <p><strong>Role:</strong> {user?.role}</p>
//     </div>
//     </>
//   )
// }










// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './StudentDashboard.css';
// import { BarChart2 } from 'lucide-react';

// export const StudentDashboard = () => {
//   const user = JSON.parse(localStorage.getItem('loggedInUser'));
//   const navigate = useNavigate();

//   return (
//     <div className="student-dashboard">
//       {/* Top Nav or Mini Sidebar Section */}
//       <div className="top-section">
//         <div className="top-tab active-tab">
//           <BarChart2 size={16} />
//           <span>Overview</span>
//         </div>
//       </div>

//       <div className="dashboard-content">
//         <h2>Welcome, {user?.name || 'Student'}!</h2>
//         <p>
//           You are logged in as a <strong>{user?.role}</strong> in the{" "}
//           <strong>{user?.department || 'Computer Science'}</strong> department
//         </p>

//         <h3>Your Access Level</h3>

//         <div className="dashboard-links">
//           <div className="dashboard-card" onClick={() => navigate('/student-overview')}>
//             Overview
//           </div>
//           <div className="dashboard-card" onClick={() => navigate('/student-profile')}>
//             Profile
//           </div>
//           <div className="dashboard-card" onClick={() => navigate('/student-fees')}>
//             Fees
//           </div>
//           <div className="dashboard-card" onClick={() => navigate('/student-courses')}>
//             Courses
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;










import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css';
import { BarChart2, User, Calendar, CreditCard, BookOpen, GraduationCapIcon, Book, School2, LucideCircleCheckBig } from 'lucide-react';

export const StudentDashboard = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* Top Nav or Mini Sidebar Section */}
         <br /><br />
      {/* <div className="top-section">
       
        <div className="top-tab active-tab">
          <BarChart2 size={16} />
        
          <span>Overview</span>
        </div> */}
      {/* </div> */}

      <div className="dashboard-content">
        <h2>Welcome, {user?.name || 'Student'}!</h2>
        <p>
          You are logged in as a <strong>{user?.role}</strong> in the{' '}
          <strong>{user?.department || 'Computer Science'}</strong> department
        </p>

        <h3>Your Access Level</h3>

        <div className="dashboard-links">
          <div className="dashboard-card" onClick={() => navigate('/student-overview')}>
            <BarChart2 size={18} /> Overview
          </div>
          <div className="dashboard-card" onClick={() => navigate('/student-profile')}>
            <User size={18} /> Profile
          </div>
          {/* <div className="dashboard-card" onClick={() => navigate('/student-attendance')}>
            <Calendar size={18} /> Attendance
          </div> */}
          <div className="dashboard-card" onClick={() => navigate('/student-grades')}>
            <GraduationCapIcon size={18} /> Grades
          </div>
          <div className="dashboard-card" onClick={() => navigate('/student-assignments')}>
            <BookOpen size={18} /> Assignments
          </div>
          <div className="dashboard-card" onClick={() => navigate('/student-fees')}>
            <CreditCard size={18} /> Fees
          </div>
          <div className="dashboard-card" onClick={() => navigate('/student-syllabus')}>
            <Book size={18} /> Syllabus
          </div>
          <div className="dashboard-card" onClick={() => navigate('/student-teacher-websocket')}>
            <LucideCircleCheckBig size={16} /> Ask Question
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
































