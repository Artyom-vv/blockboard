import AuthPageWrapper from "./components/wrappers/AuthPageWrapper";
import {ReactNode} from "react";

export default function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <AuthPageWrapper>
      {children}
    </AuthPageWrapper>
  )
}