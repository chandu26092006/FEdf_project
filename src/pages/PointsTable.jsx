function PointsTable() {
  const points = [
  { team: "RCB", played: 14, won: 11, lost: 3, nrr: "+1.12", points: 22 },
  { team: "GT", played: 14, won: 10, lost: 4, nrr: "+0.85", points: 20 },
  { team: "MI", played: 14, won: 9, lost: 5, nrr: "+0.51", points: 18 },
  { team: "PBKS", played: 14, won: 8, lost: 6, nrr: "+0.30", points: 16 },
  { team: "CSK", played: 14, won: 7, lost: 7, nrr: "+0.10", points: 14 },
  { team: "SRH", played: 14, won: 7, lost: 7, nrr: "+0.05", points: 14 },
  { team: "KKR", played: 14, won: 6, lost: 8, nrr: "-0.10", points: 12 },
  { team: "DC", played: 14, won: 5, lost: 9, nrr: "-0.25", points: 10 },
  { team: "RR", played: 14, won: 4, lost: 10, nrr: "-0.60", points: 8 },
  { team: "LSG", played: 14, won: 3, lost: 11, nrr: "-1.00", points: 6 }
];
  return (
    <div className="points-table">
      <h2>IPL Points Table</h2>

      <table border="1" cellPadding="10">
        <thead>
  <tr>
    <th>Pos</th>
    <th>Team</th>
    <th>Played</th>
    <th>Won</th>
    <th>Lost</th>
    <th>NRR</th>
    <th>Points</th>
  </tr>
</thead>
        <tbody>
  {points.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.team}</td>
      <td>{item.played}</td>
      <td>{item.won}</td>
      <td>{item.lost}</td>
      <td>{item.nrr}</td>
      <td>{item.points}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}

export default PointsTable;