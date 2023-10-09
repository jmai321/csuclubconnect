import React from 'react';
import ClubSearchBar from './ClubSearchBar';
import ClubFilter from './ClubFilter';

const ClubSearch: React.FC = () => {
    return (
        <div className="flex items-center border-t-2 border-b-2 border-gray-300 p-4">
            <div className="flex items-center justify-center flex-1">
                <ClubSearchBar />
            </div>
            {/*need to add filter component, not working at the moment
                <ClubFilter/> */}
        </div>
    );
}

export default ClubSearch;
