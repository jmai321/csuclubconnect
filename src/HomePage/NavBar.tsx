import React from 'react';
import TopNav from './NavBar/TopNav';
import HomeSearch from './NavBar/HomeSearch';

const NavBar: React.FC = () => {
    return ( 
            <nav className="bg-custom-color py-0 text-custom-text-color flex justify-between items-center text-2xl
                            border-b-4 border-custom-color3 fixed w-screen">
                <div> [logo] </div>
                <HomeSearch />
                <TopNav/>
            </nav>
     );
}
 
export default NavBar;