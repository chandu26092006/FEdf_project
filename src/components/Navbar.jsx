import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#111" }}>
      <Link to="/">Home</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/players">Players</Link>
      <Link to="/caps-table">Caps</Link>
      <Link to="/points-table">Points Table</Link>
      <Link to="/played-matches">Played Matches</Link>
      <Link to="/upcoming-matches">Upcoming Matches</Link>
    </nav>
  );
}

export default Navbar;