import React, {useState} from 'react';
import {FaEnvelope, FaAddressCard, FaPhoneAlt, FaAngleDoubleRight, FaPlus, FaMinus} from 'react-icons/fa'
import {config} from '../../data/SiteConfig';
import {social, aboutCompany, footerLinks, openingHours, payments} from '../../data/FooterData';
import {Link} from "react-router-dom";

const AppFooter = () => {
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);

    return (
        <footer className="bg-gray-800 pb-12 text-gray-400 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 160"><path fill="#f3f4f6" fillOpacity="1" d="M0,160L30,144C60,128,120,96,180,112C240,128,300,192,360,202.7C420,213,480,171,540,165.3C600,160,660,192,720,213.3C780,235,840,245,900,218.7C960,192,1020,128,1080,122.7C1140,117,1200,171,1260,186.7C1320,203,1380,181,1410,170.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 whitespace-nowrap">
                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-4">
                            <div><img src={config.logo} alt="logo"/></div>
                            <button type="button" className="block sm:hidden p-2 sm:p-1 bg-red-600 text-white focus:outline-none hover:bg-red-700" onClick={()=>setShowOne(!showOne)}>{ showOne ? <FaMinus/> : <FaPlus/> }</button>
                        </div>

                        <div className={`${ showOne ? 'slide-down' : 'slide-up' } sm:slide-down`}>
                            <div className="ml-4">
                                <div className="flex flex-nowrap justify-start items-start space-x-4 mb-6">
                                    <p className="text-2xl"><FaAddressCard /></p>
                                    <div>
                                        <p>{config.street}</p>
                                        <p>{config.city}</p>
                                        <p>{config.postCode}</p>
                                        <p>{config.country}</p>
                                    </div>
                                </div>
                                <div className="flex flex-nowrap justify-start items-center space-x-4 mb-6">
                                    <p className="text-2xl"><FaEnvelope /></p>
                                    <p>{config.email}</p>
                                </div>
                                <div className="flex flex-nowrap justify-start items-center space-x-4">
                                    <p className="text-2xl"><FaPhoneAlt /></p>
                                    <p>{config.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="heading text-white text-2xl relative pl-12 leading-10 whitespace-nowrap">Useful Links</div>
                            <button type="button" className="block sm:hidden p-2 sm:p-1 bg-red-600 text-white focus:outline-none hover:bg-red-700" onClick={()=>setShowTwo(!showTwo)}>{ showTwo ? <FaMinus/> : <FaPlus/>}</button>
                        </div>

                        <div className={`${ showTwo ? 'slide-down' : 'slide-up' } sm:slide-down`}>
                            <div className="mt-6">
                                {
                                    footerLinks.map((link, index)=>{
                                        return (
                                            <div key={`useful-links-${index}`} className="ml-4"><Link className="inline-block p-1 mb-1 hover:text-white" to={link.slug}><FaAngleDoubleRight className="inline-block" /> {link.title}</Link></div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="heading text-white text-2xl relative pl-12 leading-10 whitespace-nowrap">Opening Hours</div>
                            <button type="button" className="block sm:hidden p-2 sm:p-1 bg-red-600 text-white focus:outline-none hover:bg-red-700" onClick={()=>setShowThree(!showThree)}>{ showThree ? <FaMinus/> : <FaPlus/>}</button>
                        </div>

                        <div className={`${ showThree ? 'slide-down' : 'slide-up' } sm:slide-down`}>
                            <div className="mt-6">
                                {
                                    openingHours.map((open, index)=>{
                                        return (
                                            <div key={`opening-hours-${index}`} className="ml-4"><button className="inline-block p-1 mb-1 hover:text-white focus:outline-none cursor-text">{open.day} - {open.hours}</button></div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex justify-between items-center mb-4">
                            <div className="heading text-white text-2xl relative pl-12 leading-10 whitespace-nowrap">About Company</div>
                            <button type="button" className="block sm:hidden p-2 sm:p-1 bg-red-600 text-white focus:outline-none hover:bg-red-700" onClick={()=>setShowFour(!showFour)}>{ showFour ? <FaMinus/> : <FaPlus/>}</button>
                        </div>

                        <div className={`${ showFour ? 'slide-down' : 'slide-up' } sm:slide-down`}>
                            <div className="mt-6">
                                <div className="whitespace-normal ml-4">{aboutCompany.content}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-4 border-gray-700"/>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
                    <div className="text-center">
                        {
                            social.map((media, index) => {
                                return (
                                    <a className="inline-block p-2 text-xl hover:text-white" key={`social-media-${index}`} href={media.url} target="_blank" rel="noreferrer">{media.icon}</a>
                                )
                            })
                        }
                    </div>
                    <div className="text-center">Copyright &copy; 2021 www.domain.co.uk. All Right Reserved.</div>
                    <div className="text-center md:col-span-2 lg:col-span-1">
                        {
                            payments.map((payment, index) => {
                                return (
                                    <button className="inline-block text-gray-400 px-2 text-5xl hover:text-white focus:outline-none" key={`payment-${index}`}>{payment.icon}</button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default AppFooter;