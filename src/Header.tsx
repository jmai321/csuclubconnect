import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="text-custom-text-color py-12">
            <div className="mx-2 md:mx-10 lg:mx-20 h-auto bg-custom-color2 p-8 md:p-12 lg:p-16 flex flex-col items-start rounded-lg mt-20">
                <h1 className="text-3xl font-bold mb-2">CSU Club Connect</h1>
                <p className="text-2xl font-bold mb-6 md:mb-8 lg:mb-10">Search, communicate, connect</p>
                <div className="flex flex-col md:flex-row items-center">
                    <button className="text-2xl font-bold bg-white hover:bg-gray-200 px-6 py-4 rounded-lg mb-4 md:mb-0 md:mr-4">join / search club</button>
                    <button className="text-2xl font-bold bg-teal-500 hover:bg-teal-600 px-6 py-4 rounded-lg">add / create club</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
