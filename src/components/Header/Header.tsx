"use client"

import Logo from '@/assets/logo.svg';
import Link from "next/link";
import {useScrollbarWidth} from "@/hooks/useScrollbarWidth";
import {Glass} from "@/components/ui/Glass";

const Header = () => {
    const scrollbarWidth = useScrollbarWidth()

    return (
        <header
            style={{paddingRight: scrollbarWidth ? scrollbarWidth + "px" : "15px"}}
            className="fixed top-[25px] left-0 w-[100vw] z-50"
        >
            <div className="container grid grid-cols-12">
                <Glass
                    wrapperClassName="col-span-12"
                    contentClassName="flex justify-between items-center"
                    insetPadding="py-[21px] px-[33px]"
                    blurClassName="backdrop-blur-[11px]"
                    radius={30}
                    tint="#F9F7F7"
                    baseOpacity={0.6}
                    dispersion
                    noise
                    highlight
                    borderClassName="border border-white/30"
                    interactiveGlow
                    glowRadius={800}
                    glowStrength={0.4}
                    glowBlend="soft-light"
                >
                    <Link href="/"><Logo/></Link>

                    <ul className="flex gap-[20px] list-none">
                        <li><a className="link" href="#">Home</a></li>
                        <li><a className="link" href="#">Categories</a></li>
                        <li><a className="link text-[#1091FB]" href="#">Become an expert</a></li>
                    </ul>

                    <button className="bg-[#0094FF] text-white py-[12px] text-body-300 px-[26px] rounded-[30px]">
                        Sign in
                    </button>
                </Glass>
            </div>
        </header>

    )
}

export default Header