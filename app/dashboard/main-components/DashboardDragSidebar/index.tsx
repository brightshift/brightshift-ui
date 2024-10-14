import React, { useState } from "react"
import { dashboardSidebarData } from "@/data"
import { GripVertical } from "lucide-react"

import { cn } from "@/lib/utils"

import { Nav } from "./Nav"
import { SidebarFolders } from "./SidebarFolders"

export const DashboardDragSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isFolderOpen, setIsFolderOpen] = useState(false)

  return (
    <div
      className={cn(
        "relative border-r border-gray-800/70 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <SidebarFolders
        isCollapsed={isCollapsed}
        isOpen={isFolderOpen}
        setIsCollapsed={setIsCollapsed}
        setIsOpen={setIsFolderOpen}
      />
      <Nav isCollapsed={isCollapsed} links={dashboardSidebarData} />

      <button
        className="absolute -right-3 top-1/2 -translate-y-1/2 rounded-full  p-1 shadow-md"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <GripVertical className="size-4 cursor-pointer" />
      </button>
    </div>
  )
}
