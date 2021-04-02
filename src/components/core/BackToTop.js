import React, {useEffect, useState} from 'react';
import {FaAngleUp} from 'react-icons/fa'
const BackToTop = () => {
    const [showScroll, setShowScroll] = useState(false);
    const [pageYOffset, setPageYOffset] = useState(0);

    useEffect(() => {
        const checkBackToTop = () => {
            setPageYOffset(window.pageYOffset);
            if(pageYOffset > 400){
                setShowScroll(true);
            } else if(pageYOffset < 400){
                setShowScroll(false);
            }
        }

        window.addEventListener('scroll', checkBackToTop)

        return () => {
            window.removeEventListener('scroll', checkBackToTop)
        }

    }, [pageYOffset]);

    const backToTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <button className={`${showScroll ? 'block' : 'hidden'} p-2 fixed bottom-4 right-4 bg-red-600 text-white text-3xl shadow-md focus:outline-none focus:ring-1 focus:ring-red-600 z-50`} onClick={backToTop}><FaAngleUp/></button>
    )
};

export default BackToTop;