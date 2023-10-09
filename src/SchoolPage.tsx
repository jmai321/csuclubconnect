import React from 'react';
import SchoolBanner from './SchoolBanner';
import SchoolTopNav from './SchoolTopNav';
import ClubSearch from './ClubSearch';
import ClubList from './ClubList';

const SchoolPage: React.FC = () => {
  const clubsData = [
    { id: 1, name: 'Club 1' },
    { id: 2, name: 'Club 2' },

  ];

  return (
    <div>
      <SchoolTopNav />
      <SchoolBanner schoolName='{name}' />
      <ClubSearch />
      <ClubList clubs={clubsData} />
    </div>
  );
};

export default SchoolPage;
