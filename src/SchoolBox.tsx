import React from 'react';

interface SchoolBoxProps {
  name: string;
}

const SchoolBox: React.FC<SchoolBoxProps> = ({ name }) => {
  return (
    <button className="bg-gray-200 hover:bg-gray-300 mx-5 my-5 w-60 h-48 flex items-center justify-center rounded-lg">
      <h2 className="text-xl font-bold">{name}</h2>
    </button>
  );
};

export default SchoolBox;
