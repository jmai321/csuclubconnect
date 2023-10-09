import React from 'react';
import { useParams } from 'react-router-dom';
import SchoolBanner from './SchoolBanner';
import SchoolTopNav from './SchoolTopNav';
import ClubSearch from './ClubSearch';
import ClubList from './ClubList';

const clubsData = [
  { id: 1, name: 'Club 1' },
  { id: 2, name: 'Club 2' },

];

const SchoolPage: React.FC = () => {
  const { schoolId } = useParams<{ schoolId: string }>();

  return (
    <div>
      <SchoolTopNav />
      <SchoolBanner schoolName='Placeholder name for database'/>
      <ClubSearch />
      <ClubList clubs={clubsData} />
    </div>
  );
};

export default SchoolPage;
