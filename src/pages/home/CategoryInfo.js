import React from 'react';

const CategoryInfo = () => {
    return (
        <div className="hidden lg:grid grid-cols-3 mb-20 relative">
            <div><img src="../resources/images/home/sand.jpg" alt="p-1" /></div>
            <div className="relative">
                <img src="../resources/images/home/text-bg.jpg" alt="t-1" />
                <div className="p-8 absolute top-0 left-0 w-full h-full text-center">
                    <div className="text-white flex flex-col justify-center items-center w-full h-full">
                        <h1 className="font-bold font-courgette text-2xl tracking-widest">Plywood</h1>
                        <p className="mt-6 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis impedit nulla pariatur sapiente. Accusamus aliquam assumenda aut deserunt exercitationem facere fugiat ipsa maxime nisi.</p>
                        <button className="mt-6 text-red-600 focus:outline-none">More information</button>
                    </div>
                </div>
            </div>
            <div><img src="../resources/images/home/mdf.jpg" alt="p-2" /></div>
            <div className="relative">
                <img src="../resources/images/home/text-bg.jpg" alt="t-3" />
                <div className="p-8 absolute top-0 left-0 w-full h-full text-center">
                    <div className="text-white flex flex-col justify-center items-center w-full h-full">
                        <h1 className="font-bold font-courgette text-2xl tracking-widest">Stud Work</h1>
                        <p className="mt-6 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis impedit nulla pariatur sapiente. Accusamus aliquam assumenda aut deserunt exercitationem facere fugiat ipsa maxime nisi.</p>
                        <button className="mt-6 text-red-600 focus:outline-none">More information</button>
                    </div>
                </div>
            </div>
            <div><img src="../resources/images/home/stone.jpg" alt="p-3" /></div>
            <div className="relative">
                <img src="../resources/images/home/text-bg.jpg" alt="t-3" />
                <div className="p-8 absolute top-0 left-0 w-full h-full text-center">
                    <div className="text-white flex flex-col justify-center items-center w-full h-full">
                        <h1 className="font-bold font-courgette text-2xl tracking-widest">Fencing</h1>
                        <p className="mt-6 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis impedit nulla pariatur sapiente. Accusamus aliquam assumenda aut deserunt exercitationem facere fugiat ipsa maxime nisi.</p>
                        <button className="mt-6 text-red-600 focus:outline-none">More information</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CategoryInfo;