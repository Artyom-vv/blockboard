import React from 'react';
import CategoryCard from "@/app/(landing)/components/CategoryCard";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import hammer from '@/assets/icons/hammer.png'
import paint from '@/assets/icons/paint.png'
import terminal from '@/assets/icons/terminal.png'
import web from '@/assets/icons/web.png'
import wrench from '@/assets/icons/wrench.png'
import camera from '@/assets/icons/camera.png'
import mp from '@/assets/icons/minecraft-player.png'
import cube from '@/assets/icons/cube.png'

const Categories = () => {
    return (
        <section className="bg-[linear-gradient(180deg,#F2853C_0%,#FFFFFF_100%)] py-[52px]">
            <div className="container">
                <div className="col-start-3 col-span-8 flex flex-col items-center gap-[50px]">
                    <h2 className="text-[60px] font-semibold text-white">Popular categories</h2>
                    <div className="py-[10px] grid grid-cols-4 gap-[30px]">
                        <CategoryCard
                            tint="#5691CD"
                            title="Building"
                            subtitle="100 services"
                            icon={hammer.src}
                        />
                        <CategoryCard
                            tint="#51C6C4"
                            title="Design"
                            subtitle="204 services"
                            icon={paint.src}
                        />
                        <CategoryCard
                            tint="#775FD8"
                            title="Development"
                            subtitle="43 services"
                            icon={terminal.src}
                        />
                        <CategoryCard
                            tint="#CB58CF"
                            title="Web"
                            subtitle="23 services"
                            icon={web.src}
                        />
                        <CategoryCard
                            tint="#38CF81"
                            title="Configure"
                            subtitle="100 services"
                            icon={wrench.src}
                        />
                        <CategoryCard
                            tint="#E38538"
                            title="Video"
                            subtitle="204 services"
                            icon={camera.src}
                        />
                        <CategoryCard
                            tint="#DA579D"
                            title="Skin Design
                            " subtitle="43 services"
                            icon={mp.src}
                        />
                        <CategoryCard
                            tint="#8757DA"
                            title="3D Modeling
                            " subtitle="23 services"
                            icon={cube.src}
                        />
                    </div>
                    <button className="bg-white rounded-[20px] py-[15px] px-[30px] flex items-center gap-[8px] border-1 border-[#151515]/10 border-solid">
                        View all categories
                        <ArrowRightIcon/>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Categories;
