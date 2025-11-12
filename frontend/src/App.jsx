import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./assets/AuthComponent.jsx/Login";
// import { Sign } from "./assets/AuthComponent.jsx/Sign";
import Nav from "./assets/Nav";
import Sign from "./assets/AuthComponent.jsx/Sign";
import { StudentDashboard } from "./assets/components/student/StudentDashboard";
import { FacultyDashboard } from "./assets/components/faculty/FacultyDashboard";
// import StudentMain from "./assets/components/StudentMain";
import { Managerdashboard } from "./assets/components/manager/Managerdashboard";
import { AdminDashboard } from "./assets/components/admin/AdminDashboard";
import { Home } from "./assets/components/Home/Home";
import Profile from "./assets/components/student/Profile";
import Overview from "./assets/components/student/Overview";
import Grades from "./assets/components/student/Grades";
import AssignmentDashboard from "./assets/components/student/AssignmentDashboard";
import FeesDashboard from "./assets/components/student/FeesDashboard";
import Syllabus from "./assets/components/student/Syllabus";
import AskQuestion from "./assets/components/student/AskQuestion";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/dashboard" element={<StudentMain/>}/> */}
          <Route path="/sign" element={<Sign />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manager-dashboard" element={<Managerdashboard/>}/>

          <Route path="/student-dashboard" element={<StudentDashboard/>} />
<Route path="/faculty-dashboard" element={<FacultyDashboard />} />
{/* <Route path="/manager-dashboard" element={<Manag />} /> */}
<Route path="/owner-dashboard" element={<AdminDashboard />} />
<Route path="/student-overview" element={<Overview/>}/>
<Route path="/student-profile" element={<Profile/>}/>
<Route path="/student-grades" element={<Grades/>}/>
<Route path="/student-assignments" element={<AssignmentDashboard/>}/>
<Route path="/student-fees" element={<FeesDashboard/>}/>
<Route path="/student-syllabus" element={<Syllabus/>}/>
<Route path="/student-teacher-websocket" element={<AskQuestion/>}/>
        </Routes>



      </BrowserRouter>
    </>
  );
}

export default App;
