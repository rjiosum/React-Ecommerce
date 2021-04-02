import React from 'react';
import PageBanner from "../components/core/PageBanner";
import BreadCrumb from "../components/core/BreadCrumb";

const About = () => {
    const text = 'About Us';
    return (
        <>
            <PageBanner heading={text} />
            <section className="container mx-auto px-4 mt-12 mb-20">

                <BreadCrumb heading={text} links={<li className="inline-flex items-center uppercase"><span className="font-semibold mx-2">{text}</span></li>}/>

            </section>
        </>
    )
};

export default About;
