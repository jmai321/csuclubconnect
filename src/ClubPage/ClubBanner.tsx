import React from 'react';

const ClubBanner: React.FC<{ name: string }> = ({ name }) => {
    return ( 
        <div className="h-96 flex flex-col items-center justify-center bg-custom-color text-custom-text-color text-4xl font-bold text-center">
            {name}
        </div>
     );
}
 
export default ClubBanner;