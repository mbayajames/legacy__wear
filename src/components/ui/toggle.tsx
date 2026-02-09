import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-accent hover:text-accent-foreground",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof toggleVariants> {
  pressed?: boolean
  defaultPressed?: boolean
  onPressedChange?: (pressed: boolean) => void
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, variant, size, pressed, defaultPressed, onPressedChange, disabled, ...props }, ref) => {
    const [internalPressed, setInternalPressed] = React.useState(defaultPressed ?? false)
    
    const isControlled = pressed !== undefined
    const isPressed = isControlled ? pressed : internalPressed
    
    const handleClick = () => {
      if (disabled) return
      
      if (!isControlled) {
        setInternalPressed(!isPressed)
      }
      onPressedChange?.(!isPressed)
    }

    return (
      <button
        ref={ref}
        className={cn(toggleVariants({ variant, size, className }))}
        disabled={disabled}
        onClick={handleClick}
        data-pressed={isPressed}
        {...props}
      />
    )
  }
)
Toggle.displayName = "Toggle"

export { Toggle }
