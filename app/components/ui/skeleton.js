import * as React from "react"
import { cn } from "@/app/libs/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted/80 bg-gray-200", className)}
      {...props}
    />
  )
}

export { Skeleton }
