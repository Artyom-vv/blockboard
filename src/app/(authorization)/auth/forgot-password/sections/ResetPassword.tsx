import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface PasswordResetInputs {
  password: string;
  pwd_verify: string;
}

export default function CodeVerification({ setStep, setCurrentEmail, setCurrentCode }: { setStep: (step: number) => unknown, setCurrentEmail: (email: string) => unknown, setCurrentCode: (code: string) => unknown }) {
  const resetPwdForm = useForm<PasswordResetInputs>();
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  function handleSubmission(data: PasswordResetInputs) {
    setCurrentCode('');
    setCurrentEmail('');
    setStep(3);
  }

  return (
    <form onSubmit={resetPwdForm.handleSubmit(handleSubmission)} className={'justify-center items-center lg:items-start flex flex-col mt-[25px] lg:mt-[45px] min-w-[75%] w-full lg:w-max p-[40px]'}>
      <h1 className={'text-[25px] lg:text-[40px] font-semibold text-black/90 text-start'}>Reset your password</h1>
      <p className={'text-[15px] lg:text-[18px] text-black/60'}>Enter account email to send a recovery code</p>

      <p className={'mt-[25px] text-start w-full text-[#051321] font-medium'}>Password</p>
      <div className={cn('w-full items-center px-[15px] mt-[5px] h-[40px] rounded-[10px] border-[#E2E4E6] border flex', { 'border-danger text-danger': !!resetPwdForm.formState.errors?.root })}>
        <input {...resetPwdForm.register('password')} maxLength={50} className={'disabled:text-black/70 border-none outline-none w-full flex-1'} type={passwordShown?'text':'password'}/>
        <div onClick={()=>setPasswordShown(!passwordShown)} className={cn('cursor-pointer')}>
          { passwordShown ? <EyeSlashIcon width={14}/> : <EyeIcon width={14}/> }
        </div>
      </div>

      <p className={'mt-[25px] text-start w-full text-[#051321] font-medium'}>Confirm password</p>
      <div className={cn('w-full items-center px-[15px] mt-[5px] h-[40px] rounded-[10px] border-[#E2E4E6] border flex', { 'border-danger text-danger': !!resetPwdForm.formState.errors?.root })}>
        <input {...resetPwdForm.register('pwd_verify')} maxLength={50} className={'disabled:text-black/70 border-none outline-none w-full flex-1'} type={passwordShown?'text':'password'}/>
        <div onClick={()=>setPasswordShown(!passwordShown)} className={cn('cursor-pointer')}>
          { passwordShown ? <EyeSlashIcon width={14}/> : <EyeIcon width={14}/> }
        </div>
      </div>

      <div className={'h-[51px] w-full mt-[16px]'}>
        <Button type={'submit'} variant={'primary'} size={'fill'}>
          Verify
        </Button>
      </div>

      {!!resetPwdForm.formState.errors?.root && <p className={'text-[#EB5757] text-[14px] mt-[24px]'}>{resetPwdForm.formState.errors.root.message}</p>}

      <Link className={'text-[#0094FF]/90 hover:underline mt-[24px]'} href={'/auth/login'}>Remembered your password?</Link>
    </form>
  )
}