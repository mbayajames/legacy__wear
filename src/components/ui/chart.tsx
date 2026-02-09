"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Custom responsive container component
const Chart = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex aspect-video justify-center p-4",
      className
    )}
    {...props}
  />
))
Chart.displayName = "Chart"

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative w-full",
      className
    )}
    {...props}
  />
))
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = ({
  className,
  ...props
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "rounded-lg border bg-background p-2 text-sm shadow-md",
        className
      )}
      {...props}
    />
  )
}

export {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
}
