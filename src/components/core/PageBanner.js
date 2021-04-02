import React from 'react';

const PageBanner = ({heading}) => {
    return (
        <div className="overflow-hidden move-in-top">
            <div className="page-banner py-20 transition-none transform-none sm:transition-transform duration-300 ease-in-out sm:hover:transform sm:hover:scale-150">
                <h1 className="text-2xl text-white text-center font-bold uppercase font-poppins sm:text-4xl">{heading}</h1>
            </div>

        </div>
    )
};

export default PageBanner;