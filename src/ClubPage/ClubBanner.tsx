import React from 'react';
import EditButton from './EditButton';

const ClubBanner: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="relative flex flex-col justify-center items-center h-96 bg-custom-color text-custom-text-color text-4xl font-bold text-center">
      {name}
      <div className="absolute bottom-0 right-0">
        <EditButton />
      </div>
    </div>
  );
};

export default ClubBanner;
