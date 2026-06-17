import { createContext, useState } from "react";

export const IPLContext = createContext();

function IPLProvider({ children }) {
  const [favTeam, setFavTeam] = useState("");

  return (
    <IPLContext.Provider value={{ favTeam, setFavTeam }}>
      {children}
    </IPLContext.Provider>
  );
}

export default IPLProvider;