import { useCallback, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import MemberTable from "./components/MemberTable";
import { Navbar, Container, Row, Col, Alert } from "react-bootstrap";
import MemberChart from "./components/MemberChart";
import { useQuery } from "@tanstack/react-query";
import {
  getMembers,
  getGames,
  getMemberGames,
  getTableData,
  getMemberGameSummary,
} from "./query/query";

function App() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // fetch members
  const {
    isLoading: isMembersListLoading,
    isError: isMembersListError,
    data: members,
  } = useQuery(["members"], () => getMembers(), {
    enabled: !selectedMember,
  });
  // fetch games
  const { isError: isGamesListError, data: games } = useQuery(
    ["games"],
    () => getGames(),
    {
      enabled: !selectedMember,
    }
  );
  // fetch member_games
  const {
    isLoading: isMemberGamesLoading,
    isError: isMemberGamesError,
    data: memberGames,
  } = useQuery(["member-games"], () => getMemberGames(), {
    enabled: !!members && !selectedMember,
  });

  useEffect(() => {
    if (members?.length && memberGames?.length) {
      const data = getTableData(members, memberGames);

      setTableData(data);
    }
  }, [members, memberGames]);

  useEffect(() => {
    setIsLoading(isMembersListLoading || isMemberGamesLoading);
  }, [isMemberGamesLoading, isMembersListLoading]);

  const onSelectionChange = useCallback(
    (newSelection) => {
      setSelectedMember(() => {
        const foundMemberData = members.find(
          (data) => data.name === newSelection
        );
        return foundMemberData;
      });
      setChartData(getMemberGameSummary(newSelection, games, memberGames));
    },
    [games, memberGames, members]
  );

  return (
    <>
      <Navbar className="py-5" bg="light">
        <Container>
          <Header selectedMember={selectedMember?.name} isLoading={isLoading} />
        </Container>
      </Navbar>
      <Container>
        {(isMembersListError || isGamesListError || isMemberGamesError) && (
          <Alert key="danger" variant="danger">
            Data fetch failed! Please check your network connection or contact
            system admin.
          </Alert>
        )}
        <Row>
          <Col className="col-12 col-sm-6">
            <MemberTable
              data={tableData}
              onSelectionChange={onSelectionChange}
              isLoading={isLoading}
            />
          </Col>
          <Col className="col-12 col-sm-6">
            <MemberChart data={chartData} isLoading={isLoading} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
