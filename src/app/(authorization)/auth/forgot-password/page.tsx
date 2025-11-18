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
import InitialPasswordReset from "./sections/InitialPasswordReset";
import CodeVerification from "./sections/CodeVerification";
import ResetPassword from "./sections/ResetPassword";
import ResetPwdCompleted from "./sections/ResetPwdCompleted";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<number>(0);

  const [currentEmail, setCurrentEmail] = useState<string|null>(null);
  const [currentVerifyCode, setCurrentVerifyCode] = useState<string|null>(null);


  return (
    <div className={'flex py-[25px] md:py-0 justify-center w-full items-center flex-col'}>
      {/*<Image src={blockboardIcon} width={200} height={50} alt="Blockboard"/>*/}
      <BlockboardIcon />
      {step === 0 && <InitialPasswordReset setStep={setStep} currentEmail={currentEmail} setCurrentEmail={setCurrentEmail} />}
      {step === 1 && <CodeVerification setStep={setStep} currentCode={currentVerifyCode} setCurrentCode={setCurrentVerifyCode} />}
      {step === 2 && <ResetPassword setStep={setStep} setCurrentEmail={setCurrentEmail} setCurrentCode={setCurrentVerifyCode} />}
      {step === 3 && <ResetPwdCompleted />}

    </div>
  )
}