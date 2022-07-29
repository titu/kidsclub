import { useCallback, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import MemberTable from "./components/MemberTable";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import MemberChart from "./components/MemberChart";
const data = [
  {
    member: "Steve",
    totalPlayed: 16,
    data: [
      ["Chess", 5],
      ["Tennis", 5],
      ["Soccer", 6],
    ],
  },
  {
    member: "Bob",
    totalPlayed: 4,
    data: [
      ["Chess", 1],
      ["Tennis", 2],
      ["Soccer", 1],
    ],
  },
  {
    member: "Jack",
    totalPlayed: 5,
    data: [
      ["Chess", 3],
      ["Tennis", 1],
      ["Soccer", 1],
    ],
  },
];

function App() {
  const [selectedMember, setSelectedMember] = useState(null);

  const onSelectionChange = useCallback((newSelection) => {
    setSelectedMember(() => {
      const foundMemberData = data.find(
        (memberData) => memberData.member === newSelection
      );
      return foundMemberData;
    });
  }, []);

  return (
    <>
      <Navbar className="py-5" bg="light">
        <Container>
          <Header selectedMember={selectedMember?.member} />
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <MemberTable data={data} onSelectionChange={onSelectionChange} />
          </Col>
          <Col>
            {selectedMember && <MemberChart data={selectedMember?.data} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
