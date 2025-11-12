import React from "react";
import "./Grades.css";

const gradesData = [
  { subject: "HTML", marks: 95, grade: "A", status: "Excellent" },
  { subject: "CSS", marks: 91, grade: "A", status: "Excellent" },
  { subject: "JavaScript", marks: 88, grade: "A-", status: "Very Good" },
  { subject: "React.js", marks: 85, grade: "B+", status: "Good" },
  { subject: "Node.js", marks: 83, grade: "B+", status: "Good" },
];

const statusColors = {
  Excellent: "status-excellent",
  "Very Good": "status-very-good",
  Good: "status-good",
};

export default function Grades() {
  return (
    <div className="grades-container">
      <h2>Grades</h2>
      <p>Welcome back, John Smith! Here's your academic overview.</p>
      <div className="grades-card">
        <h3>Web Development Performance</h3>
        <div className="grades-table">
          <div className="table-header">
            <div>Subject</div>
            <div>Marks</div>
            <div>Grade</div>
            <div>Status</div>
          </div>
          {gradesData.map((item, index) => (
            <div className="table-row" key={index}>
              <div>{item.subject}</div>
              <div>{item.marks}/100</div>
              <div className={`grade-tag`}>{item.grade}</div>
              <div className={`status-tag ${statusColors[item.status]}`}>
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
