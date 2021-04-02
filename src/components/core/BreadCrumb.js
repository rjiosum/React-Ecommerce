import React from 'react';
import {FaAngleRight} from "react-icons/fa";

const BreadCrumb = ({heading, links}) => {
    return (
        <div className="py-4 px-6 mt-4 mb-12 grid grid-cols-1 rounded-md place-items-center bg-white sm:grid-cols-2 sm:place-items-stretch sm:pb-0">
            <div className="text-xl uppercase mx-2 mb-4">{heading}</div>
            <div className="place-self-auto mb-0 sm:place-self-end sm:mb-6">
                <ul>
                    <li className="inline-flex items-center text-gray-500 uppercase"><a className="mx-2" href="/">Home</a><FaAngleRight /></li>
                    {links}
                </ul>
            </div>
        </div>
    )
};

export default BreadCrumb;