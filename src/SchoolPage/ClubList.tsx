import React from 'react';
import ClubBox from './ClubList/ClubBox';

interface ClubProps {
  id: string;
  name: string;
  slug: string;
}


const ClubList: React.FC<{ clubs: ClubProps[], schoolSlug: string}> = ({ clubs, schoolSlug}) => {
  return (
    <div className="flex flex-wrap justify-evenly mx-20 p-0">
      {clubs.map((club) => (
        <ClubBox key={club.id} name={club.name} schoolSlug={schoolSlug} clubSlug={club.slug}/>
      ))}
    </div>
  );
}

export default ClubList;
