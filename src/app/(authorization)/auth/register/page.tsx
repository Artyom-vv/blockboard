"use client";
import AuthPageWrapper from "../../components/wrappers/AuthPageWrapper";
import BlockboardIcon from "@/assets/blockboard_icon_long.svg";
import GoogleRoundIcon from "@/assets/icons/social/google_icon.svg";
import DiscordRoundIcon from "@/assets/icons/social/discord_logo.svg";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/CheckBox"
import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { apiInstance } from "@/lib/axios";
import {EnvelopeIcon, EyeIcon, EyeSlashIcon, UserIcon } from "@heroicons/react/24/outline";

interface RegisterInputs {
  name: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const registerForm = useForm<RegisterInputs>();
  const [isPasswordShown, setPasswordShown] = useState<boolean>(false);
  const [aggreement, setAggreement] = useState<boolean>(false);

  function signUp(data: RegisterInputs) {
    // loginForm.formState.disabled = true
    registerForm.control._disableForm(true);
    // apiInstance

    // TODO
    registerForm.setError('root', { message: "Неверный логин и/или пароль" })
    registerForm.control._disableForm(false);
  }

  useEffect(() => {
    if(registerForm.formState.disabled && aggreement){
      registerForm.control._disableForm(false);
    }
  }, [aggreement]);

  return (
    <div className={'flex py-[25px] md:py-0 justify-center w-full items-center flex-col'}>
      {/*<Image src={blockboardIcon} width={200} height={50} alt="Blockboard"/>*/}
      <BlockboardIcon />
      <form onSubmit={registerForm.handleSubmit(signUp)} className={'justify-center items-center lg:items-start flex flex-col mt-[25px] lg:mt-[45px] min-w-[75%] w-full lg:w-max p-[40px]'}>
        <h1 className={'text-[25px] lg:text-[40px] font-semibold text-black/90 text-start'}>Create account</h1>
        <p className={'text-[15px] lg:text-[18px] text-black/60'}>Already have an account? <Link className={'text-[#0094FF] hover:underline'} href={'/auth/login'}>Sign In</Link></p>

        <p className={'mt-[25px] text-start w-full text-[#051321] font-medium'}>Name</p>
        <div className={cn('w-full items-center px-[15px] mt-[5px] h-[40px] rounded-[10px] border-[#E2E4E6] border flex', { 'border-danger text-danger': !!registerForm.formState.errors?.root })}>
          <input {...registerForm.register('name')} maxLength={50} className={'disabled:text-black/70 border-none outline-none w-full flex-1'} type={'text'}/>
          <UserIcon width={14}/>
        </div>

        <p className={'mt-[25px] text-start w-full text-[#051321] font-medium'}>Email</p>
        <div className={cn('w-full items-center px-[15px] mt-[5px] h-[40px] rounded-[10px] border-[#E2E4E6] border flex', { 'border-danger text-danger': !!registerForm.formState.errors?.root })}>
          <input {...registerForm.register('name')} maxLength={50} className={'disabled:text-black/70 border-none outline-none w-full flex-1'} type={'text'}/>
          <EnvelopeIcon width={14}/>
        </div>

        <p className={'mt-[20px] text-start w-full text-[#051321] font-medium'}>Password</p>
        <div className={cn('w-full items-center px-[15px] mt-[5px] h-[40px] rounded-[10px] border-[#E2E4E6] border flex', { 'border-danger text-danger': !!registerForm.formState.errors?.root })}>
          <input {...registerForm.register('password')} className={'disabled:text-black/70 border-none outline-none w-full flex-1'} type={isPasswordShown?'text':'password'}/>
          <div onClick={()=>setPasswordShown(!isPasswordShown)} className={cn('cursor-pointer')}>
            { isPasswordShown ? <EyeSlashIcon width={14}/> : <EyeIcon width={14}/> }
          </div>
        </div>

        <div className={'flex mt-[16px] h-[25px] items-center gap-[10px] w-full'}>
          <Checkbox value={aggreement?'on':'off'} onCheckedChange={(s)=>setAggreement(s === true)}/>
          <p className={'text-[#4F4F4F] text-[14px]'}>I agree to <Link className={'text-[#0094FF] hover:underline'} href={'/terms-of-use'}>Terms of Use</Link> and <Link className={'text-[#0094FF] hover:underline'} href={'/privacy-policy'}>Privacy Policy</Link></p>
        </div>

        <div className={'h-[51px] w-full mt-[16px]'}>
          <Button type={'submit'} variant={'primary'} size={'fill'}>
            Sign up
          </Button>
        </div>

        {!!registerForm.formState.errors?.root && <p className={'text-[#EB5757] text-[14px] mt-[24px]'}>{registerForm.formState.errors.root.message}</p>}

        <div className={'mt-[24px] flex items-center gap-[10px] w-full'}>
          <div className={'w-full h-[1px] bg-black/10'}/>
          <p className={'w-full text-center text-[14px] text-black/90'}>or Sign up with</p>
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
      </form>
    </div>
  )
}