import React from 'react';
import CategoryCard from "@/app/(landing)/components/CategoryCard";

const Categories = () => {
    return (
        <section className="bg-[linear-gradient(180deg,#F2853C_0%,#FFFFFF_100%)] py-[52px]">
            <div className="container">
                <div className="col-start-3 col-span-8 flex flex-col items-center gap-[50px]">
                    <h2 className="text-[60px] font-semibold text-white">Popular categories</h2>
                    <div className="py-[10px] grid grid-cols-4 gap-[30px]">
                        <CategoryCard tint="#5691CD" title="Building" subtitle="100 services"/>
                        <CategoryCard tint="#51C6C4" title="Design" subtitle="204 services"/>
                        <CategoryCard tint="#775FD8" title="Development" subtitle="43 services"/>
                        <CategoryCard tint="#CB58CF" title="Web" subtitle="23 services"/>
                        <CategoryCard tint="#38CF81" title="Configure" subtitle="100 services"/>
                        <CategoryCard tint="#E38538" title="Video" subtitle="204 services"/>
                        <CategoryCard tint="#DA579D" title="Skin Design" subtitle="43 services"/>
                        <CategoryCard tint="#8757DA" title="3D Modeling" subtitle="23 services"/>
                    </div>
                    <button>View all categories</button>
                </div>
            </div>
        </section>
    );
};

export default Categories;
