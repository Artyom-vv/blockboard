import React from 'react';
import QualityCard from "@/components/QualityCard/QualityCard";

const Quality = () => {
    return (
        <section className="h-[595px] bg-gradient-to-b from-white to-[#46b3ce] flex items-center">
            <div className="container grid grid-cols-12">
                <div className="flex col-span-12 gap-[12px] items-center">
                    <h1 className="basis-[457px]">What makes Blockboard different?</h1>
                    <div className="grow flex justify-end gap-[10px] py-[10px]">
                        <QualityCard/>
                        <QualityCard/>
                        <QualityCard/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quality;
