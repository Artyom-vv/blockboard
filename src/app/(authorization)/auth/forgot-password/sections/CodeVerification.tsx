import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface CodeVerificationInputs {
  code: string;
}

export default function CodeVerification({ currentCode, setCurrentCode, setStep }: { currentCode: string|null, setCurrentCode: (email: string) => unknown, setStep: (step: number) => unknown }) {
  const initialResetPwdForm = useForm<CodeVerificationInputs>();
  const [lastCodeRequestedAt, setLastCodeRequestedAt] = useState<Date|null>(null);

  function handleSubmission(data: CodeVerificationInputs) {
    // todo: logic
    setCurrentCode(data.code);
    setStep(2)
  }

  function resendCode() {
    // todo: logic
    setLastCodeRequestedAt(new Date());
  }

  return (
    <form onSubmit={initialResetPwdForm.handleSubmit(handleSubmission)} className={'justify-center items-center lg:items-start flex flex-col mt-[25px] lg:mt-[45px] min-w-[75%] w-full lg:w-max p-[40px]'}>
      <h1 className={'text-[25px] lg:text-[40px] font-semibold text-black/90 text-start'}>Reset your password</h1>
      <p className={'text-[15px] lg:text-[18px] text-black/60'}>Enter account email to send a recovery code</p>

      <p className={'mt-[25px] text-start w-full text-[#051321] font-medium'}>Code</p>
      <div className={cn('w-full items-center px-[15px] mt-[5px] h-[40px] rounded-[10px] border-[#E2E4E6] border flex', { 'border-danger text-danger': !!initialResetPwdForm.formState.errors?.root })}>
        <input {...initialResetPwdForm.register('code')} maxLength={50} className={'disabled:text-black/70 border-none outline-none w-full flex-1'} type={'text'}/>
      </div>

      <div className={'h-[51px] w-full mt-[16px]'}>
        <Button type={'submit'} variant={'primary'} size={'fill'}>
          Verify
        </Button>
      </div>

      {!!initialResetPwdForm.formState.errors?.root && <p className={'text-[#EB5757] text-[14px] mt-[24px]'}>{initialResetPwdForm.formState.errors.root.message}</p>}

      <p className={'text-[#0094FF]/90 hover:underline mt-[24px]'} onClick={resendCode}>Resend Code</p>
      <Link className={'text-[#0094FF]/90 hover:underline mt-[24px]'} href={'/auth/login'}>Remembered your password?</Link>
    </form>
  )
}