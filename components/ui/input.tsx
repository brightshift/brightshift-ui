import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isBorderLessEffect?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isBorderLessEffect = false, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md  bg-background px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground    disabled:cursor-not-allowed disabled:opacity-50 ",
          !isBorderLessEffect
            ? "border border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            : // Effect
              " border border-input/30     ring-offset-transparent  hover:border-input/60   focus:border-input   focus-visible:border-input focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0",
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
