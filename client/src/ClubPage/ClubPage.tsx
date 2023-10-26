import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClubBanner from './ClubBanner';
import SchoolTopNav from '../SchoolPage/SchoolTopNav';
import ClubTab from './Tab/ClubTab';
import Home from './Tab/Home';
import Announcements from './Tab/Announcements';
import Users from './Tab/Users';
import ContactInfo from './Tab/ContactInfo';
import { useDataFetch } from '../useDataFetch';

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

const ClubPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('home');
    const { schoolSlug } = useParams<{ schoolSlug: string }>();
    const { clubSlug } = useParams<{ clubSlug: string }>();
    const apiUrl = `http://localhost:8000/schools/`;
    const { data: schools, isLoading: schoolsLoading, error: schoolsError } = useDataFetch(apiUrl);

    if (schoolsLoading) {
      return <div>Loading...</div>;
    }

    if (schoolsError) {
      return <div>Error: {schoolsError}</div>;
    }

    const school = schools.find((school: School) => school.slug === schoolSlug);
    const club = school.clubs.find((club: Club) => club.slug === clubSlug)

      const renderTabContent = () => {
          switch (activeTab) {
            case 'home':
              return <Home />;
            case 'announcements':
              return <Announcements />;
            case 'users':
              return <Users />;
            case 'contactinfo':
              return <ContactInfo />;
            default:
              return <Home />;
          }
      };

    return ( 
        <div>
            <SchoolTopNav/>
            <ClubBanner name={club.name}/>
            <div>
                <div className="flex justify-center space-x-6 border-b-2 border-t-2 border-custom-color3">
                    <ClubTab label="Home" onClick={() => setActiveTab('home')} isActive={activeTab === 'home'} />
                    <ClubTab label="Announcements" onClick={() => setActiveTab('announcements')} isActive={activeTab === 'announcements'} />
                    <ClubTab label="Users" onClick={() => setActiveTab('users')} isActive={activeTab === 'users'} />
                    <ClubTab label="Contact Info" onClick={() => setActiveTab('contactinfo')} isActive={activeTab === 'contactinfo'} />
                </div>
                <div className="mx-8 my-8 border-custom-color3 border-2">
                    {renderTabContent()}
                </div>
            </div>
        </div>
     );
}
 
export default ClubPage;