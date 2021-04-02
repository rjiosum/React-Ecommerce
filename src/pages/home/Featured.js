import React from 'react';
import Heading from "../../components/core/Heading";
import {Link} from "react-router-dom";
import {GiShoppingBag} from "react-icons/gi";
import {BiDetail} from "react-icons/bi";

const Featured = () => {
    return (
        <div className="container mx-auto px-4 my-20">
            <div className="text-center mb-1"><img className="inline-block" src="../resources/images/icon-title-frw.png" alt="featured-product"/></div>
            <Heading classes={'capitalize mb-6'} text={'Featured Product'} />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-8">
                {
                    [...Array(8)].map((key, index)=>{
                        return (
                            <div key={`home-${index}`} className="relative">
                                <span className="px-2 py-1 inline-block font-bold bg-red-600 text-white text-2xl absolute -top-0.5 right-0.5 transform -rotate-6 z-10">£45.99</span>
                                <div className="overflow-hidden"><Link className="block transition-all duration-300 ease-in-out transform hover:scale-150" to="/"><img src="../resources/images/p-demo.jpg" alt="" /></Link></div>

                                <div className="py-1 mt-2 flex justify-start items-center">
                                    <div className="rating-container">
                                        <span className="empty-stars"></span>
                                        <span className="full-stars" style={{width:'78%'}}></span>
                                    </div>
                                    <span className="ml-1 inline-block text-sm text-gray-400 hidden lg:inline-block">(10 review)</span>
                                </div>

                                <Link to="/" className="py-1 my-1 inline-block font-bold text-gray-500 text-sm capitalize hover:text-gray-800 lg:text-xl">9mm Primed Mdf Wall Panels V Groove - Size - 610mm x 305mm</Link>
                                <div className="flex justify-between items-center">
                                    <button className="group px-3 py-2 tracking-wide bg-gray-50 text-gray-500 shadow-sm rounded-sm focus:outline-none hover:text-gray-700 transition-all duration-300 ease-in"><GiShoppingBag className="inline-block text-red-600 text-2xl group-hover:text-red-700" /> <span className="inline-block font-semibold text-sm hidden lg:inline-block">Buy Now</span></button>
                                    <button className="group px-3 py-2 tracking-wide bg-gray-50 text-gray-500 shadow-sm rounded-sm focus:outline-none hover:text-gray-700 transition-all duration-300 ease-in"><BiDetail className="inline-block text-red-600 text-2xl group-hover:text-red-700" /> <span className="inline-block font-semibold text-sm hidden lg:inline-block">View Details</span></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Featured;