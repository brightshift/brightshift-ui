import { useState } from "react"
import { dashboardSidebarData } from "@/data"

import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui"

import { SidebarFolders } from "../SidebarFolders"
import { Nav } from "./Nav"

export const DashboardDragSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isFolderOpen, setIsFolderOpen] = useState(false)
  return (
    <TooltipProvider>
      <div className="min-w-52   border-r border-gray-800/70">
        <div
          className={cn(
            "flex h-[52px] items-center justify-center",
            isCollapsed ? "h-[52px]" : "px-2"
          )}
        >
          <SidebarFolders
            isCollapsed={isCollapsed}
            isOpen={isFolderOpen}
            setIsCollapsed={setIsCollapsed}
            setIsOpen={setIsFolderOpen}
          />
        </div>

        <Nav isCollapsed={isCollapsed} links={dashboardSidebarData} />
      </div>
    </TooltipProvider>
  )
}
