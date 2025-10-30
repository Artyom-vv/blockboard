import React from 'react';
import {Glass} from "@/components/ui/Glass";

const Banner = () => {
    return (
        <div className="container -mt-[120px]">
            <div className="col-start-2 col-span-10 bg-[#0094FF] flex items-center justify-between py-[41px] px-[53px] rounded-[30px]">
                <div className="flex flex-col gap-[10px] text-white">
                    <h2 className="text-[40px] font-bold">Every Talent Matters</h2>
                    <p className="text-[20px] font-medium">Your Creativity and Skills Can Change Someone’s Business</p>
                </div>
                <Glass
                    wrapperClassName="cursor-pointer"
                    radius={30}
                    blurClassName="backdrop-blur-[4px]"
                    baseOpacity={0.14}
                    tint="#ffffff"
                    borderClassName="border border-white/20"
                    highlight
                    highlightAngle={-127}
                    highlightOpacity={0.80}
                    dispersion
                    dispersionIntensity={0}
                    noise={false}
                    interactiveGlow
                    glowRadius={250}
                    glowStrength={0.01}
                    glowBlend="soft-light"
                >
                    <button className="text-white text-[20px] py-[14px] px-[11px]">
                        Join with us
                    </button>
                </Glass>
            </div>
        </div>
    )
};

export default Banner;
