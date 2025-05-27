import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import WelcomeScreen from "./pages/WelcomeScreen"; // Import your welcome screen here


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} /> {/* Home page */}
      </Routes>
    </Router>
  );
}

export default App;
