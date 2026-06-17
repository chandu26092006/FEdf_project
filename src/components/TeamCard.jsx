import { useState, useEffect } from "react";

function TeamCard({ team }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(team.name);

    if (stored === "true") {
      setFav(true);
    }
  }, [team.name]);

  const handleFavorite = () => {
    localStorage.setItem(team.name, !fav);
    setFav(!fav);
  };

  return (
    <div className="team-card">
      <img src={team.logo} alt={team.name} width="120" />

      <h3>{team.name}</h3>

      <button onClick={handleFavorite}>
        {fav ? "★ Favorite" : "☆ Add Favorite"}
      </button>
    </div>
  );
}

export default TeamCard;