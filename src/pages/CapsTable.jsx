function CapsTable() {
  const caps = [
    { type: "Orange Cap", player: "Virat Kohli", team: "RCB", value: 741 },
    { type: "Purple Cap", player: "Jasprit Bumrah", team: "MI", value: 22 }
  ];

  return (
    <div className="table-container">
      <h2>Orange & Purple Cap Holders</h2>

      <table>
        <thead>
          <tr>
            <th>Cap Type</th>
            <th>Player</th>
            <th>Team</th>
            <th>Runs/Wickets</th>
          </tr>
        </thead>

        <tbody>
          {caps.map((cap, index) => (
            <tr key={index}>
              <td>{cap.type}</td>
              <td>{cap.player}</td>
              <td>{cap.team}</td>
              <td>{cap.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CapsTable;