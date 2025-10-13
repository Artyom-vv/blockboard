import React from 'react';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg'
import ServiceCard from "@/components/ServiceCard/ServiceCard";

const Services = () => {
    return (
        <section className="py-[40px]">
            <div className="container grid grid-cols-12">
                <div className="col-start-2 col-span-10 flex flex-col items-center gap-[35px]">
                    <h2 className="text-[60px] font-semibold">Services right for you</h2>
                    <div className="grid grid-cols-3 gap-[10px]">
                        <ServiceCard
                            src="https://i.pinimg.com/736x/46/e0/0f/46e00f905aa75a6a27bc6c8fb19772ba.jpg"
                            title="I will develop modern responsive weblow website"
                        />
                        <ServiceCard
                            src="https://i.pinimg.com/736x/52/32/37/523237f10583691e8dabf26a100cac95.jpg"
                            title="I will develop modern responsive weblow website"
                        />
                        <ServiceCard
                            src="https://i.pinimg.com/736x/ca/35/84/ca35849c8dbbbe0f4771936d2a84810d.jpg"
                            title="I will develop modern responsive weblow website"
                        />
                        <ServiceCard
                            src="https://i.pinimg.com/736x/9a/c4/ec/9ac4ec219fbd2ba83c5b23d50841debc.jpg"
                            title="I will develop modern responsive weblow website"
                        />
                        <ServiceCard
                            src="https://i.pinimg.com/736x/ca/35/84/ca35849c8dbbbe0f4771936d2a84810d.jpg"
                            title="I will develop modern responsive weblow website"
                        />
                        <ServiceCard
                            src="https://i.pinimg.com/736x/63/41/04/6341049fb20992c88cfbd9be7e8c3ed8.jpg"
                            title="I will develop modern responsive weblow website"
                        />
                    </div>
                    <button
                        className="bg-white rounded-[20px] py-[15px] px-[30px] flex items-center gap-[8px] border-1 border-[#151515]/10 border-solid">
                        View all services
                        <ArrowRightIcon className="fill-black"/>
                    </button>
                </div>
            </div>
        </section>
    )
};

export default Services;
