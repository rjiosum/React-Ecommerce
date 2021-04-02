import React from 'react';
import PageBanner from "../components/core/PageBanner";
import BreadCrumb from "../components/core/BreadCrumb";
import Heading from "../components/core/Heading";
import UnderLine from "../components/core/UnderLine";
import {policies} from "../data/PrivacyData";

const PrivacyPolicy = () => {
    const text = 'Privacy Policy';
    return (
        <>
            <PageBanner heading={text} />
            <section className="container mx-auto px-4 mt-12 mb-20">
                <BreadCrumb heading={text} links={<li className="inline-flex items-center uppercase"><span className="font-semibold mx-2">{text}</span></li>}/>
                <Heading text={text}/>
                <UnderLine />

                <div className="p-8 bg-white my-8">
                    {
                        policies.map((policy, index)=>{
                            return (
                                <div key={`policy-${index}`} className="mb-12">
                                    <h1 className="font-bold mb-4">{policy.topic}</h1>
                                    <div>{policy.content}</div>
                                </div>
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
};

export default PrivacyPolicy;
