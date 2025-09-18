import { Container, Card } from "react-bootstrap";

export default function Dashboard() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <Card className="shadow-sm w-100" style={{ maxWidth: 720 }}>
        <Card.Body className="text-center py-5">
          <h1 className="mb-3">Dashboard Placeholder</h1>
          <p className="text-muted">Role-based dashboards will be implemented in Phase 2.</p>
        </Card.Body>
      </Card>
    </Container>
  );
}
