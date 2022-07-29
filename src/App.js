import { useCallback, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import MemberTable from "./components/MemberTable";
import { Navbar, Container, Row, Col } from "react-bootstrap";
/* import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; */

function App() {
  const data = [
    {
      member: "Steve",
      played: 16,
    },
    {
      member: "Bob",
      played: 4,
    },
    {
      member: "Jack",
      played: 5,
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const onSelectionChange = useCallback((newSelection) => {
    setSelectedMember(newSelection);
  }, []);

  return (
    <>
      <Navbar className="py-5" bg="light">
        <Container>
          <Header selectedMember={selectedMember} />
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <MemberTable data={data} onSelectionChange={onSelectionChange} />
          </Col>
          <Col>Chart Container</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
