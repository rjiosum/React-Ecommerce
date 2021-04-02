import React from 'react';
import PageBanner from "../components/core/PageBanner";
import {FaAngleRight} from "react-icons/fa";
import {Link} from "react-router-dom";
import BreadCrumb from "../components/core/BreadCrumb";

const Register = () => {
    const text = 'Create Account';
    return (
        <>
            <PageBanner heading={text} />
            <section className="container mx-auto px-4 mt-12 mb-20">

                <BreadCrumb heading={text} links={<li className="inline-flex items-center uppercase"><span className="font-semibold mx-2">{text}</span></li>}/>

                <h1 className="text-center font-bold text-3xl m-0 uppercase">{text}</h1>
                <div className="text-center m-0 leading-3"><span className="inline-block w-16 h-2 bg-red-600 rounded-md">{''}</span></div>

                <div className="mt-8 bg-white pt-8 px-6 pb-4 max-w-screen-md mx-auto shadow-md rounded-md move-in-right">
                    <form>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                            <div className="mb-8">
                                <label htmlFor="first-name">First Name <span>*</span></label>
                                <input type="text" value="" name="first_name" id="first-name"/>
                            </div>
                            <div className="mb-8">
                                <label htmlFor="last-name">Last Name <span>*</span></label>
                                <input type="text" value="" name="last_name" id="last-name"/>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                            <div className="mb-8">
                                <label htmlFor="email">Email <span>*</span></label>
                                <input type="email" value="" name="email" id="email"/>
                            </div>
                            <div className="mb-8">
                                <label htmlFor="phone">Phone <strong>(optional)</strong></label>
                                <input type="text" value="" name="phone" id="phone"/>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                            <div className="mb-8">
                                <label htmlFor="password">Password <span>*</span></label>
                                <input type="password" value="" name="password" id="password"/>
                            </div>
                            <div className="mb-8">
                                <label htmlFor="confirm-password">Confirm Password <span>*</span></label>
                                <input type="password" value="" name="confirm_password" id="confirm-password"/>
                            </div>
                        </div>

                        <div className="mb-8 text-center">
                            <button type="submit" className="btn btn-red">Create Account</button>
                        </div>
                        <div className="text-center">
                            <span>Already Registered? <Link to="/login" className="text-blue-500 font-semibold tracking-wide hover:text-blue-600">Login</Link></span>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
};

export default Register;