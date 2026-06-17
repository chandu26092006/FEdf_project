import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import TeamCard from "../components/TeamCard";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
   const data = [
  {
    name: "Chennai Super Kings",
    logo: "https://wallpapercave.com/wp/wp4274375.jpg"
  },
  {
    name: "Mumbai Indians",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg"
  },
  {
    name: "Royal Challengers Bengaluru",
    logo: "https://www.jootoor.com/wp-content/uploads/2024/03/rcb-2024-935x693.jpg"
  },
  {
    name: "Sunrisers Hyderabad",
    logo: "https://media.insider.in/image/upload/c_crop,g_custom/v1740645021/lai2k3i1xg6mmnubxxgm.png"
  },
  {
    name: "Kolkata Knight Riders",
    logo: "https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg"
  },
  {
    name: "Delhi Capitals",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg"
  },
  {
    name: "Punjab Kings",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg"
  },
  {
    name: "Rajasthan Royals",
    logo: "https://blogger.googleusercontent.com/img/a/AVvXsEifYi1DyyqkZ8mTgEfUiGqoeOJU_O8ziKenk7E7XKlOW_0S407qW4YNj8pySsqCiHumFsSRSnPqHSMhsaF-3KEkqe-xVVInKKMoBe5cjunQYV4JppRw0HkeP7q9mZwZA3OHMdSZaqpv7UvGH76pjsabXm4Y9VyxlbeoKNsRs9FaNJb3NYwTHIjIEtXH=w400-h300-rw"
  },
  {
    name: "Lucknow Super Giants",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkjkaUldPUAhzfPLqwbL3oh0XWB3XsDq6SC68siKTp_rgSkyD2NwlBnJr7nJFvH-KZqiWamVHf7F7Ks28PK4H6tJF9ppejEE_iSGRcmf9Ph8wvsGDeccC1AyTXHVd8mSmO1Pmxfy1OTkoEt46YfaRXwWoF3xU_7_T41cLGHnzR4fkrZPubN6CEH176qgo/s1600-rw/LSG-launches-New-Team-Logo.webp"
  },
  {
    name: "Gujarat Titans",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg"
  }
];
    setTeams(data);
  }, []);
  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>IPL Teams</h2>

      <SearchBar setSearch={setSearch} />

      {filteredTeams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </div>
  );
}

export default Teams;