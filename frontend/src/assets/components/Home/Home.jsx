// Home.jsx
import React from 'react';
import { GraduationCap } from 'lucide-react';
import {
  Users,
  // GraduationCap,
  Building2,
  Activity,
  User,
  NotebookText,
  BarChart2,
  CalendarDays,
} from "lucide-react";
import './Home.css';
import Footer from '../footer/Footer';

const stats = [
  { icon: <Users size={28} />, number: "10,000+", label: "Students Managed" },
  { icon: <NotebookText size={28} />, number: "500+", label: "Faculty Members" },
  { icon: <Building2 size={28} />, number: "50+", label: "Institutes" },
  { icon: <Activity size={28} />, number: "99.9%", label: "Uptime" },
];

const features = [
  {
    icon: <User size={30} />,
    title: "Student Management",
    desc: "Complete student lifecycle management with profiles, enrollment, and progress tracking",
  },
  {
    icon: <GraduationCap size={30} />,
    title: "Faculty Portal",
    desc: "Comprehensive tools for teachers to manage classes, assignments, and student evaluation",
  },
  {
    icon: <BarChart2 size={30} />,
    title: "Admin Panel",
    desc: "Powerful administrative tools for complete institute management and analytics",
  },
  {
    icon: <CalendarDays size={30} />,
    title: "Attendance System",
    desc: "Smart attendance tracking with QR codes, biometric integration, and real-time reports",
  },
];

export const Home = () => {

  return (<>
    <div className="home-main">
    <div className="home-container">
      <div className="home-left">
        <h1>Smart Digital Management</h1>
        <h3>Complete Institute Management Solution</h3>
        <p>Streamline your educational institution with our comprehensive digital platform</p>
        <div className="home-buttons">
          <button className="get-started">Get Started →</button>
          <button className="learn-more">Learn More</button>
        </div>
      </div>

      <div className="home-right">
        <GraduationCap size={60} color="#fff" />
        <h2>Digital Education</h2>
        <p>Transforming learning experiences</p>
      </div>
    </div>    </div>
{/* ---------------------------------------- */}

    <div className="dashboard-main">
      <div className="stats-section">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            {stat.icon}
            <h2>{stat.number}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="features-section">
        <h1>Comprehensive Management Features</h1>
        <p>
          Everything you need to manage your educational institution efficiently and effectively
        </p>

        <div className="feature-cards">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              {feature.icon}
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <a href="#">Explore →</a>
            </div>
          ))}
        </div>
      </div>
    </div>

{/* -------------------------- */}
<Footer/>

    </>
  );
};

export default Home;
