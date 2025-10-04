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
                            src="https://i.pinimg.com/originals/e0/f4/dc/e0f4dc67c4dcf4f6b0cde5c03b93190f.jpg"
                            title="I will develop modern responsive weblow website"
                        />
                        <ServiceCard
                            src="https://i.pinimg.com/originals/e0/f4/dc/e0f4dc67c4dcf4f6b0cde5c03b93190f.jpg"
                            title="I will develop modern responsive weblow website"
                        />
                        <ServiceCard
                            src="https://i.pinimg.com/originals/e0/f4/dc/e0f4dc67c4dcf4f6b0cde5c03b93190f.jpg"
                            title="I will develop modern responsive weblow website"
                        />
                        <ServiceCard
                            src="https://i.pinimg.com/originals/e0/f4/dc/e0f4dc67c4dcf4f6b0cde5c03b93190f.jpg"
                            title="I will develop modern responsive weblow website"
                        />
                        <ServiceCard
                            src="https://i.pinimg.com/originals/e0/f4/dc/e0f4dc67c4dcf4f6b0cde5c03b93190f.jpg"
                            title="I will develop modern responsive weblow website"
                        />
                        <ServiceCard
                            src="https://i.pinimg.com/originals/e0/f4/dc/e0f4dc67c4dcf4f6b0cde5c03b93190f.jpg"
                            title="I will develop modern responsive weblow website"
                        />
                    </div>
                    <button
                        className="bg-white rounded-[20px] py-[15px] px-[30px] flex items-center gap-[8px] border-1 border-[#151515]/10 border-solid">
                        View all services
                        <ArrowRightIcon/>
                    </button>
                </div>
            </div>
        </section>
    )
};

export default Services;
