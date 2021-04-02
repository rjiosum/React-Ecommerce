import React from 'react';
import PageBanner from "../components/core/PageBanner";
import BreadCrumb from "../components/core/BreadCrumb";
import Heading from "../components/core/Heading";
import UnderLine from "../components/core/UnderLine";
import {reviews} from '../data/SiteReview';

const Reviews = () => {
    const text = 'Site Review';
    return (
        <>
            <PageBanner heading={text} />
            <section className="container mx-auto px-4 mt-12 mb-20">
                <BreadCrumb heading={text} links={<li className="inline-flex items-center uppercase"><span className="font-semibold mx-2">{text}</span></li>}/>
                <Heading text={text}/>
                <UnderLine />

                <div className="my-8">
                    {
                        reviews.map((review)=>{
                            const {uuid, title, review: description, rating, created_at, user, avatar} = review;
                            return (
                                <div key={uuid} className="p-4 pb-6 mb-12 bg-gray-200">
                                    <div className="flex flex-nowrap justify-center items-center">
                                        <div><img className="w-16" src={avatar} alt="avatar"/></div>
                                        <div className="ml-4 flex-grow">
                                            <div><span className="font-bold text-red-500 tracking-wide">{user}</span>, <span className="text-gray-400 text-sm">{new Date(created_at).toLocaleDateString("en-GB")}</span></div>
                                            <div className="rating-container my-2">
                                                <span className="empty-stars"></span>
                                                <span className="full-stars" style={{width:`${rating * 20}%`}}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h1 className="font-bold mb-4">{title}</h1>
                                        <div>{description}</div>
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

export default Reviews;