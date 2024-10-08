"use client"

import React, { PropsWithChildren } from "react"
import { dashboardSidebarData } from "@/data"
import reactUseCookie from "react-use-cookie"

import { cn } from "@/lib/utils"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { TooltipProvider } from "@/components/ui/tooltip"

import { DashboardNav, DashboardSidebarNav } from "./components"

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const [collapsed, setIsCollapsed] = reactUseCookie(
    "react-resizable-panels:collapsed"
  )
  const [layout, setLayout] = reactUseCookie(
    "react-resizable-panels:layout:mail"
  )

  const defaultLayout: number[] = layout ? JSON.parse(layout) : [20, 32, 48]
  const defaultCollapsed: boolean = collapsed ? JSON.parse(collapsed) : false

  return (
    <div className="min-h-screen ">
      <DashboardNav setIsCollapsed={setIsCollapsed} />

      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => {
            setLayout(JSON.stringify(sizes))
          }}
          className="h-full max-h-[800px] min-h-[90vh] items-stretch "
        >
          <ResizablePanel
            defaultSize={defaultLayout[0]}
            collapsedSize={4}
            collapsible={true}
            minSize={15}
            maxSize={20}
            onCollapse={() => {
              setIsCollapsed(JSON.stringify(true))
            }}
            onResize={() => {
              setIsCollapsed(JSON.stringify(false))
            }}
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

          <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
            {children}
            {/* <EmailList />  */}
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </div>
  )
}

export default DashboardLayout
