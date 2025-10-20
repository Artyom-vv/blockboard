import React from 'react';
import faqimg from '@/assets/faq.png'

const Faq = () => {
    return (
        <section className="pt-[63px] pb-[40px]">
            <div className="container grid grid-cols-12">
                <img className="col-span-7" src={faqimg.src} alt="faq"/>
                <div className="col-span-5 pt-[40px] flex flex-col gap-[36px]">
                    <h2 className="text-[40px] font-bold text-center">Frequently Asked Questions</h2>
                    <div className="flex flex-col gap-[20px]">
                        <p>What are website development services?</p>
                        <p>What are the stages of a project?</p>
                        <p>What types of service can I pick?</p>
                        <p>How much does it cost to develop a basic projects?</p>
                        <p>What are the most popular development platforms? </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
