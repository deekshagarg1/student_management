import React from "react";
import "./Syllabus.css";

const topics = [
  {
    category: "Web Development",
    items: [
      {
        name: "HTML",
        status: "Completed",
        percentage: 100,
        color: "#22c55e", // green
      },
      {
        name: "CSS",
        status: "In Progress",
        percentage: 70,
        color: "#3b82f6", // blue
      },
      {
        name: "JavaScript",
        status: "Not Started",
        percentage: 0,
        color: "#9ca3af", // gray
      },
      {
        name: "React",
        status: "Not Started",
        percentage: 0,
        color: "#9ca3af", // gray
      },
      {
        name: "Git & GitHub",
        status: "Completed",
        percentage: 100,
        color: "#22c55e", // green
      },
    ],
  },
];

const Syllabus = () => {
  return (
    <div className="syllabus-container">
      <h1>Syllabus</h1>
      <p>Welcome back, Developer! Here's your web dev journey overview.</p>
      {topics.map((section, idx) => (
        <div key={idx} className="section">
          <h2>{section.category}</h2>
          {section.items.map((item, i) => (
            <div key={i} className="topic">
              <div className="topic-header">
                <h3>{item.name}</h3>
                <span className={`badge ${item.status.toLowerCase().replace(" ", "-")}`}>
                  {item.status}
                </span>
              </div>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                  }}
                ></div>
              </div>
              <p className="percentage">{item.percentage}% Complete</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Syllabus;
