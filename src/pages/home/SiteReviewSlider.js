import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {reviews as reviewData} from '../../data/SiteReview';

const SiteReviewSlider = () => {
    const reviews = reviewData.filter((r)=>r.rating===4);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1536 },
            items: 1
        },
        LargeDesktop: {
            breakpoint: { max: 1536, min: 1280 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1
        }
    };
    return (
        <section className="bg-red-600 mb-20">
            <div className="py-10">
                <div className="container mx-auto px-4">
                    <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
                        {
                            reviews.map((review)=>{
                                const {uuid, title, review: description, rating, created_at, user, avatar} = review;
                                return (
                                    <div key={uuid} className="w-full md:w-3/4 mx-auto flex justify-center items-center">
                                        <div className="hidden md:block flex-none w-16 bg-red-100"><img className="w-16" src={avatar} alt="avatar"/></div>
                                        <div className="flex-grow ml-6">
                                            <div><span className="font-bold text-red-100 tracking-wide text-sm">{user},</span> <span className="text-gray-100 text-sm">{new Date(created_at).toLocaleDateString("en-GB")}</span></div>
                                            <div className="rating-container my-1">
                                                <span className="empty-stars"></span>
                                                <span className="full-stars" style={{width:`${rating * 20}%`}}></span>
                                            </div>
                                            <h1 className="font-bold mb-1 text-red-100 text-sm">{title}</h1>
                                            <div className="text-red-100 text-sm">{description}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </section>
    )
};

export default SiteReviewSlider;