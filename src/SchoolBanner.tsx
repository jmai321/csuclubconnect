import React from 'react';

const SchoolBanner: React.FC<{ schoolName: string }> = ({ schoolName }) => {
    return (
        <div className="h-80 flex flex-col items-center justify-center bg-custom-color text-custom-text-color text-4xl font-bold text-center">
            {schoolName}
        </div>
    );
}

export default SchoolBanner;
