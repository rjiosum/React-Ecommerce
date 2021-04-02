import React, {useContext, useState} from 'react';

const MobileNavBarContext = React.createContext();

const MobileNavBarProvider = ({children}) => {
    const [isMobileNavBarOpen, setIsMobileNavBarOpen] = useState(false);

    const openMobileNavBar = () => setIsMobileNavBarOpen(true);
    const closeMobileNavBar = () => setIsMobileNavBarOpen(false);

    return (
        <MobileNavBarContext.Provider
            value={{
                isMobileNavBarOpen,
                openMobileNavBar,
                closeMobileNavBar
            }}
        >
            {children}
        </MobileNavBarContext.Provider>
    )
}

export const useGlobalMobileNavBarContext = () => {
    return useContext(MobileNavBarContext);
}

export {MobileNavBarContext, MobileNavBarProvider};