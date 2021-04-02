import React, {useEffect, useState} from 'react';
import Heading from "../../components/core/Heading";
import UnderLine from "../../components/core/UnderLine";
import {Link} from "react-router-dom";
import PageBanner from "../../components/core/PageBanner";

const Error404 = () => {
    const [auto, setAuto] = useState(true);
    useEffect(()=>{
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            setAuto(false);
        }else{
            setAuto(true);
        }
    }, [])
    return (
        <>
            <PageBanner heading={"ooooop's"} />
            <div className="container mx-auto px-4">
                <div className="my-40 flex justify-center items-center">
                    { auto && (<div className="relative hidden sm:block w-2/3 overflow-hidden shadow-lg ring-8 ring-gray-600" style={{transform: 'perspective(82rem) rotateY(45deg)'}}>
                        <video autoPlay muted loop>
                            <source src="../resources/videos/error.mp4" type="video/mp4"/>
                            <img className="w-full object-cover shadow-lg" src="../resources/images/404.jpg" alt="404" />
                        </video>
                    </div>)}
                    <div>
                        <Heading text={'404 Error'}/>
                        <UnderLine />
                        <div className="text-center mt-12"><Link className="py-4 inline-block w-auto btn btn-red" to="/">Back To Home</Link></div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Error404;