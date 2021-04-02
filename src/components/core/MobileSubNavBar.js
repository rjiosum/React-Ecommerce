import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {FaAngleRight, FaMinus, FaPlus} from "react-icons/fa";

const MobileSubNavBar = ({id, slug, title, hasChildren, children}) => {
    const [index, setIndex] = useState(0);
    const showSubMenu = (id) => {
        if(id === index){
            return setIndex(0);
        }
        setIndex(id);
    }

    return (
        <>
            <li>
                <div className="flex justify-between items-center">
                    <Link className="py-2 inline-block text-gray-100 hover:text-white" to={slug}>{title}</Link>
                    {hasChildren ? <button className="p-2 text-white bg-red-600 hover:bg-red-800 focus:outline-none" onClick={()=>showSubMenu(id)}>{ (id === index) ? <FaMinus /> : <FaPlus />}</button> : ''}
                </div>
                {hasChildren && (
                    <div className={`${(id === index) ? 'slide-down' : 'slide-up'}`}>
                        <div className="my-4">
                            {
                                children.map((child) => {
                                    const {id, title, slug} = child;
                                    return (
                                        <Link className="pl-2 py-2 text-gray-400 hover:text-white flex justify-start items-center" key={id} to={slug}><FaAngleRight className="inline-block" /> <span className="ml-1 inline-block">{title}</span></Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                )}
            </li>

        </>
    )
};

export default MobileSubNavBar;