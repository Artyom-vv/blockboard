import React from 'react';

const Services = () => {
    return (
        <section className="py-[40px]">
            <div className="container grid grid-cols-12">
                <div className="col-span-12 flex flex-col items-center gap-[35px]">
                    <h2 className="text-[60px] font-semibold">Services right for you</h2>
                    <div className="w-full h-[870px] bg-[red]"></div>
                    <button>View all services</button>
                </div>
            </div>
        </section>
    )
};

export default Services;
