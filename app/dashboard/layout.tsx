"use client"

import React, { PropsWithChildren } from "react"

import { DashboardProvider } from "./dashboardProvider"
import { DashboardNav } from "./main-components"
import { DashboardDragSidebar } from "./main-components/DashboardDragSidebar"

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <DashboardProvider>
      <DashboardNav />
      <div className="flex">
        <DashboardDragSidebar />
        <div className="w-full overflow-x-hidden ">{children}</div>
      </div>
    </DashboardProvider>
  )
}

export default DashboardLayout
