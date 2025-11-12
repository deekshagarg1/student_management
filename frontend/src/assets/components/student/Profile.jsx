import React from "react";
import "./Profile.css";

const Profile = () => {
  return (


<div className="profile-main">

        <div className="container">
      <h2>Profile</h2>
      <p>Welcome back, John Smith! Here's your academic overview.</p>

      <div className="profile-box">
        <div className="left">
          <img
            src="https://emojicdn.elk.sh/🧑‍🎓"
            alt="Profile"
            className="profile-img"
          />
          <button className="blue-btn">Change Photo</button>
        </div>

        <div className="right">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="enter ypur name" />
          </div>
          <div className="form-group">
            <label>Student ID</label>
            <input type="text" placeholder="enter student ID" />
          </div>
          <div className="form-group">
            <label>Class</label>
            <input type="text" placeholder="enter class" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="enter email" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" placeholder="enter phone Number"/>
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea rows="2" value="123 Student Lane, Education City" />
          </div>

          <div className="buttons">
            <button className="blue-btn">Update Profile</button>
            <button className="white-btn">Change Password</button>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default Profile;
