import React from 'react';
import { Link } from 'react-router-dom';

const TopNav: React.FC = () => {
    return ( 
        <div className="flex p-0 mr-4">
            <Link to ="/" className="border-l-2 border-l-solid p-3 border-l-custom-color3 hover:bg-custom-color2">Home</Link>
            <button className="border-l-2 border-l-solid p-3 border-l-custom-color3 hover:bg-custom-color2">Dashboard</button>
            <button className="border-l-2 border-l-solid p-3 border-l-custom-color3 hover:bg-custom-color2">Notif</button>
            <button className="border-l-2 border-l-solid p-3 border-l-custom-color3 hover:bg-custom-color2">User</button>
        </div>

     );
}
 
export default TopNav;