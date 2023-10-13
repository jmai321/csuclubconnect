import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SchoolBanner from './SchoolBanner';
import SchoolTopNav from './SchoolTopNav';
import ClubSearch from './ClubSearch';
import ClubList from './ClubList';
import axios from 'axios';

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
  const [school, setSchool] = useState<School | null>(null);
  const [clubs, setClubs] = useState<Club[]>([]);

  useEffect(() => {
    axios.get<School[]>(`http://localhost:8000/schools`)
      .then(response => {
        const foundSchool = response.data.find(school => school.slug === schoolSlug);
        if (foundSchool) {
          setSchool(foundSchool);
          setClubs(foundSchool.clubs);
        } else {
          console.error(`'${schoolSlug}' not found.`);
        }
      })
      .catch(error => {
        console.error('Error fetching school data:', error);
      });
  }, [schoolSlug]);

  if (!school) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SchoolTopNav />
      <SchoolBanner schoolName={school.name} />
      <ClubSearch />
      <ClubList clubs={school.clubs} schoolSlug={school.slug}/>
    </div>
  );
};

export default SchoolPage;
