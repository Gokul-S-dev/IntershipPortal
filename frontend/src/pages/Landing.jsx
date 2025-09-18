import { useNavigate } from "react-router-dom";
import { Container, Button, Row, Col, Card } from "react-bootstrap";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <div className="py-5 text-center">
        <Container>
          <h1 className="display-5 fw-semibold mb-2">Internship & Placement Portal</h1>
          <p className="text-muted mb-4">Connect students 🎓, mentors 🧑‍🏫, industries 🏭, and admins 🛡️ in a unified platform.</p>
          <div className="d-flex justify-content-center gap-2">
            <Button variant="primary" onClick={() => navigate("/student/login")}>Student Login 🎓</Button>
            <Button variant="success" onClick={() => navigate("/student/signup")}>Student Signup ✍️</Button>
          </div>
        </Container>
      </div>
      <Container className="pb-5">
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm card-hover text-center">
              <Card.Body>
                <div className="role-circle d-flex align-items-center justify-content-center" style={{ backgroundImage: 'none', backgroundColor: '#e9f5ff' }}>
                  <span style={{ fontSize: 48 }}>🧑‍🏫</span>
                </div>
                <Card.Title className="mb-2">Mentor 🧑‍🏫</Card.Title>
                <Card.Text className="text-muted">Guide students and review submissions.</Card.Text>
                <Button variant="info" onClick={() => navigate("/mentor/login")}>Mentor Login</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm card-hover text-center">
              <Card.Body>
                <div className="role-circle d-flex align-items-center justify-content-center" style={{ backgroundImage: 'none', backgroundColor: '#fff8e1' }}>
                  <span style={{ fontSize: 48 }}>🏭</span>
                </div>
                <Card.Title className="mb-2">Industry 🏭</Card.Title>
                <Card.Text className="text-muted">Post internships and evaluate candidates.</Card.Text>
                <Button variant="warning" onClick={() => navigate("/industry/login")}>Industry Login</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm card-hover text-center">
              <Card.Body>
                <div className="role-circle d-flex align-items-center justify-content-center" style={{ backgroundImage: 'none', backgroundColor: '#eef2ff' }}>
                  <span style={{ fontSize: 48 }}>🛡️</span>
                </div>
                <Card.Title className="mb-2">Admin 🛡️</Card.Title>
                <Card.Text className="text-muted">Manage roles, data, and configurations.</Card.Text>
                <Button variant="dark" onClick={() => navigate("/admin/login")}>Admin Login</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
