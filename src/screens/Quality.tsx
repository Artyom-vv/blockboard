import React from 'react';
import QualityCard from "@/components/QualityCard/QualityCard";
import WordShape from '@/assets/word-shape.svg'
import BgShape from '@/assets/quality-bg-shape.svg'
import Checkmark from '@/assets/icons/checkmark-seal-svgrepo-com.svg'
import Finance from '@/assets/icons/money-finance-business-cash-currency-coin-save-svgrepo-com.svg'
import People from '@/assets/icons/people-svgrepo-com.svg'

const Quality = () => {
    return (
        <section className="h-[595px] bg-gradient-to-b from-white to-[#46b3ce] flex items-center overflow-hidden">
            <div className="container grid grid-cols-12 relative">
                <BgShape className="absolute -right-[800px] -bottom-[720px]"/>
                <div className="flex col-span-12 gap-[12px] items-center">
                    <h1 className="relative basis-[457px]">
                        <span className="relative z-20">What makes Blockboard different?</span>
                        <WordShape className="absolute top-[73px] -left-[25px]" />
                    </h1>
                    <div className="grow flex justify-end gap-[10px] py-[10px]">
                        <QualityCard
                            title="All talents in one place"
                            text="All talents in one place
                Find the right specialist for any task — quickly and easily."
                            icon={<Checkmark/>}
                        />
                        <QualityCard
                            title="Financial Protection"
                            text="Your money is securely held and released to the freelancer only after the work is successfully completed."
                            icon={<Finance/>}
                        />
                        <QualityCard
                            title="Simple Collaboration"
                            text="Keep all project discussions in one place — clear and organized."
                            icon={<People/>}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quality;
