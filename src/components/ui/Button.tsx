import { cn } from "@/lib/cn";
import { cva } from "class-variance-authority";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;

  size: "fill"|"big"
  variant: "primary"|"transparent"
}

export default function Button({ children, className, disabled, type, style, ...props }: ButtonProps) {
  const buttonTypes = cva('button', {
    variants: {
      size: {
        fill: "w-full h-full rounded-[20px] flex justify-center text-[14px] items-center gap-[10px] text-center",
        big: 'flex justify-center h-full px-[50px] rounded-[20px] px-auto text-[14px] items-center text-center gap-[10px]'
      },
      variant: {
        primary: "duration-[.2s] bg-[#0094FF] text-white hover:scale-[1.01] active:scale-[0.99]",
        transparent: "duration-[.2s] border border-black/10 bg-transparent text-black shadow-lg hover:scale-[1.01] active:scale-[0.99]",
      }
    },
    defaultVariants: {
      size: 'fill',
      variant: 'primary'
    }
  })

  return (
    <button {...props} className={cn(className, buttonTypes({ size: props.size, variant: props.variant }))}>
      {children}
    </button>
  )
}