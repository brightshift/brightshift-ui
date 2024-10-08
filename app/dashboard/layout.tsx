"use client"

import React, { PropsWithChildren, useEffect, useState } from "react"
import { dashboardSidebarData } from "@/data"
import cookies from "js-cookie"

import { cn } from "@/lib/utils"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { TooltipProvider } from "@/components/ui/tooltip"

import { DashboardNav, DashboardSidebarNav } from "./main-components"

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const [defaultCollapsed, setIsCollapsed] = useState(true)
  const [defaultLayout, setDefaultLayout] = useState<number[]>([4, 96])

  useEffect(() => {
    const getLayout = cookies.get("react-resizable-panels:layout:mail")
    const isCollapsed = cookies.get("react-resizable-panels:collapsed")

    const LayoutValue = getLayout ? JSON.parse(getLayout) : undefined
    const CollapsedValue = isCollapsed ? JSON.parse(isCollapsed) : false

    setDefaultLayout(LayoutValue)
    setIsCollapsed(CollapsedValue)
  }, [])

  const onDefaultLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(sizes)}`
    setDefaultLayout(sizes)
  }
  const onIsCollapsed = (val: boolean) => {
    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
    setIsCollapsed(val)
  }

  return (
    <div className="min-h-screen ">
      <DashboardNav
        onDefaultLayout={onDefaultLayout}
        onIsCollapsed={onIsCollapsed}
        isCollapsed={defaultCollapsed}
      />

      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => onDefaultLayout(sizes)}
          className="h-full max-h-[800px] min-h-[90vh] items-stretch "
        >
          <ResizablePanel
            defaultSize={defaultLayout?.at(0)}
            collapsedSize={defaultCollapsed ? 0 : 20}
            collapsible={true}
            minSize={15}
            maxSize={20}
            onCollapse={() => onIsCollapsed(true)}
            onResize={() => setIsCollapsed(false)}
            className={cn(
              defaultCollapsed &&
                "min-w-[50px] transition-all duration-300 ease-in-out"
            )}
          >
            <DashboardSidebarNav
              isCollapsed={defaultCollapsed}
              links={dashboardSidebarData}
            />
          </ResizablePanel>
          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={defaultLayout?.at(1)} minSize={30}>
            {children}
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </div>
  )
}

export default DashboardLayout
