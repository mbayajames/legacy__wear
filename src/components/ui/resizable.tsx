import * as React from "react"
import {
  Group as GroupComponent,
  Panel as PanelComponent,
  Separator as SeparatorComponent,
} from "react-resizable-panels"

import { cn } from "@/lib/utils"

const PanelGroup = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<typeof GroupComponent>, "elementRef"> & {
    elementRef?: React.Ref<HTMLDivElement>
  }
>(({ className, ...props }, ref) => (
  <GroupComponent
    elementRef={ref}
    className={cn(
      "flex flex-col md:flex-row data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
))
PanelGroup.displayName = "PanelGroup"

const Panel = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<typeof PanelComponent>, "elementRef"> & {
    elementRef?: React.Ref<HTMLDivElement>
  }
>(({ className, ...props }, ref) => (
  <PanelComponent
    elementRef={ref}
    className={cn("flex relative", className)}
    {...props}
  />
))
Panel.displayName = "Panel"

const PanelResizeHandle = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<typeof SeparatorComponent>, "elementRef"> & {
    elementRef?: React.Ref<HTMLDivElement>
  }
>(({ className, ...props }, ref) => (
  <SeparatorComponent
    elementRef={ref}
    className={cn(
      "relative flex w-1 md:w-px h-px md:h-1 items-center justify-center bg-border transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
      className
    )}
    {...props}
  />
))
PanelResizeHandle.displayName = "PanelResizeHandle"

export { Panel, PanelGroup, PanelResizeHandle }
