import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import SchoolPage from './SchoolPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/school/:schoolId" element={<SchoolPage />} />
      </Routes>
    </Router>
  );
}

export default App;
