import React from 'react';
import ClubBox from './ClubBox';

const ClubList: React.FC<{ clubs: { id: number; name: string }[] }> = ({ clubs }) => {
    return (
        <div className="flex flex-wrap justify-evenly mx-20 p-0">
            {clubs.map((club) => (
                <ClubBox key={club.id} name={club.name} />
            ))}
        </div>
    );
}

export default ClubList;
