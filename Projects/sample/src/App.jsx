import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./component/Login"; // Import your welcome screen here


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Home page */}
      </Routes>
    </Router>
  );
}

export default App;
