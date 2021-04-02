import  {useEffect} from 'react';
import { useLocation } from "react-router-dom";
import {useGlobalMobileNavBarContext} from "../../context/MobileNavBarContext";

const ScrollToTop = () => {
    const {isMobileNavBarOpen ,closeMobileNavBar} = useGlobalMobileNavBarContext();
    const { pathname } = useLocation();

    useEffect(() => {
        if(isMobileNavBarOpen){
            closeMobileNavBar();
        }
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [pathname]);

    return null;
};

export default ScrollToTop;