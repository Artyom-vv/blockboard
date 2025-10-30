"use client";

import React, { FC, useRef } from 'react';
import starimg from "@/assets/icons/star.png";
import { Glass } from "@/components/ui/Glass";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import type { Swiper as SwiperType } from 'swiper/types';
import {EffectFade} from "swiper/modules";

export interface ServiceCardProps {
    images: string[];
    title: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ images, title }) => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="flex flex-col bg-white rounded-[15px]">
            <div className="img-wrapper h-[240px] w-full overflow-hidden rounded-[15px] relative z-10">
                <Swiper
                    className="w-full h-full"
                    onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                    modules={[EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    speed={300}
                    loop
                    centeredSlides
                    slidesPerView={1}
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index+src}>
                            <img className="object-cover object-center h-full w-full" src={src} alt={title} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="p-[9px] z-20 absolute top-[0] left-[0] w-full h-full flex items-center justify-between">
                    <button onClick={() => swiperRef.current?.slidePrev()}>
                        <Glass
                            wrapperClassName="cursor-pointer size-[40px]"
                            contentClassName="flex items-center justify-center h-full"
                            radius={25}
                            blurClassName="backdrop-blur-[14px]"
                            baseOpacity={0.50}
                            tint="#000000"
                            borderClassName="border border-white/20"
                            highlight
                            highlightAngle={-127}
                            highlightOpacity={0.80}
                            dispersion
                            dispersionIntensity={0.12}
                            noise={false}
                            interactiveGlow
                            glowRadius={60}
                            glowStrength={0.3}
                            glowBlend="soft-light"
                        >
                            <ArrowLeftIcon className="!fill-white !w-auto !h-auto" />
                        </Glass>
                    </button>

                    <button onClick={() => swiperRef.current?.slideNext()}>
                        <Glass
                            wrapperClassName="cursor-pointer size-[40px]"
                            contentClassName="flex items-center justify-center h-full"
                            radius={25}
                            blurClassName="backdrop-blur-[14px]"
                            baseOpacity={0.50}
                            tint="#000000"
                            borderClassName="border border-white/20"
                            highlight
                            highlightAngle={-127}
                            highlightOpacity={0.80}
                            dispersion
                            dispersionIntensity={0.12}
                            noise={false}
                            interactiveGlow
                            glowRadius={60}
                            glowStrength={0.3}
                            glowBlend="soft-light"
                        >
                            <ArrowRightIcon className="!fill-white !w-auto !h-auto" />
                        </Glass>
                    </button>
                </div>
            </div>

            <div className="-mt-[17px] content border-1 border-black/10 border-solid px-[20px] py-[27px] rounded-[15px] rounded-t-none flex flex-col gap-[10px]">
                <div className="flex flex-col gap-[7px]">
                    <div className="flex gap-[4px]">
                        <span className="cursor-pointer p-[3px] medium text-[16px] rounded-[3px] bg-[#F6F6F6]">Programming & Tech</span>
                    </div>
                    <p className="cursor-pointer text-[20px] color-black medium">{title}</p>
                </div>
                <div className="flex flex-col gap-[6px]">
                    <div className="border-dashed border-1 border-black/20 w-full"></div>
                    <div className="flex flex-col gap-[9px]">
                        <div className="flex items-center gap-[5px]">
                            <p className="text-body-300">Vanessa</p>
                            <div className="flex items-center">
                                <img src={starimg.src} alt={starimg.src} />
                                <p className="text-body-300">5.0 (28 Reviews)</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="py-[4px] px-[8px] bg-[#C9ECBF] rounded-[10px] text-body-300">Delivery in 1 day</span>
                            <p className="text-[20px] font-semibold">From $780</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
