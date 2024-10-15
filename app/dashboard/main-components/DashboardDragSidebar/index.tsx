import React, { useState } from "react"
import { dashboardSidebarData } from "@/data"
import { AlignJustify, GripVertical } from "lucide-react"

import { cn } from "@/lib/utils"

import { FolderMenu } from "./FolderNext"
import { Nav } from "./Nav"

export const DashboardDragSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={cn(
        "relative border-r border-gray-800/70 transition-all duration-300 ease-in-out",
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
        className="clip-path-[polygon(100%_41%,0_0,0_100%)] absolute -right-3 top-6  z-50 rotate-45 rounded-sm    bg-background p-1 shadow-md"
        onClick={() => {
          setIsCollapsed(!isCollapsed)
          setIsExpanded(false)
        }}
        style={{
          borderTop: `0.5px solid white`,
          borderRight: `0.5px solid white`,
        }}
      >
        <AlignJustify className="size-3 -rotate-45 cursor-pointer" />
      </button>
    </div>
  )
}
