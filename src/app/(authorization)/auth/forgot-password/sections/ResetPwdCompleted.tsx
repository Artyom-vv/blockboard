import Button from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ResetPwdCompleted() {
  return (
    <div className={'justify-center items-center lg:items-start flex flex-col mt-[25px] lg:mt-[45px] max-w-[75%] min-w-[75%] w-full lg:w-max p-[40px]'}>
      <h1 className={'text-[25px] lg:text-[38px] font-semibold text-black/90 text-center'}>You’re successfully changed your password!</h1>
      <Link href={'/auth/login'} className={'h-[51px] w-full mt-[25px]'}>
        <Button type={'button'} variant={'primary'} size={'fill'}>
          Back to login page
        </Button>
      </Link>
    </div>
  )
}