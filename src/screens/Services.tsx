import React from 'react';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg'
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import dynamic from 'next/dynamic';

const FadeInWithSSR = dynamic(() => import('@/components/FadeIn'), { ssr: true });

import img1 from '@/assets/services/1.webp'
import img2 from '@/assets/services/2.webp'
import img3 from '@/assets/services/3.webp'
import img4 from '@/assets/services/4.webp'
import img5 from '@/assets/services/5.webp'
import img6 from '@/assets/services/6.webp'

const Services = () => {
    return (
        <section className="pt-[40px]">
            <div className="container grid grid-cols-12">
                <div className="col-span-12 flex flex-col items-center gap-[35px]">
                    <h2 className="text-[60px] font-semibold">Services right for you</h2>
                    <FadeInWithSSR stagger={0.2} className="grid grid-cols-3 gap-[10px]">
                        <ServiceCard
                            images={[img1.src, img2.src, img3.src]}
                            title="I will develop modern responsive weblow website"
                        />
                        <ServiceCard
                            images={[img2.src, img3.src, img4.src]}
                            title="I will develop modern responsive weblow website"
                        />
                        <ServiceCard
                            images={[img3.src, img4.src, img5.src]}
                            title="I will develop modern responsive weblow website"
                        />
                        <ServiceCard
                            images={[img4.src, img5.src, img6.src]}
                            title="I will develop modern responsive weblow website"
                        />
                        <ServiceCard
                            images={[img5.src, img6.src, img1.src]}
                            title="I will develop modern responsive weblow website"
                        />
                        <ServiceCard
                            images={[img6.src, img1.src, img2.src]}
                            title="I will develop modern responsive weblow website"
                        />
                    </FadeInWithSSR>

                    <button
                        className="group bg-white rounded-[20px] py-[15px] px-[30px] flex items-center gap-[8px] border-1 border-[#151515]/10 border-solid">
                        <span className="text-[20px] font-medium">View all services</span>
                        <ArrowRightIcon
                            className="fill-black transition-transform duration-200 ease-out group-hover:translate-x-[3px]"/>
                    </button>
                </div>
            </div>
        </section>
    )
};

export default Services;
