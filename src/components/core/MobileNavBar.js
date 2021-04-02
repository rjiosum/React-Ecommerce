import React, {useState} from 'react';
import {FaTimes} from 'react-icons/fa';
import {NavData} from '../../data/HeaderNav';
import MobileSubNavBar from "./MobileSubNavBar";
import {useGlobalMobileNavBarContext} from "../../context/MobileNavBarContext";

const MobileNavBar = () => {
    const {isMobileNavBarOpen ,closeMobileNavBar} = useGlobalMobileNavBarContext();

    return (
         <>
             {isMobileNavBarOpen && <button className="fixed inset-0 w-full h-full bg-gray-100 bg-opacity-25 z-30 focus:outline-none" onClick={closeMobileNavBar}>{''}</button>}
            <aside className={`p-4 fixed top-0 left-0 w-64 h-full bg-black bg-opacity-95 z-50 overflow-auto overflow-x-hidden transition-all duration-300 ease-in transform  ${isMobileNavBarOpen ? 'translate-x-0' : '-translate-x-64'}`}>
                <div className="my-4 text-right"><button className="text-4xl text-gray-300 hover:text-gray-50 focus:outline-none" onClick={closeMobileNavBar}><FaTimes /></button></div>
                <ul>
                {
                    NavData.map((nav) => {
                        const {id, children} = nav;
                        const hasChildren = children.length > 0;

                        return (
                            <MobileSubNavBar key={id} hasChildren={hasChildren} {...nav} />
                        )
                    })
                }
                </ul>
            </aside>
        </>
    )
};

export default MobileNavBar;