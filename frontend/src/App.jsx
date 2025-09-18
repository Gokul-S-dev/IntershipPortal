import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Landing from "./pages/Landing";
import StudentLogin from "./pages/StudentLogin";
import StudentSignup from "./pages/StudentSignup";
import MentorLogin from "./pages/MentorLogin";
import IndustryLogin from "./pages/IndustryLogin";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">Internship & Placement Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home 🏠</Nav.Link>
              <Nav.Link as={Link} to="/student/login">Student 🎓</Nav.Link>
              <Nav.Link as={Link} to="/mentor/login">Mentor 🧑‍🏫</Nav.Link>
              <Nav.Link as={Link} to="/industry/login">Industry 🏭</Nav.Link>
              <Nav.Link as={Link} to="/admin/login">Admin 🛡️</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/signup" element={<StudentSignup />} />
          <Route path="/mentor/login" element={<MentorLogin />} />
          <Route path="/industry/login" element={<IndustryLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
