import React from 'react';
import { Link } from 'react-router-dom';

interface ClubBoxProps {
  name: string;
  schoolSlug: string;
  clubSlug: string;
}

const ClubBox: React.FC<ClubBoxProps> = ({ name, schoolSlug, clubSlug }) => {
  return (
    <Link to={`/${schoolSlug}/${clubSlug}`}>
      <button className="bg-gray-200 hover:bg-gray-300 mx-5 my-5 w-60 h-48 flex items-center justify-center rounded-lg">
        <h2 className="text-xl font-bold">{name}</h2>
      </button>
    </Link>
  );
};

export default ClubBox;
