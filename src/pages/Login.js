import React from 'react';
import PageBanner from "../components/core/PageBanner";
import {Link} from "react-router-dom";
import BreadCrumb from "../components/core/BreadCrumb";

const Login = () => {
    const text = 'Login';
    return (
        <>
            <PageBanner heading={text} />
            <section className="container mx-auto px-4 mt-12 mb-20">
                <BreadCrumb heading={text} links={<li className="inline-flex items-center uppercase"><span className="font-semibold mx-2">{text}</span></li>}/>

                <h1 className="text-center font-bold text-3xl m-0 uppercase">{text}</h1>
                <div className="text-center m-0 leading-3"><span className="inline-block w-16 h-2 bg-red-600 rounded-md">{''}</span></div>

                <div className="mt-8 bg-white pt-8 px-6 pb-4 max-w-screen-sm mx-auto shadow-md rounded-md move-in-left">
                    <form>
                        <div className="mb-8">
                            <label htmlFor="email">Email <span>*</span></label>
                            <input type="email" value="" name="email" id="email"/>
                        </div>
                        <div className="mb-8">
                            <label htmlFor="password">Password <span>*</span></label>
                            <input type="password" value="" name="password" id="password"/>
                        </div>
                        <div className="mb-8 text-center">
                            <button type="submit" className="btn btn-red">Login</button>
                        </div>
                        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 sm:place-items-stretch">
                            <a className="mb-4 text-blue-500 font-semibold tracking-wide hover:text-blue-600" href="/">Forgot Password?</a>
                            <span className="text-left sm:text-right">New? <Link to="/register" className="text-blue-500 font-semibold tracking-wide hover:text-blue-600">Create Account</Link></span>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
};

export default Login;