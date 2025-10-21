import React from 'react';
import Search from '@/assets/search.svg'
import boardimg from '@/assets/board.png'
import boardblurimg from '@/assets/boardblur.png'
import dynamic from 'next/dynamic';

const FadeInWithSSR = dynamic(() => import('@/components/FadeIn'), { ssr: true });

const Hero = () => {
    return (
        <section className="overflow-hidden h-full flex flex-col justify-center">
            <div className="container grid grid-cols-12 pt-[160px] pb-[70px]">
                <FadeInWithSSR stagger={0.03} className="ml-[50px] col-span-6 flex flex-col gap-[22px]">
                    <h1 className="pt-[62px]">Top experts,<br/>
                        one <span className="text-[#0094FF] underline">click</span> away</h1>

                    <p className="text-black/50 text-[25px]">Find the right expert for your project, save
                        time, <br/> and get started today</p>
                    <div className="flex relative">
                        <Search className="stroke-[#00000080] absolute top-1/2 left-[16px] -translate-y-1/2"/>
                        <input
                            className="w-full max-w-[513px] py-[18px] pl-[47px] pr-[100px] h-[59px] bg-[#F1F1F1] rounded-[26px]"
                            placeholder="Develop the Minecraft server" type="text"/>
                        <button
                            className="absolute top-[0] right-[0] bg-[#51CA00] text-body-300 text-white py-[18px] px-[16px] rounded-[26px]">Find
                            an expert
                        </button>
                    </div>
                    <div
                        className="flex items-center gap-[10px] p-[10px] [&>span]:cursor-pointer [&>span]:block [&>span]:py-[9px] [&>span]:px-[10px] [&>span]:text-body-300 [&>span]:rounded-[15px] [&>span]:border-[1px] [&>span]:border-solid [&>span]:border-black/20">
                        <p className="text-body-300">Popular</p>
                        <span className="bg-[#DADEFF]">Building</span>
                        <span className="bg-[#DAFFFA]">Design</span>
                        <span className="bg-[#EBFFDA]">Development</span>
                    </div>
                </FadeInWithSSR>
                <div className="pointer-events-none relative col-span-6 w-[594px]">
                    <img className="relative z-10" src={boardimg.src} alt="board"/>
                    <img className="z-[0] absolute -bottom-[24px] left-1/2 -translate-x-1/2 blur-[60px] scale-140"
                         src={boardblurimg.src} alt="board blur"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
