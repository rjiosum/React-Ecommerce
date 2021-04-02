import React from 'react';
import PageBanner from "../components/core/PageBanner";
import BreadCrumb from "../components/core/BreadCrumb";
import Heading from "../components/core/Heading";
import UnderLine from "../components/core/UnderLine";

const QuestionAndAnswer = () => {
    const text = 'Q&A';
    return (
        <>
            <PageBanner heading={text} />
            <section className="container mx-auto px-4 mt-12 mb-20">

                <BreadCrumb heading={text} links={<li className="inline-flex items-center uppercase"><span className="font-semibold mx-2">{text}</span></li>}/>
                <div>
                    <Heading text={text} />
                    <UnderLine/>
                    {
                        [...Array(10)].map((key, index) => {
                            return (
                                <div key={`qna-${index}`} className="my-8 space-y-4 bg-gray-200 bg-opacity-50 p-4">
                                    <p><span className="text-xl font-bold">Q. Lorem ipsum dolor sit amet, consectetur adipisicing elit?</span></p>
                                    <p><span className="font-bold text-red-600">A.</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae id illo labore, laudantium nesciunt obcaecati quod vero voluptas. At fugiat illo minus nobis non nostrum quia ratione rerum, soluta ut? Aliquid dolores facilis nam vero? Accusamus at, expedita ipsa laborum natus necessitatibus neque repellendus sed sit tempora ullam.</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
};

export default QuestionAndAnswer;