import Logo from '@/assets/logo.svg';
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-[25px] left-1/2 -translate-x-1/2 container grid grid-cols-12">
            <div className="col-span-12 flex justify-between items-center bg-[#F9F7F7CC] py-[21px] px-[33px] rounded-[30px]">
                <Link href="/">
                    <Logo/>
                </Link>
                <ul className="flex gap-[20px] list-none">
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
                <button className="bg-[#0094FF] text-white py-[12px] text-[18px] px-[26px] rounded-[30px] font-medium">Sign in</button>
            </div>
        </header>
    )
}

export default Header