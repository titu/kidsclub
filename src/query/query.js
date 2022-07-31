const apiServer = "http://localhost:3001";
const memberEndpoint = "members";
const gamesEndpoint = "games";
const memberGamesEndpoint = "member_games";

const getMembers = async () => {
  const membersResponse = await fetch(`${apiServer}/${memberEndpoint}`);
  const members = await membersResponse.json();

  return members;
};

const getGames = async () => {
  const memberGamesResponse = await fetch(`${apiServer}/${gamesEndpoint}`);
  const games = await memberGamesResponse.json();

  return games;
};

const getMemberGames = async () => {
  const memberGamesResponse = await fetch(
    `${apiServer}/${memberGamesEndpoint}`
  );
  const memberGames = await memberGamesResponse.json();

  return memberGames;
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
    const gameData = membersGameList.filter((mGame) => mGame.game === game.name);
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
