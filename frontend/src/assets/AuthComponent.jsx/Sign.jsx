import React, { useState } from 'react';
import './Sign.css';

const Sign = () => {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({});

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setFormData({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newUser = { role, ...formData };
// 🔐 Step 1: Get old data (for the selected role) from localStorage
const existingUsers = JSON.parse(localStorage.getItem(role)) || [];

// 🔁 Step 2: Add new user into that array
const updateUsers = [...existingUsers, newUser];

// 💾 Step 3: Save updated array back to localStorage
localStorage.setItem(role,JSON.stringify(updateUsers));

console.log("Saved to localStorage:", newUser);
alert(`Signup successful for ${role}`);

// Reset Form
setFormData({});
setRole('')
  
  };

  return (
    <div className="signup-container">
      <div className="logo-circle">🎓</div>
      <h2 className="app-title">EduManage Pro</h2>
      <p className="subtitle">Create your account</p>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label>Select Role:</label>
        <select value={role} onChange={handleRoleChange} required>
          <option value="">-- Select --</option>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="manager">Manager</option>
          <option value="owner">Owner</option>
        </select>

        {/* Common Fields */}
        {role && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name || ''}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email || ''}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password || ''}
              onChange={handleChange}
              required
            />
          </>
        )}

        {/* Role Specific Fields */}
        {role === 'student' && (
          <>
            <input
              type="text"
              name="college"
              placeholder="College Name"
              value={formData.college || ''}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="rollNumber"
              placeholder="Roll Number"
              value={formData.rollNumber || ''}
              onChange={handleChange}
              required
            />
          </>
        )}

        {role === 'faculty' && (
          <>
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department || ''}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="facultyId"
              placeholder="Faculty ID"
              value={formData.facultyId || ''}
              onChange={handleChange}
              required
            />
          </>
        )}

        {role === 'manager' && (
          <>
            <input
              type="text"
              name="branch"
              placeholder="Branch Location"
              value={formData.branch || ''}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="experience"
              placeholder="Years of Experience"
              value={formData.experience || ''}
              onChange={handleChange}
              required
            />
          </>
        )}

        {role === 'owner' && (
          <>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company || ''}
              onChange={handleChange}
              required
            />
            <input
              type="url"
              name="website"
              placeholder="Website URL"
              value={formData.website || ''}
              onChange={handleChange}
              required
            />
          </>
        )}

        {role && <button type="submit">Signup as {role}</button>}
      </form>
    </div>
  );
};

export default Sign;