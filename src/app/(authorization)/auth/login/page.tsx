"use client";
import AuthPageWrapper from "../../components/wrappers/AuthPageWrapper";
import BlockboardIcon from "@/assets/blockboard_icon_long.svg";
// import MailIcon from "@/assets/icons/mail.svg";
// import EyeIcon from "@/assets/icons/eye.svg";

import GoogleRoundIcon from "@/assets/icons/social/google_icon.svg";
import DiscordRoundIcon from "@/assets/icons/social/discord_logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/CheckBox"
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { apiInstance } from "@/lib/axios";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface LoginInputs {
  login: string;
  password: string;
}

export default function LoginPage() {
  const loginForm = useForm<LoginInputs>();
  const [isPasswordShown, setPasswordShown] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  function signIn(data: LoginInputs) {
    // loginForm.formState.disabled = true
    loginForm.control._disableForm(true);
    // apiInstance

    // TODO
    loginForm.setError('root', { message: "Неверный логин и/или пароль" })
    loginForm.control._disableForm(false);
  }

  return (
    <div className={'flex py-[25px] md:py-0 justify-center w-full items-center flex-col'}>
      {/*<Image src={blockboardIcon} width={200} height={50} alt="Blockboard"/>*/}
      <BlockboardIcon />
      <form onSubmit={loginForm.handleSubmit(signIn)} className={'justify-center items-center lg:items-start flex flex-col mt-[25px] lg:mt-[45px] min-w-[50%] w-full lg:w-max p-[40px]'}>
        <h1 className={'text-[25px] lg:text-[40px] font-semibold text-black/90 text-start'}>Log in to your account</h1>
        <p className={'text-[15px] lg:text-[18px] text-black/60'}>Don’t have an account? <Link className={'text-[#0094FF] hover:underline'} href={'/auth/register'}>Sign Up</Link></p>

        <p className={'mt-[25px] text-start w-full text-[#051321] font-medium'}>Email</p>
        <div className={cn('w-full items-center px-[15px] mt-[5px] h-[40px] rounded-[10px] border-[#E2E4E6] border flex', { 'border-danger text-danger': !!loginForm.formState.errors?.root })}>
          <input {...loginForm.register('login')} className={'disabled:text-black/70 border-none outline-none w-full flex-1'} type={'email'}/>
          {/*<MailIcon/>*/}
          <EnvelopeIcon width={14}/>
          {/*<Image src={mailIcon} className={'text-[#051321]'} width={16} height={16} alt={'mail'}/>*/}
        </div>

        <p className={'mt-[20px] text-start w-full text-[#051321] font-medium'}>Password</p>
        <div className={cn('w-full items-center px-[15px] mt-[5px] h-[40px] rounded-[10px] border-[#E2E4E6] border flex', { 'border-danger text-danger': !!loginForm.formState.errors?.root })}>
          <input {...loginForm.register('password')} className={'disabled:text-black/70 border-none outline-none w-full flex-1'} type={isPasswordShown?'text':'password'}/>
          <div onClick={()=>setPasswordShown(!isPasswordShown)} className={cn('cursor-pointer')}>
            { isPasswordShown ? <EyeSlashIcon width={14}/> : <EyeIcon width={14}/> }
          </div>
        </div>

        <div className={'flex mt-[16px] h-[25px] items-center gap-[10px] w-full'}>
          <Checkbox value={rememberMe?'on':'off'} onCheckedChange={(s)=>setRememberMe(s === true)}/>
          <p className={'text-[#4F4F4F] text-[14px]'}>Remember me</p>
        </div>

        <div className={'h-[51px] w-full mt-[16px]'}>
          <Button type={'submit'} variant={'primary'} size={'fill'}>
            Sign in
          </Button>
        </div>

        {!!loginForm.formState.errors?.root && <p className={'text-[#EB5757] text-[14px] mt-[24px]'}>{loginForm.formState.errors.root.message}</p>}

        <div className={'mt-[24px] flex items-center gap-[10px] w-full'}>
          <div className={'w-full h-[1px] bg-black/10'}/>
          <p className={'w-full text-center text-[14px] text-black/90'}>or Sign in with</p>
          <div className={'w-full h-[1px] bg-black/10'}/>
        </div>

        <div className={'my-[24px] h-[45px] justify-center w-full flex gap-[20px]'}>
          <Button type={'submit'} variant={'transparent'} size={'big'}>
            {/*<Image src={googleRoundIcon} width={20} height={20} alt={'G'}/>*/}
            <GoogleRoundIcon />
            <p className={'text-medium text-black/90'}>Google</p>
          </Button>
          <Button type={'submit'} variant={'transparent'} size={'big'}>
            {/*<Image src={discordRoundIcon} width={20} height={20} alt={'G'}/>*/}
            <DiscordRoundIcon />
            <p className={'text-medium text-black/90'}>Discord</p>
          </Button>

        </div>

        <Link className={'text-[#0094FF]/90 hover:underline'} href={'/auth/forgot-password'}>Forgot your password?</Link>
      </form>
    </div>
  )
}