import * as React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Pagination = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
)
Pagination.displayName = "Pagination"

const PaginationLink = React.forwardRef<HTMLButtonElement, ButtonProps & { isActive?: boolean }>(
  ({ className, isActive, ...props }, ref) => (
    <Button
      ref={ref}
      variant={isActive ? "outline" : "ghost"}
      className={cn(isActive && "bg-muted", className)}
      {...props}
    />
  )
)
PaginationLink.displayName = "PaginationLink"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

const PaginationPrevious = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    variant="ghost"
    className={cn("gap-1 px-0", className)}
    {...props}
  >
    <span className="hidden sm:inline">Previous</span>
    <span className="sm:hidden">←</span>
  </Button>
))
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    variant="ghost"
    className={cn("gap-1 px-0", className)}
    {...props}
  >
    <span className="hidden sm:inline">Next</span>
    <span className="sm:hidden">→</span>
  </Button>
))
PaginationNext.displayName = "PaginationNext"

export {
  Pagination,
  PaginationLink,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
}
