import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CapsTable from "./pages/CapsTable";
import PlayedMatches from "./pages/PlayedMatches";
import Players from "./pages/Players";
import PointsTable from "./pages/PointsTable";
import Teams from "./pages/Teams";
import UpcomingMatches from "./pages/UpcomingMatches";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caps-table" element={<CapsTable />} />
        <Route path="/played-matches" element={<PlayedMatches />} />
        <Route path="/players" element={<Players />} />
        <Route path="/points-table" element={<PointsTable />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/upcoming-matches" element={<UpcomingMatches />} />
      </Routes>
    </Router>
  );
}

export default App;