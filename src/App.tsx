import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import SchoolPage from './SchoolPage/SchoolPage';
import ClubPage from './ClubPage/ClubPage';
import StudentDashboard from './StudentDashboard/StudentDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:schoolSlug/:clubSlug" element={<ClubPage/>}/>
        <Route path="/:schoolSlug" element={<SchoolPage/>} />
        <Route path="/:userSlug" element={<StudentDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
