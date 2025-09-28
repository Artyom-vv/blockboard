import React from 'react';
import Search from '@/assets/search.svg'
import boardimg from '@/assets/board.png'
import boardblurimg from '@/assets/boardblur.png'

const Hero = () => {
    return (
        <section className="container grid grid-cols-12 pt-[160px] pb-[40px]">
            <div className="col-start-2 col-span-5 flex flex-col gap-[22px]">
                <h1 className="pt-[62px]">Top experts,<br/>
                    one <span className="text-[#0094FF] underline">click</span> away</h1>
                <p className="text-black/50 text-[25px]">Find the right expert for your project, save time, <br/> and get started today</p>
                <div className="flex relative">
                    <Search className="stroke-[#00000080] absolute top-1/2 left-[16px] -translate-y-1/2"/>
                    <input className="grow py-[18px] pl-[47px] pr-[100px] h-[59px] bg-[#F1F1F1] rounded-[26px]"
                           placeholder="Develop the Minecraft server" type="text"/>
                    <button className="bg-[#51CA00] text-body-300 text-white py-[18px] px-[16px] rounded-[26px] -translate-x-1/2">Find an expert</button>
                </div>
                <div className="flex items-center gap-[10px] p-[10px] [&>span]:cursor-pointer [&>span]:block [&>span]:py-[9px] [&>span]:px-[10px] [&>span]:text-body-300 [&>span]:rounded-[15px] [&>span]:border-[1px] [&>span]:border-solid [&>span]:border-black/20">
                    <p className="text-body-300">Popular</p>
                    <span className="bg-[#DADEFF]">Building</span>
                    <span className="bg-[#DAFFFA]">Design</span>
                    <span className="bg-[#EBFFDA]">Development</span>
                </div>
            </div>
            <div className="pointer-events-none relative col-span-6 w-[594px]">
                <img className="relative z-10" src={boardimg.src} alt="board"/>
                <img className="z-[0] absolute -bottom-[68px] left-1/2 -translate-x-1/2 rotate-[37deg] min-h-[434px] max-h-[434px] min-w-[833px] max-w-[833px]" src={boardblurimg.src} alt="board blur"/>
            </div>
        </section>
    );
};

export default Hero;
