"use client"

import React, { PropsWithChildren } from "react"
import cookies from "js-cookie"

import { DashboardNav } from "./components"
import { DashboardSidebar } from "./components/dashboardSidebar"



import { accounts, mails } from "@/data/dashboard.data"



const DashboardLayout = ({ children }: PropsWithChildren) => {
    const layout = cookies.get("react-resizable-panels:layout:mail")
  const collapsed = cookies.get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed) : undefined

  return (
    <div>
      <DashboardNav />
      <DashboardSidebar
        accounts={accounts}
        mails={mails}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
      />
      {children}
    </div>
  )
}

export default DashboardLayout
