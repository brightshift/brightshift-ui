import React, { PropsWithChildren } from "react"

import { DashboardNav } from "./components"

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <DashboardNav />
      {children}
    </div>
  )
}

export default DashboardLayout
