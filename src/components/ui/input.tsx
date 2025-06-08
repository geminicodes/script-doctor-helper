
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full border-4 border-black dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-lg font-bold text-black dark:text-white ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-bold file:text-black dark:file:text-white placeholder:text-black/70 dark:placeholder:text-white/70 placeholder:font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-lg",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
