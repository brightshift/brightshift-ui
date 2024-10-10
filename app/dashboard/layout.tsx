"use client"

import React, { PropsWithChildren } from "react"
import { dashboardSidebarData } from "@/data"

import { DashboardNav } from "./main-components"
import DashboardSizePanel from "./main-components/DashboardSidePanel"

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen ">
      <DashboardNav />
      <div className="flex ">
        <DashboardSizePanel links={dashboardSidebarData} />

        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
