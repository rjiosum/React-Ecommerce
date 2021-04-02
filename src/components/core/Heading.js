import React from 'react';

const Heading = ({text, classes}) => {
    return (
        <h1 className={`text-center font-bold text-3xl m-0 uppercase transform hover:-rotate-6 ${classes}`}>{text}</h1>
    )
};

export default Heading;