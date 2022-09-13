const apiServer = "http://localhost:3001";
const memberEndpoint = "members";
const gamesEndpoint = "games";
const memberGamesEndpoint = "member_games";

const fetchData = async (endPoint) => {
  const response = await fetch(`${apiServer}/${endPoint}`);
  const data = await response.json();

  return data;
};

const getMembers = async () => {
  return fetchData(memberEndpoint);
};

const getGames = async () => {
  return fetchData(gamesEndpoint);
};

const getMemberGames = async () => {
  return fetchData(memberGamesEndpoint);
};

const getTableData = (members, memberGames) => {
  const data = [];

  members.forEach((member) => {
    const gamesList = memberGames.filter(
      (memberGame) => memberGame.member === member.name
    );
    data.push({
      id: member.id,
      member: member.name,
      totalPlayed: gamesList.length,
    });
  });

  return data;
};

const getMemberGameSummary = (member, games, memberGames) => {
  const membersGameList = memberGames.filter(
    (mGame) => mGame.member === member
  );
  const data = games.map((game) => {
    const gameData = membersGameList.filter(
      (mGame) => mGame.game === game.name
    );
    return [game.name, gameData.length];
  });

  return data;
};

export {
  getMembers,
  getGames,
  getMemberGames,
  getTableData,
  getMemberGameSummary,
};
