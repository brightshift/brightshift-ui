"use client";

import React, { PropsWithChildren, useState } from "react";
import cookies from "js-cookie";



import { cn } from "@/lib/utils";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { TooltipProvider } from "@/components/ui/tooltip";



import { DashboardNav } from "./components";
import { DashboardSidebar } from "./components/dashboardSidebar/DashboardSidebar";


const DashboardLayout = ({ children }: PropsWithChildren) => {
  const layout = cookies.get("react-resizable-panels:layout:mail")
  const collapsed = cookies.get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout) : [20, 32, 48]
  const defaultCollapsed = collapsed
    ? JSON.parse(collapsed)
    : (false as boolean)

  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  return (
    <div className="min-h-screen ">
      <DashboardNav setIsCollapsed={setIsCollapsed} />

      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(sizes)}`
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
              setIsCollapsed(true)
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
            }}
            onResize={() => {
              setIsCollapsed(false)
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
            }}
            className={cn(
              isCollapsed &&
                "min-w-[50px] transition-all duration-300 ease-in-out"
            )}
          >
            <DashboardSidebar isCollapsed={isCollapsed} />
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