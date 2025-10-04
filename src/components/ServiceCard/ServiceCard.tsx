import React, {FC} from 'react';

export interface ServiceCardProps {
    src: string
    title: string
}

const ServiceCard: FC<ServiceCardProps> = ({src, title}) => {
    return (
        <div className="flex flex-col bg-white rounded-[15px]">
            <img className="relative z-10 h-[209px] w-full rounded-[15px]" src={src} alt={title}/>
            <div className="-mt-[17px] content border-1 border-black/10 border-solid px-[20px] py-[27px] rounded-[15px] rounded-t-none">
                <div className="flex flex-col gap-[7px]">
                    <div className="flex gap-[4px]">
                        <span
                            className="cursor-pointer p-[3px] medium text-[16px] rounded-[3px] bg-[#F6F6F6]">Programming & Tech </span>
                    </div>
                    <p className="cursor-pointer text-[20px] color-black medium">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
