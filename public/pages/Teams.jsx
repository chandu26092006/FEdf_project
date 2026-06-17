import { useState } from "react";
import SearchBar from "../../src/components/SearchBar";
import TeamCard from "../../src/components/TeamCard";

function Teams() {
  const [search, setSearch] = useState("");

  const teams = [
    "Chennai Super Kings",
    "Mumbai Indians",
    "Royal Challengers Bengaluru",
    "Sunrisers Hyderabad",
    "Kolkata Knight Riders",
    "Delhi Capitals",
    "Rajasthan Royals",
    "Punjab Kings",
    "Lucknow Super Giants",
    "Gujarat Titans"
  ];

  const filteredTeams = teams.filter((team) =>
    team.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="teams">
      <h2>IPL Teams</h2>

      <SearchBar setSearch={setSearch} />

      {filteredTeams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </div>
  );
}

export default Teams;