import React from 'react';

interface ClubTabProps {
    label: string;
    onClick: () => void;
    isActive: boolean;
  }
  
  const ClubTab: React.FC<ClubTabProps> = ({ label, onClick, }) => {
    return (
      <div className={`cursor-pointer p-2 mx-2 border-b-2 border-transparent hover:border-blue-500`} onClick={onClick}>
        {label}
      </div>
    );
  };
  
  export default ClubTab;