import React, {FC} from 'react';
import {Glass} from "@/components/ui/Glass";

interface QualityCardProps {
    icon: React.ReactNode;
    title: string;
    text: string;
}

const QualityCard: FC<QualityCardProps> = ({icon, title, text}) => {
    return (
        <Glass
            wrapperClassName="grow h-[233px] max-w-[261px]"
            contentClassName="py-[30px] px-[20px] flex flex-col gap-[10px] h-full"
            radius={30}
            blurClassName="backdrop-blur-[4px]"
            tint="#ffffff"
            baseOpacity={0.1}
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
            <div className="flex items-center">
                <div className="shrink-0 size-[64px]">
                    {icon}
                </div>
                <p className="text-[22px] font-bold">{title}</p>
            </div>
            <p className="text-[#535353] text-[17px]">{text}</p>
        </Glass>
    );
};

export default QualityCard;
