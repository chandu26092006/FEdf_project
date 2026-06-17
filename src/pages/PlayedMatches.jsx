function PlayedMatches() {
  const matches = [
    {
      team1: "RCB",
      team2: "MI",
      winner: "RCB",
      score: "RCB 180/5 - MI 175/8"
    },
    {
      team1: "GT",
      team2: "CSK",
      winner: "GT",
      score: "GT 190/4 - CSK 185/7"
    }
  ];

  return (
    <div className="table-container">
      <h2>Played Matches</h2>

      <table>
        <thead>
          <tr>
            <th>Match</th>
            <th>Winner</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              <td>{match.team1} vs {match.team2}</td>
              <td>{match.winner}</td>
              <td>{match.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayedMatches;