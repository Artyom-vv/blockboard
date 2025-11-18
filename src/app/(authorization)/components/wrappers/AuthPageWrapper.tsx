import { ReactNode } from "react";
import backDropImage from "@/assets/auth/auth_backdrop.png"

export default function AuthPageWrapper({ children }: { children: ReactNode }) {


  return (
    <div className={'flex flex-row h-full'}>
      <div className={`hidden lg:flex w-dvh h-dvh bg-no-repeat bg-cover`} style={{ backgroundImage: `url(${backDropImage.src})` }} />
      <div className={'flex flex-1 h-full justify-center items-center min-w-[50%] lg:w-full'}>
        {children}
      </div>
    </div>
  )
}