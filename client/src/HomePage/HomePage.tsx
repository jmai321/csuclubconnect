import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import SchoolBox from './SchoolBox';
import axios from 'axios';
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

const HomePage: React.FC = () => {
  const [schools, setSchools] = useState<School[]>([]);

  useEffect(() => {
    axios.get<School[]>('http://localhost:8000/schools')
      .then(response => {
        setSchools(response.data);
      })
      .catch(error => {
        console.error('Error fetching schools:', error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <Header />
      <div className="flex flex-wrap justify-evenly mx-20 p-0">
        {schools.map((school) => (
          <Link key={school.id} to={`/${school.slug}`}>
            <SchoolBox name={school.name}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
