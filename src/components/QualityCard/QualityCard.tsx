import React from 'react';
import {Glass} from "@/components/ui/Glass";

const QualityCard = () => {
    return (
        <Glass
            wrapperClassName="grow h-[233px] max-w-[261px]"
            contentClassName="py-[30px] px-[20px] flex flex-col gap-[10px]"
            radius={30}
            blurClassName="backdrop-blur-[14px]"
            tint="#ffffff"
            baseOpacity={0.30}
            borderClassName="border border-white/20"
            highlight
            highlightAngle={-127}
            highlightOpacity={0.80}
            dispersion
            dispersionIntensity={0.12}
            noise={false}
            interactiveGlow
            glowRadius={350}
            glowStrength={0.15}
            glowBlend="soft-light"
        >
            <div className="flex">
                <div className="shrink-0 size-[64px]"></div>
                <p className="text-[22px] font-bold">All talents in one place</p>
            </div>
            <p className="text-[#535353] text-[17px]">All talents in one place
                Find the right specialist for any task — quickly and easily.</p>
        </Glass>
    );
};

export default QualityCard;
