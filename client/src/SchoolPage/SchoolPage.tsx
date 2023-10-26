import React from 'react';
import { useParams } from 'react-router-dom';
import { useDataFetch } from '../useDataFetch';
import SchoolBanner from './SchoolBanner';
import SchoolTopNav from './SchoolTopNav';
import ClubSearch from './ClubSearch';
import ClubBox from './ClubBox';
import { Link } from 'react-router-dom';

interface Club {
  id: string;
  name: string;
  slug: string;
  description: string;
}

interface School {
  id: string;
  name: string;
  slug: string;
  clubs: Club[];
}

const SchoolPage: React.FC = () => {
  const { schoolSlug } = useParams<{ schoolSlug: string }>();
  const apiUrl = `http://localhost:8000/schools`;
  const { data: schools, isLoading: schoolsLoading, error: schoolsError } = useDataFetch(apiUrl);

  if (schoolsLoading) {
    return <div>Loading...</div>;
  }

  if (schoolsError) {
    return <div>Error: {schoolsError}</div>;
  }

  const school = schools.find((school: School) => school.slug === schoolSlug);

  return (
    <div>
      <SchoolTopNav />
      <SchoolBanner schoolName={school.name} />
      <ClubSearch />
      <div className="flex flex-wrap justify-evenly mx-20 p-0">
        {school.clubs.map((club: Club) => (
          <Link key={club.id} to={`/${school.slug}/${club.slug}`}>
            <ClubBox key={club.id} name={club.name} schoolSlug={school.slug} clubSlug={club.slug}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SchoolPage;
