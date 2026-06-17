function Players() {
  const players = [
    { name: "Virat Kohli", team: "RCB", runs: 741 },
    { name: "Rajat Patidar", team: "RCB", runs: 395 },
    { name: "Rohit Sharma", team: "MI", runs: 417 },
    { name: "Suryakumar Yadav", team: "MI", runs: 605 },
    { name: "MS Dhoni", team: "CSK", runs: 161 },
    { name: "Shubman Gill", team: "GT", runs: 527 }
  ];

  return (
    <div className="table-container">
      <h2>IPL Players Statistics</h2>

      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Team</th>
            <th>Runs</th>
          </tr>
        </thead>

        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.team}</td>
              <td>{player.runs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Players;
