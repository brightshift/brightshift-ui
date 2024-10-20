import React, { useState } from "react"
import { dashboardSidebarData } from "@/data"
import { AlignJustify } from "lucide-react"

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

import { FolderMenu } from "./FolderNext"
import { Nav } from "./Nav"

interface Props extends React.ComponentPropsWithoutRef<"div"> {}

export const DashboardDragSidebar = ({ className }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={cn(
        "relative border-r border-border transition-all duration-300 ease-in-out",
        className,
        isCollapsed ? "w-14" : "w-64"
      )}
    >
      <FolderMenu
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <Nav isCollapsed={isCollapsed} links={dashboardSidebarData} />

      <button
        className=" absolute -right-3 top-6  z-40 -translate-x-px rotate-45    rounded-sm border-r border-t  border-border bg-background p-1 shadow-md "
        onClick={() => {
          setIsCollapsed(!isCollapsed)
          setIsExpanded(false)
        }}
      >
        <AlignJustify className="size-3 -rotate-45 cursor-pointer" />
      </button>
    </div>
  )
}
