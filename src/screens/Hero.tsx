import React from 'react';
import Search from '@/assets/search.svg'

const Hero = () => {
    return (
        <section className="container grid grid-cols-12 pt-[160px]">
            <div className="col-span-6 flex flex-col gap-[22px]">
                <h1 className="pt-[62px]">Top experts,<br/>
                    one <span className="text-[#0094FF] underline">click</span> away</h1>
                <p className="text-black/50 text-[25px]">Find the right expert for your project, save time, <br/> and get started today</p>
                <div className="flex grow relative">
                    <Search className="stroke-[#00000080] absolute top-1/2 left-[16px] -translate-y-1/2"/>
                    <input className="grow py-[18px] pl-[47px] pr-[100px] h-[59px] bg-[#F1F1F1] rounded-[26px]"
                           placeholder="Develop the Minecraft server" type="text"/>
                    <button className="bg-[#51CA00] text-[18px] text-white py-[18px] px-[16px] rounded-[26px] font-medium -translate-x-1/2">Find an expert</button>
                </div>
                <div className="flex gap-[10px]">
                    <p>Popular</p>
                    <p>tag</p>
                    <p>tag</p>
                    <p>tag</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
