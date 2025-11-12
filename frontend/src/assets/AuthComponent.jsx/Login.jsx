// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Login.css'

// const Login = () => {
//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <div className="login-header">
//           <div className="login-icon">🎓</div>
//           <h2>EduManage Pro</h2>
//           <p>Log in to your account</p>
//         </div>

//         <form>
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             required
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             required
//           />
//           {/* <Link></> */}

//           <button type="submit" className="btn-login">Log In</button>
//           <center className='log-p'><Link to='/sign'   >Don't have an account ? Create Account</Link></center>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;







// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const [loginData, setLoginData] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     setLoginData({ ...loginData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const roles = ['student', 'faculty', 'manager', 'owner'];
//     let foundUser = null;

//     for (let role of roles) {
//       const users = JSON.parse(localStorage.getItem(role)) || [];
//       const match = users.find(
//         (user) => user.email === loginData.email && user.password === loginData.password
//       );
//       if (match) {
//         foundUser = { ...match, role };
//         break;
//       }
//     }

//     if (foundUser) {
//       // Store user in session or localStorage if needed
//       localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
//       alert(`Welcome, ${foundUser.name}`);
//       navigate('/dashboard'); // 👈 Navigate to dashboard
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <div className="login-header">
//           <div className="login-icon">🎓</div>
//           <h2>EduManage Pro</h2>
//           <p>Log in to your account</p>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={loginData.email}
//             onChange={handleChange}
//             required
//           />

//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={loginData.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit" className="btn-login">Log In</button>
//           <center className='log-p'>
//             <Link to='/sign'>Don't have an account? Create Account</Link>
//           </center>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

















import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const roles = ['student', 'faculty', 'manager', 'owner'];
    let foundUser = null;

    for (let role of roles) {
      const users = JSON.parse(localStorage.getItem(role)) || [];
      const match = users.find(
        (user) => user.email === loginData.email && user.password === loginData.password
      );
      if (match) {
        foundUser = { ...match, role };
        break;
      }
    }

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      alert(`Welcome, ${foundUser.name}`);

      // ✅ Redirect based on role
      switch (foundUser.role) {
        case 'student':
          navigate('/student-dashboard');
          break;
        case 'faculty':
          navigate('/faculty-dashboard');
          break;
        case 'manager':
          navigate('/manager-dashboard');
          break;
        case 'owner':
          navigate('/owner-dashboard');
          break;
        default:
          navigate('/dashboard');
      }

    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <div className="login-icon">🎓</div>
          <h2>EduManage Pro</h2>
          <p>Log in to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-login">Log In</button>
          <center className='log-p'>
            <Link to='/sign'>Don't have an account? Create Account</Link>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;
