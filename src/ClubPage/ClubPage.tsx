import React, { useState } from 'react';
import ClubBanner from './ClubBanner';
import SchoolTopNav from '../SchoolPage/SchoolTopNav';
import ClubTab from './Tab/ClubTab';
import Home from './Tab/Home';
import Announcements from './Tab/Announcements';
import Users from './Tab/Users';
import ContactInfo from './Tab/ContactInfo';

const ClubPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('home');

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
            return null;
        }
    };

    return ( 
        <div>
            <SchoolTopNav/>
            <ClubBanner/>
            <div className="p-4">
                <div className="flex justify-start space-x-6">
                    <ClubTab label="Home" onClick={() => setActiveTab('home')} isActive={activeTab === 'home'} />
                    <ClubTab label="Announcements" onClick={() => setActiveTab('announcements')} isActive={activeTab === 'announcements'} />
                    <ClubTab label="Users" onClick={() => setActiveTab('users')} isActive={activeTab === 'users'} />
                    <ClubTab label="Contact Info" onClick={() => setActiveTab('contactinfo')} isActive={activeTab === 'contactinfo'} />
                </div>
                <div className="mt-4">
                    {renderTabContent()}
                </div>
            </div>
        </div>
     );
}
 
export default ClubPage;