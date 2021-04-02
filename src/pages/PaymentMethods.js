import React from 'react';
import PageBanner from "../components/core/PageBanner";
import BreadCrumb from "../components/core/BreadCrumb";
import Heading from "../components/core/Heading";
import UnderLine from "../components/core/UnderLine";
const PaymentMethods = () => {
    const text = 'Payment Methods';
    return (
        <>
            <PageBanner heading={text} />
            <section className="container mx-auto px-4 mt-12 mb-20">
                <BreadCrumb heading={text} links={<li className="inline-flex items-center uppercase"><span className="font-semibold mx-2">{text}</span></li>}/>
                <Heading text={'What are all of the different payment methods?'}/>
                <UnderLine />

                <div className="mt-8">
                    <div className="overflow-hidden mb-8">
                        <h1 className="mb-6 pl-12 heading font-bold text-2xl relative leading-10 whitespace-nowrap">Debit card</h1>
                        <div className="m-4 p-4 sm:mr-8 w-auto sm:w-96 float-none sm:float-left ring-8 ring-gray-900 ring-opacity-75 hover:ring-red-600"><img className="shadow-lg" src="../resources/images/payment-methods/debit-card.jpg" alt="debit card" /></div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing:</p>
                        <ul className="list-decimal list-inside mb-4">
                            <li>Dolor</li>
                            <li>Consectetur</li>
                            <li>Officia</li>
                        </ul>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloribus eos eum facere magni neque nulla officia optio praesentium vitae..</p>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur corporis debitis ducimus ea earum et exercitationem necessitatibus nihil nobis numquam, provident quas similique sit suscipit vel, velit voluptates voluptatibus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad blanditiis cupiditate dolorem ducimus hic iste laboriosam modi, necessitatibus nostrum quibusdam repellendus! Doloremque, exercitationem fuga? Adipisci aut beatae ducimus eaque earum error id ipsum iusto labore modi nam nisi optio pariatur, placeat, porro rerum veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur corporis debitis ducimus ea earum et exercitationem necessitatibus nihil nobis numquam, provident quas similique sit suscipit vel, velit voluptates voluptatibus.</p>
                    </div>

                    <div className="overflow-hidden mb-8">
                        <h1 className="mb-6 pl-12 heading font-bold text-2xl relative leading-10 whitespace-nowrap">Credit card</h1>
                        <div className="m-4 p-4 sm:ml-8 w-auto sm:w-96 float-none sm:float-right ring-8 ring-red-600 ring-opacity-75 hover:ring-gray-800"><img className="shadow-lg" src="../resources/images/payment-methods/credit-card.jpg" alt="debit card" /></div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing:</p>
                        <ul className="list-decimal list-inside mb-4">
                            <li>Dolor</li>
                            <li>Dolor</li>
                            <li>Consectetur</li>
                            <li>Officia</li>
                            <li>Officia</li>
                        </ul>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloribus eos eum facere magni neque nulla officia optio praesentium vitae..</p>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur corporis debitis ducimus ea earum et exercitationem necessitatibus nihil nobis numquam, provident quas similique sit suscipit vel, velit voluptates voluptatibus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad blanditiis cupiditate dolorem ducimus hic iste laboriosam modi, necessitatibus nostrum quibusdam repellendus! Doloremque, exercitationem fuga? Adipisci aut beatae ducimus eaque earum error id ipsum iusto labore modi nam nisi optio pariatur, placeat, porro rerum veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur corporis debitis ducimus ea earum et exercitationem necessitatibus nihil nobis numquam, provident quas similique sit suscipit vel, velit voluptates voluptatibus.</p>
                    </div>

                    <div className="overflow-hidden mb-8">
                        <h1 className="mb-6 pl-12 heading font-bold text-2xl relative leading-10 whitespace-nowrap">Pre-paid card</h1>
                        <div className="m-4 p-4 sm:mr-8 w-auto sm:w-96 float-none sm:float-left ring-8 ring-gray-900 ring-opacity-75 hover:ring-red-600"><img className="shadow-lg" src="../resources/images/payment-methods/pre-paid-card.jpg" alt="debit card" /></div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing:</p>
                        <ul className="list-decimal list-inside mb-4">
                            <li>Dolor</li>
                            <li>Consectetur</li>
                        </ul>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloribus eos eum facere magni neque nulla officia optio praesentium vitae..</p>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur corporis debitis ducimus ea earum et exercitationem necessitatibus nihil nobis numquam, provident quas similique sit suscipit vel, velit voluptates voluptatibus.</p>
                    </div>

                    <div className="overflow-hidden mb-8">
                        <h1 className="mb-6 pl-12 heading font-bold text-2xl relative leading-10 whitespace-nowrap">Contactless</h1>
                        <div className="m-4 p-4 sm:ml-8 w-auto sm:w-96 float-none sm:float-right ring-8 ring-red-600 ring-opacity-75 hover:ring-gray-800"><img className="shadow-lg" src="../resources/images/payment-methods/contactless.jpg" alt="debit card" /></div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing:</p>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloribus eos eum facere magni neque nulla officia optio praesentium vitae..</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad blanditiis cupiditate dolorem ducimus hic iste laboriosam modi, necessitatibus nostrum quibusdam repellendus! Doloremque, exercitationem fuga? Adipisci aut beatae ducimus eaque earum error id ipsum iusto labore modi nam nisi optio pariatur, placeat, porro rerum veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur corporis debitis ducimus ea earum et exercitationem necessitatibus nihil nobis numquam, provident quas similique sit suscipit vel, velit voluptates voluptatibus.</p>
                    </div>

                    <div className="overflow-hidden mb-8">
                        <h1 className="mb-6 pl-12 heading font-bold text-2xl relative leading-10 whitespace-nowrap">By phone</h1>
                        <div className="m-4 p-4 sm:mr-8 w-auto sm:w-96 float-none sm:float-left ring-8 ring-gray-900 ring-opacity-75 hover:ring-red-600"><img className="shadow-lg" src="../resources/images/payment-methods/pay-phone.jpg" alt="debit card" /></div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing:</p>
                        <ul className="list-decimal list-inside mb-4">
                            <li>Consectetur</li>
                            <li>Officia</li>
                        </ul>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur corporis debitis ducimus ea earum et exercitationem necessitatibus nihil nobis numquam, provident quas similique sit suscipit vel, velit voluptates voluptatibus.</p>
                    </div>

                    <div className="overflow-hidden mb-8">
                        <h1 className="mb-6 pl-12 heading font-bold text-2xl relative leading-10 whitespace-nowrap">Cash</h1>
                        <div className="m-4 p-4 sm:ml-8 w-auto sm:w-96 float-none sm:float-right ring-8 ring-red-600 ring-opacity-75 hover:ring-gray-800"><img className="shadow-lg" src="../resources/images/payment-methods/cash.jpg" alt="debit card" /></div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing:</p>
                        <ul className="list-decimal list-inside mb-4">
                            <li>Dolor</li>
                            <li>Consectetur</li>
                            <li>Officia</li>
                            <li>Officia</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad blanditiis cupiditate dolorem ducimus hic iste laboriosam modi, necessitatibus nostrum quibusdam repellendus! Doloremque, exercitationem fuga? Adipisci aut beatae ducimus eaque earum error id ipsum iusto labore modi nam nisi optio pariatur, placeat, porro rerum veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur corporis debitis ducimus ea earum et exercitationem necessitatibus nihil nobis numquam, provident quas similique sit suscipit vel, velit voluptates voluptatibus.</p>
                    </div>

                    <div className="overflow-hidden mb-8">
                        <h1 className="mb-6 pl-12 heading font-bold text-2xl relative leading-10 whitespace-nowrap">Cheque</h1>
                        <div className="m-4 p-4 sm:mr-8 w-auto sm:w-96 float-none sm:float-left ring-8 ring-gray-900 ring-opacity-75 hover:ring-red-600"><img className="shadow-lg" src="../resources/images/payment-methods/cheque.png" alt="debit card" /></div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing:</p>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloribus eos eum facere magni neque nulla officia optio praesentium vitae..</p>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur corporis debitis ducimus ea earum et exercitationem necessitatibus nihil nobis numquam, provident quas similique sit suscipit vel, velit voluptates voluptatibus.</p>
                    </div>

                    <div className="overflow-hidden mb-8">
                        <h1 className="mb-6 pl-12 heading font-bold text-2xl relative leading-10 whitespace-nowrap">Online banking</h1>
                        <div className="m-4 p-4 sm:ml-8 w-auto sm:w-96 float-none sm:float-right ring-8 ring-red-600 ring-opacity-75 hover:ring-gray-800"><img className="shadow-lg" src="../resources/images/payment-methods/online-banking.jpg" alt="debit card" /></div>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing:</p>
                        <ul className="list-decimal list-inside mb-4">
                            <li>Consectetur</li>
                            <li>Officia</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad blanditiis cupiditate dolorem ducimus hic iste laboriosam modi, necessitatibus nostrum quibusdam repellendus! Doloremque, exercitationem fuga? Adipisci aut beatae ducimus eaque earum error id ipsum iusto labore modi nam nisi optio pariatur, placeat, porro rerum veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur corporis debitis ducimus ea earum et exercitationem necessitatibus nihil nobis numquam, provident quas similique sit suscipit vel, velit voluptates voluptatibus.</p>
                    </div>
                </div>
            </section>
        </>
    )
};

export default PaymentMethods;