
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-black text-black ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-4 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[2px_2px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 duration-150",
  {
    variants: {
      variant: {
        default: "bg-yellow-400 hover:bg-yellow-300 text-black",
        destructive: "bg-red-400 hover:bg-red-300 text-black",
        outline: "border-4 border-black bg-white hover:bg-gray-100 text-black",
        secondary: "bg-green-400 hover:bg-green-300 text-black",
        ghost: "border-0 shadow-none hover:shadow-none transform-none hover:transform-none bg-transparent hover:bg-gray-100 text-black",
        link: "border-0 shadow-none hover:shadow-none transform-none hover:transform-none text-black underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3 text-lg",
        sm: "h-10 px-4 py-2 text-base",
        lg: "h-16 px-8 py-4 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
