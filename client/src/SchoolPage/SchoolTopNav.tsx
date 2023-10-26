import React from 'react';
import { Link } from 'react-router-dom';

const SchoolTopNav: React.FC = () => {
    return (
        <div className="flex absolute top-0 right-0 p-0 z-10">
            <Link to="/" className="border-l-2 border-b-2 border-solid p-3 border-custom-color3 hover:bg-custom-color2">Home</Link>
            <Link to="/jonathan-mai" className="border-l-2 border-b-2 border--solid p-3 border-custom-color3 hover:bg-custom-color2">Dashboard</Link>
            <button className="border-l-2 border-b-2 border-solid p-3 border-custom-color3 hover:bg-custom-color2">Notif</button>
            <button className="border-l-2 border-b-2 border-solid p-3 border-custom-color3 hover:bg-custom-color2">User</button>
        </div>
    );
}

export default SchoolTopNav;
