import { useState } from "react";

function SearchBar({ setSearch }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search IPL Team..."
      value={text}
      onChange={handleChange}
    />
  );
}

export default SearchBar;