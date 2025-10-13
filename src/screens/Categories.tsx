import React from 'react';
import CategoryCard from "@/app/(landing)/components/CategoryCard";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import Hammer from '@/assets/icons/hammer.svg'
import Palett from '@/assets/icons/palett.svg'
import Web from '@/assets/icons/web.svg'
import Conf from '@/assets/icons/conf.svg'
import Code from '@/assets/icons/code.svg'
import Skin from '@/assets/icons/skin.svg'
import Cube from '@/assets/icons/3d.svg'
import Video from '@/assets/icons/video.svg'

const Categories = () => {
    return (
        <section className="bg-[linear-gradient(180deg,#F2853C_0%,#FFFFFF_100%)] py-[52px]">
            <div className="container">
                <div className="col-start-3 col-span-8 flex flex-col items-center gap-[50px]">
                    <h2 className="text-[60px] font-semibold text-white">Popular categories</h2>
                    <div className="w-full py-[10px] grid grid-cols-4 gap-[24px]">
                        <CategoryCard
                            tint="#5691CD"
                            title="Building"
                            subtitle="100 services"
                            icon={<Hammer />}
                        />
                        <CategoryCard
                            tint="#51C6C4"
                            title="Design"
                            subtitle="204 services"
                            icon={<Palett/>}
                        />
                        <CategoryCard
                            tint="#775FD8"
                            title="Development"
                            subtitle="43 services"
                            icon={<Code/>}
                        />
                        <CategoryCard
                            tint="#CB58CF"
                            title="Web"
                            subtitle="23 services"
                            icon={<Web/>}
                        />
                        <CategoryCard
                            tint="#38CF81"
                            title="Configure"
                            subtitle="100 services"
                            icon={<Conf/>}
                        />
                        <CategoryCard
                            tint="#E38538"
                            title="Video"
                            subtitle="204 services"
                            icon={<Video/>}
                        />
                        <CategoryCard
                            tint="#DA579D"
                            title="Skin Design
                            " subtitle="43 services"
                            icon={<Skin/>}
                        />
                        <CategoryCard
                            tint="#8757DA"
                            title="3D Modeling
                            " subtitle="23 services"
                            icon={<Cube/>}
                        />
                    </div>
                    <button className="bg-white rounded-[20px] py-[15px] px-[30px] flex items-center gap-[8px] border-1 border-[#151515]/10 border-solid">
                        View all categories
                        <ArrowRightIcon className="fill-black"/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Categories;
