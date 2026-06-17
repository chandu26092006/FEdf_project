function UpcomingMatches() {
  const matches = [
    {
      team1: "RCB",
      team2: "CSK",
      date: "15 June 2026"
    },
    {
      team1: "MI",
      team2: "GT",
      date: "17 June 2026"
    }
  ];

  return (
    <div className="table-container">
      <h2>Upcoming Matches</h2>

      <table>
        <thead>
          <tr>
            <th>Match</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {matches.map((match, index) => (
            <tr key={index}>
              <td>{match.team1} vs {match.team2}</td>
              <td>{match.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UpcomingMatches;