"use client"

import React, { PropsWithChildren } from "react"
import { dashboardSidebarData } from "@/data"

import { DashboardProvider } from "./dashboardProvider"
import { DashboardNav } from "./main-components"
import DashboardSizePanel from "./main-components/DashboardSidePanel"

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <DashboardProvider>
      <DashboardNav />
      <div className="flex  ">
        <DashboardSizePanel links={dashboardSidebarData} />

        {children}
      </div>
    </DashboardProvider>
  )
}

export default DashboardLayout
