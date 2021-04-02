import React from 'react';
import PageBanner from "../components/core/PageBanner";
import BreadCrumb from "../components/core/BreadCrumb";
import Heading from "../components/core/Heading";
import UnderLine from "../components/core/UnderLine";

const KnowledgeBase = () => {
    const text = 'Knowledge Base';
    return (
        <>
            <PageBanner heading={text} />
            <section className="container mx-auto px-4 mt-12 mb-20">

                <BreadCrumb heading={text} links={<li className="inline-flex items-center uppercase"><span className="font-semibold mx-2">{text}</span></li>}/>
                <div>
                    <Heading text={text} />
                    <UnderLine/>
                    {
                        [...Array(12)].map((key, index) => {
                            return (
                                <div key={`knowledge-base-${index}`} className="my-8 space-y-4 bg-gray-200 bg-opacity-50 p-4">
                                    <p className="font-bold tracking-wide">Lorem ipsum dolor sit amet, consectetur adipisicing elit?</p>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam beatae id illo labore, laudantium nesciunt obcaecati quod vero voluptas. At fugiat illo minus nobis non nostrum quia ratione rerum, soluta ut? Aliquid dolores facilis nam vero? Accusamus at, expedita ipsa laborum natus necessitatibus neque repellendus sed sit tempora ullam.</div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
};

export default KnowledgeBase;