"use client";

import React, {FC, ReactNode, useState} from 'react';
import faqimg from '@/assets/faq.png'
import boardblurimg from "@/assets/boardblur.png";
import Arrowdown from '@/assets/icons/arrow-down-angle-svgrepo-com.svg'
import {Glass} from "@/components/ui/Glass";
import {motion, AnimatePresence} from "framer-motion";
import dynamic from 'next/dynamic';

const FadeInWithSSR = dynamic(() => import('@/components/FadeIn'), { ssr: true });

const faqItems = [
    {
        title: "What are website development services?",
        description:
            "Website development services include planning, designing, coding, testing, and maintaining websites for individuals or businesses, optimizing for user experience and performance."
    },
    {
        title: "What are the stages of a project?",
        description:
            "Common stages of a project include initiation, planning, execution, monitoring, and closure. Each phase ensures proper management and delivery of project goals."
    },
    {
        title: "What types of service can I pick?",
        description:
            "You can choose from services such as full-stack development, front-end or back-end only, e-commerce integration, CMS-based websites, and custom web application development."
    },
    {
        title: "How much does it cost to develop a basic projects?",
        description:
            "Costs vary depending on features, complexity, and provider, but basic website development projects typically range from a few hundred to several thousand dollars."
    },
    {
        title: "What are the most popular development platforms?",
        description:
            "Popular platforms include WordPress, Shopify, React, Angular, Vue.js, and frameworks like Laravel, Next.js, and Django, chosen based on project requirements."
    }
];


interface AccordionProps {
    number: number;
    title: string;
    isActive: boolean;
    onClick: () => void;
    children: ReactNode;
}

const Accordion: FC<AccordionProps> = ({number, title, isActive, onClick, children}) => (
    <div className="relative flex items-center gap-[16px]">
        <span
            className="absolute top-[0] -translate-x-[65px] text-[70px] font-bold"
            style={{
                color: number === 4 ? "white" : 'transparent',
                paintOrder: "stroke fill",
                WebkitTextStroke: number === 4 ? "2px #DD80FF" : "1px #DD80FF",
            }}
        >
            {number}
        </span>
        <Glass
            wrapperClassName="cursor-pointer min-w-[600px]"
            contentClassName="w-full border-[0.5] border-white rounded-[10px] shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)]"
            radius={10}
            blurClassName="backdrop-blur-[4px]"
            baseOpacity={0.1}
            tint="#ffffff"
            borderClassName="border border-black/20"
            highlight
            highlightAngle={-127}
            highlightOpacity={0.80}
            dispersion
            dispersionIntensity={0.12}
            noise={false}
        >
            <button
                style={{}}
                className="w-full text-left py-[24px] px-[20px] flex justify-between items-center font-bold text-[20px]"
                onClick={onClick}
            >
                {title}
                <span
                    className={`transition-transform duration-300 inline-block ${isActive ? 'scale-y-[-1]' : 'scale-y-[1]'}`}
                >
                  <Arrowdown/>
                </span>


            </button>

            <AnimatePresence initial={false}>
                {isActive && (
                    <motion.div
                        key="content"
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.2, ease: "easeInOut"}}
                        className="overflow-hidden"
                    >
                        <div className="px-[20px] pb-[24px] pt-[0px]">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Glass>
    </div>
);


const FAQ = () => {
    const [active, setActive] = useState<null | number>(null);

    return (
        <section className="pt-[63px] pb-[200px] overflow-hidden">
            <div className="container grid grid-cols-12">
                <div className="col-span-7 pointer-events-none relative">
                    <img className="relative w-full z-10" src={faqimg.src} alt="faq"/>
                    <img
                        className="z-[0] absolute -bottom-[24px] left-1/2 -rotate-90 -translate-x-1/2 blur-[55px] scale-130"
                        src={boardblurimg.src} alt="board blur"/>
                </div>
                <div className="col-span-5 pt-[40px] flex flex-col gap-[36px]">
                    <h2 className="text-[40px] font-bold">Frequently Asked Questions</h2>
                    <FadeInWithSSR className="flex flex-col gap-[20px]">
                        {faqItems.map(({title, description}, idx) => (
                            <Accordion
                                key={title}
                                number={idx + 1}
                                title={title}
                                isActive={active === idx}
                                onClick={() => setActive(active === idx ? null : idx)}
                            >
                                {description}
                            </Accordion>
                        ))}
                    </FadeInWithSSR>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
