import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import SchoolBox from './SchoolBox';
import { Link } from 'react-router-dom';


const schools = [
  { id: 1, name: 'Cal State Fullerton' },
  { id: 2, name: 'Cal Poly Pomona' },
  { id: 3, name: 'Cal State Long Beach'},
  { id: 4, name: 'Cal State San Diego'},
  { id: 5, name: 'Cal State Los Angeles'},
  { id: 6, name: 'Cal State Channel Islands'},
  { id: 7, name: 'Cal State Monterey Bay'},
  { id: 8, name: 'Cal Poly Humboldt'},
  { id: 9, name: 'Cal State Chico'},
  { id: 10, name: 'Cal State Sacramento'},
  { id: 11, name: 'Cal State Bakersfield'},
];

const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="flex flex-wrap justify-evenly mx-20 p-0">
        {schools.map((school) => (
          <Link key={school.id} to={`/school/${school.id}`}> {/* Use Link component */}
            <SchoolBox name={school.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
