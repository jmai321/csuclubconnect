import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <div className="relative rounded-full bg-white border border-gray-300 p-2 flex items-center">
            <input
                type="text"
                placeholder="Start your search"
                className="w-72 outline-none px-2 py-1 text-sm text-center"
            />
            <span className="text-gray-400 absolute right-4"></span>
        </div>
    );
}

export default SearchBar;
