import * as React from "react";
import {Glass} from "@/components/ui/Glass";
import {cn} from "@/lib/cn";

interface CategoryCardProps {
    title: string;
    subtitle?: string;
    icon: string;
    tint: string;
    className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
                                                       title,
                                                       subtitle,
                                                       icon,
                                                       tint,
                                                       className,
                                                   }) => {
    return (
        <Glass
            wrapperClassName="cursor-pointer w-full max-w-[260px]"
            contentClassName={cn(
                "grow h-[159px] p-[20px] flex flex-col",
                className
            )}
            radius={25}
            blurClassName="backdrop-blur-[14px]"
            tint={tint}
            baseOpacity={0.40}
            borderClassName="border border-white/20"
            highlight
            highlightAngle={-127}
            highlightOpacity={0.80}
            dispersion
            dispersionIntensity={0.12}
            noise={false}
            interactiveGlow
            glowRadius={260}
            glowStrength={0.3}
            glowBlend="soft-light"
        >

            <div className="rounded-[10px] flex justify-center grow">
                {icon && (
                    <img className="w-[52px] h-[52px]" src={icon} alt={title}/>
                )}
            </div>
            <div className="flex flex-col gap-[6px]">
                <div className="text-[20px] font-semibold text-white">{title}</div>
                {subtitle && (
                    <div className="text-body-300 text-white">
                        {subtitle}
                    </div>
                )}
            </div>
        </Glass>
    );
};

export default CategoryCard;
