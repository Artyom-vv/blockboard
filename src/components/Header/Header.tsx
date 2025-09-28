import Logo from '@/assets/logo.svg';
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-[25px] left-1/2 -translate-x-1/2 container grid grid-cols-12 z-50">
            <div
                className="
      col-span-12 flex justify-between items-center
      bg-[#F9F7F7CC] backdrop-blur-[14px]
      border border-white/30 rounded-[30px]
      relative overflow-hidden
      py-[21px] px-[33px]
    "
            >
                {/* блик под -45° */}
                <div
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(-45deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.18)_35%,rgba(255,255,255,0)_65%)]"></div>

                {/* лёгкая хроматическая аберрация (Dispersion) */}
                <div
                    className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px_rgba(255,0,128,0.10),inset_0_0_0_2px_rgba(0,128,255,0.10)]"></div>

                {/* слабый frost-шум */}
                <div
                    className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-5"
                    style={{
                        backgroundImage:
                            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2240%22 height=%2240%22 filter=%22url(%23n)%22 opacity=%220.25%22/></svg>')",
                    }}
                ></div>

                {/* Контент шапки */}
                <Link href="/">
                    <Logo/>
                </Link>

                <ul className="flex gap-[20px] list-none relative z-10">
                    <li>
                        <a className="link" href="#">Home</a>
                    </li>
                    <li>
                        <a className="link" href="#">Categories</a>
                    </li>
                    <li>
                        <a className="link text-[#1091FB]" href="#">Become an expert</a>
                    </li>
                </ul>

                <button
                    className="bg-[#0094FF] text-white py-[12px] text-body-300 px-[26px] rounded-[30px] relative z-10">
                    Sign in
                </button>
            </div>
        </header>

    )
}

export default Header