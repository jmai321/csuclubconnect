import React from 'react';

const TopNav: React.FC = () => {
    return ( 
        <div className="flex p-0">
            <button className="border-l-2 border-l-solid p-3 border-l-custom-color3 hover:bg-custom-color2">Home</button>
            <button className="border-l-2 border-l-solid p-3 border-l-custom-color3 hover:bg-custom-color2">Dashboard</button>
            <button className="border-l-2 border-l-solid p-3 border-l-custom-color3 hover:bg-custom-color2">Notif</button>
            <button className="border-l-2 border-l-solid p-3 border-l-custom-color3 hover:bg-custom-color2">User</button>
        </div>

     );
}
 
export default TopNav;