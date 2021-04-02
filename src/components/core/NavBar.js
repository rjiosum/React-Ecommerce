import React, {useEffect, useState} from 'react';
import {FaCaretDown, FaSearch, FaTimes, FaBars} from "react-icons/fa";
import {NavData} from '../../data/HeaderNav';
import {SearchData} from "../../data/SearchData";
import {Link} from "react-router-dom";
import {useGlobalMobileNavBarContext} from "../../context/MobileNavBarContext";

const NavBar = () => {
    const {openMobileNavBar} = useGlobalMobileNavBarContext();
    const [showSearchForm, setShowSearchForm] = useState(false);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [query, setQuery] = useState('');

    const handleQuery = (e) => {
        setQuery(e.target.value)
    }

    const toggleSearchForm = () => {
        if(showSearchForm){
            setShowSearchForm(false)
            setShowSearchResult(false)
        } else {
            setShowSearchForm(true)
        }

    }

    useEffect(()=>{
        if(query.length > 0) {
            setShowSearchResult(true)
        } else {
            setShowSearchResult(false)
        }
    }, [query])

    return (
        <nav className="bg-gray-700">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center relative">
                    <ul className="nav hidden space-x-4 lg:flex flex-nowrap justify-between items-center text-white relative w-full lg:w-2/3">
                        {
                            NavData.map((nav) => {
                                const {id, title, slug, children} = nav;
                                const hasChildren = (children.length > 0);
                                return (
                                    <li key={id} className={`${hasChildren ? 'menu' : ''}`}><Link className="inline-block py-8 text-sm uppercase whitespace-nowrap font-bold tracking-widest text-gray-400 hover:text-gray-50" to={slug}>{title} {hasChildren && <FaCaretDown className="inline-block -mt-0.5 text-xl" />}</Link>
                                        {
                                            hasChildren && (
                                                <div className="menu-dropdown rounded-b-md">
                                                    <ul className="flex flex-wrap justify-start items-start">
                                                        {
                                                            children.map((child) => {
                                                                return (
                                                                    <li key={child.id} className="w-40"><Link to={child.slug} className="p-4 inline-block text-center text-gray-400 hover:text-white"><img className="w-24 h-24 object-cover mx-auto mb-4" src={child.img} alt="menu-01" /><span className="text-sm">{child.title}</span></Link></li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            )
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>

                    {showSearchResult && <button onClick={()=>setShowSearchResult(!showSearchResult)} className="fixed inset-0 w-full h-full bg-black bg-opacity-25 z-10 focus:outline-none">{''}</button>}
                    <div className={`my-6 z-20 w-10/12 visible lg:my-0 ${showSearchForm ? 'lg:visible' : 'lg:invisible'} lg:absolute lg:top-1.4 lg:w-95`}>
                        <form action="" method="post">
                            <div className="flex justify-center items-center">
                                <input type="text" className="w-95 bg-gray-800 text-white rounded-none border-0 focus:border-0 ring-1 ring-black ring-opacity-50 focus:ring-1 focus:ring-black focus:ring-opacity-75" value={query} placeholder="Search..." onChange={handleQuery}/>
                                <button type="submit" className="h-2.6 px-4 md:px-8 text-xl bg-red-600 text-white focus:outline-none hover:bg-red-800"><FaSearch/></button>
                            </div>
                        </form>

                        {showSearchResult && (<div className="h-64 overflow-y-scroll absolute w-10/12 bg-gray-50 top-4.2 z-30 shadow-lg lg:top-2.8 lg:w-full">
                            <ul className="">
                                {
                                    SearchData.map((data) => {
                                        const {id, img, slug, title, price} = data;
                                        return (
                                            <li key={id} className="p-4 hover:bg-gray-200">
                                                <Link to={slug} className="flex flex-nowrap justify-start items-center">
                                                    <span className="inline-block w-24 mr-4"><img className="" src={img} alt={title} /></span>
                                                    <span className="inline-block">
                                                        <span className="mb-2 block text-blue-600 font-bold">{title}</span>
                                                        <span className="block text-xs text-red-600 font-bold">&pound;{price}</span>
                                                    </span>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>)}
                    </div>

                    <div className="my-6 z-20">
                        <button type="button" className="p-2 text-xl rounded-full bg-gray-50 text-black focus:outline-none hover:bg-gray-100 hidden lg:block" onClick={toggleSearchForm}>{ showSearchForm ? <FaTimes/> : <FaSearch/> }</button>
                        <button type="button" className="text-4xl text-red-600 focus:outline-none hover:text-gray-50 block lg:hidden" onClick={openMobileNavBar}><FaBars/></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;