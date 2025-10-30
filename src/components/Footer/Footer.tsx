import React, {FC} from 'react';
import ArrowRight from '@/assets/icons/chevron-right.svg'
import Discord from '@/assets/icons/discord.svg'
import X from '@/assets/icons/x.svg'
import Instagram from '@/assets/icons/insta.svg'
import Yt from '@/assets/icons/yt.svg'
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import Location from "@/assets/icons/location.svg";
import Sms from "@/assets/icons/sms-tracking.svg";

const FooterLink: FC<{text: string}> = ({text}) => {
    return (
        <p className="group text-[#5D6772] text-[16px] flex items-center gap-[4px] cursor-pointer hover:text-[#4C5259] transition-colors">
            <ArrowRight
                className="transition-transform duration-200 ease-out group-hover:translate-x-[3px]"/>
            {text}
        </p>
    )
}

const Footer = () => {
    return (
        <footer className="flex flex-col items-center bg-[#F9F9F9] pt-[80px] -mt-[40px] space-y-[40px]">
            <div className="container">
                <div className="col-span-full grid grid-cols-4 gap-[24px]">
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex flex-col space-y-[8px]">
                            <h3 className="text-[18px] font-semibold text-[#051321]">Company</h3>
                            <div className="w-[23px] h-[2px] bg-[#0094FF]"></div>
                        </div>
                        <div className="flex items-start flex-col gap-[12px]">
                            <FooterLink text="About Us"/>
                            <FooterLink text="About Us"/>
                            <FooterLink text="About Us"/>
                            <FooterLink text="About Us"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex flex-col space-y-[8px]">
                            <h3 className="text-[18px] font-semibold text-[#051321]">Support</h3>
                            <div className="w-[23px] h-[2px] bg-[#0094FF]"></div>
                        </div>
                        <div className="flex items-start flex-col gap-[12px]">
                            <FooterLink text="About Us"/>
                            <FooterLink text="About Us"/>
                            <FooterLink text="About Us"/>
                            <FooterLink text="About Us"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex flex-col space-y-[8px]">
                            <h3 className="text-[18px] font-semibold text-[#051321]">Categories</h3>
                            <div className="w-[23px] h-[2px] bg-[#0094FF]"></div>
                        </div>
                        <div className="flex items-start flex-col gap-[12px]">
                            <FooterLink text="About Us"/>
                            <FooterLink text="About Us"/>
                            <FooterLink text="About Us"/>
                            <FooterLink text="About Us"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <div className="flex flex-col space-y-[8px]">
                            <h3 className="text-[18px] font-semibold text-[#051321]">Contact Us</h3>
                            <div className="w-[23px] h-[2px] bg-[#0094FF]"></div>
                        </div>
                        <div className="flex items-start flex-col gap-[12px]">
                            <div className="flex gap-[8px]">
                                <div className="bg-[#040404] shrink-0 size-[40px] flex items-center justify-center rounded-[5px]">
                                    <Location/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[14px] font-semibold text-[#051321]">Address</p>
                                    <p className="text-[16px] text-[#5D6772]">367 Hillcrest Lane, Irvine,
                                        California,USA</p>
                                </div>
                            </div>
                            <div className="flex gap-[8px]">
                                <div className="bg-[#040404] shrink-0 size-[40px] flex items-center justify-center rounded-[5px]">
                                    <Sms/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[14px] font-semibold text-[#051321]">Email</p>
                                    <a href="mailto:info@example.com" className="text-[16px] text-[#5D6772]">Info@example.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom py-[20px] border-t-1 border-[#E2E4E6] w-full">
                <div className="container">
                    <div className="col-span-full flex items-center justify-between">
                        <Link href="/"><Logo/></Link>
                        <div className="flex gap-[8px]">
                            <div
                                className="size-[34px] bg-white flex items-center justify-center rounded-full cursor-pointer">
                                <Discord/>
                            </div>
                            <div className="size-[34px] bg-white flex items-center justify-center rounded-full cursor-pointer">
                                <X/>
                            </div>
                            <div className="size-[34px] bg-white flex items-center justify-center rounded-full cursor-pointer">
                                <Instagram/>
                            </div>
                            <div className="size-[34px] bg-white flex items-center justify-center rounded-full cursor-pointer">
                                <Yt/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full flex justify-between">
                        <p className="text-[16px] text-[#051321]">Copyright © 2025 BlockBoard. All rights reserved.</p>
                        <div className="flex gap-[24px] [&>p]:cursor-pointer">
                            <p className="text-[16px] text-[#0094FF]">Privacy Policy</p>
                            <p className="text-[16px] text-[#051321]">Terms & Conditions</p>
                            <p className="text-[16px] text-[#051321]">Cancellation Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
