import React from 'react';

const Categories = () => {
    return (
        <section className="bg-[linear-gradient(180deg,#F2853C_0%,#FFFFFF_100%)] py-[52px]">
            <div className="container grid grid-cols-12">
                <div className="col-start-3 col-span-8 flex flex-col items-center gap-[50px]">
                    <h2 className="text-[60px] font-semibold text-white">Popular categories</h2>
                    <div className="w-[1000px] h-[368px] bg-[red]"></div>
                    <button>View all categories</button>
                </div>
            </div>
        </section>
    );
};

export default Categories;
