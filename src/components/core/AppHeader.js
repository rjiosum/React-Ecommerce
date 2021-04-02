import React from 'react'
import {FaPhone, FaUser, FaRegistered, FaLock, FaLockOpen} from 'react-icons/fa'
import {Link} from "react-router-dom";
import {config} from '../../data/SiteConfig'
import {CartData} from "../../data/Cart";

const AppHeader = () => {
    return (
        <>
            <header className="bg-black bg-opacity-90 text-gray-400">
                <div className="container mx-auto px-4">
                    <section className="py-1 mb-2 text-sm flex flex-no-wrap justify-center items-center sm:justify-between border-b border-gray-800">
                        <div className="hidden sm:block sm:flex flex-no-wrap justify-center items-center">
                            <a href={`tel:${config.phone}`} className="font-bold tracking-wide flex justify-between items-center hover:text-gray-50"><FaPhone/><span className="inline-block ml-2">{config.phone}</span></a>
                        </div>

                        <ul className="flex flex-no-wrap justify-center items-center divide-x divide-gray-500">
                            <li className="px-2"><Link to="/register" className="flex justify-between items-center hover:text-gray-50"><FaRegistered/><span className="inline-block ml-2">Register</span></Link></li>

                            <li className="px-2"><Link to="/login" className="flex justify-between items-center hover:text-gray-50"><FaLock/><span className="inline-block ml-2">Login</span></Link></li>
                            {/*<li className="px-2"><a href="/" className="flex justify-between items-center hover:text-gray-50"><FaUser/><span className="inline-block ml-2">Account</span></a></li>
                            <li className="px-2"><a href="/" className="flex justify-between items-center hover:text-gray-50"><FaLockOpen/><span className="inline-block ml-2">Logout</span></a></li>*/}
                        </ul>
                    </section>

                    <section className="py-6 flex justify-between items-center">
                        <div className="flex-grow"><Link to="/"><img src={config.logo} alt="logo" /></Link></div>
                        <div className="hidden md:block header-delivery mr-8 pr-8 border-r border-gray-700">
                            <div className="flex flex-nowrap items-center">
                                <span className="delivery-icon w-12 h-12 relative inline-block transition-all duration-300 ease-in"/>
                                <div className="pl-2 text-sm hidden sm:block">
                                    <p className="font-semibold">Free delivery on order</p>
                                    <p className="text-white font-bold tracking-wide">greater than &pound;200</p>
                                </div>
                            </div>
                        </div>
                        <div className="header-cart relative cursor-pointer">
                            <div className="flex flex-nowrap items-center">
                                <span className="cart-icon w-12 h-12 relative inline-block transition-all duration-300 ease-in"><p
                                    className="p-1 absolute -top-1 left-8 rounded-full bg-red-600 text-white text-xs font-bold">10</p></span>
                                <div className="pl-2 text-sm hidden sm:block">
                                    <p className="font-semibold">Shopping Bag</p>
                                    <p className="text-white font-bold tracking-wide">&pound;32.50</p>
                                </div>
                            </div>
                            <div className="cart-widget text-xs cursor-default z-30">
                                {
                                    CartData.map((cart, index) => {
                                        return (
                                            <div key={`cart-${index}`} className="my-2 pb-2 border-b border-gray-800">
                                                <div className="flex flex-nowrap justify-between items-start space-x-2">
                                                    <a className="flex-none w-16 h-16 inline-block" href="/"><img className="w-16 h-16 object-cover" src={cart.img} alt="img"/></a>
                                                    <div className="flex-grow">
                                                        <p><a href="/">{cart.title}</a></p>
                                                        <p className="mt-2">Unit price: &pound;{cart.price}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-2 flex flex-nowrap justify-between items-center">
                                                    <p>Qty: {cart.qty}</p>
                                                    <p>&pound;{cart.qty * cart.price}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="mt-8 p-2 bg-black bg-opacity-50 text-sm">
                                    <div className="py-2 flex flex-nowrap justify-between items-center">
                                        <div>Shipping</div>
                                        <div>&pound;20.00</div>
                                    </div>
                                    <div className="py-2 uppercase font-bold tracking-wide flex flex-nowrap justify-between items-center">
                                        <div>Total</div>
                                        <div>&pound;87.06</div>
                                    </div>
                                    <div className="mt-4 py-2 flex flex-nowrap justify-between items-center">
                                        <button className="px-3 py-1 bg-red-600 text-white  hover:bg-red-700 focus:outline-none">Cart</button>
                                        <button className="px-3 py-1 bg-gray-700 text-white hover:bg-gray-800 focus:outline-none">Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </header>

        </>
    )
}

export default AppHeader;