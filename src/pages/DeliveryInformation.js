import React, {useState} from 'react';
import PageBanner from "../components/core/PageBanner";
import BreadCrumb from "../components/core/BreadCrumb";
import Heading from "../components/core/Heading";
import UnderLine from "../components/core/UnderLine";
import {infos} from "../data/DeliveryInformationData";
import {FaMinus, FaPlus} from "react-icons/fa";


const DeliveryInformation = () => {
    const [diActive, setDiActive] = useState(0);

    const eventHandler = (e, index) => {
        e.preventDefault();
        setDiActive(index);
    }

    const text = 'Delivery Information';
    return (
        <>
            <PageBanner heading={text} />
            <section className="container mx-auto px-4 mt-12 mb-20">
                <BreadCrumb heading={text} links={<li className="inline-flex items-center uppercase"><span className="font-semibold mx-2">{text}</span></li>}/>
                <Heading text={text}/>
                <UnderLine />

                <div className="my-8">
                    {
                        infos.map((info, index)=>{
                            const {uuid, topic, content} = info;
                            return (
                                <div key={uuid} className="mb-6">
                                    <button className="mb-2 block w-full border-b-2 border-gray-800 focus:outline-none flex flex-nowrap justify-between items-center" onClick={(e)=>eventHandler(e, index)}>
                                        <span className="p-4 mr-4 text-left cursor-pointer flex-grow font-bold tracking-wide">{topic}</span>
                                        <span className="p-4">{diActive===index ? <FaMinus/> : <FaPlus/>}</span>
                                    </button>
                                    <div className={diActive===index ? 'slide-down' : 'slide-up'}>
                                        <div className="p-4 pb-6 bg-gray-300">{content}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </section>
        </>
    )
};

export default DeliveryInformation;