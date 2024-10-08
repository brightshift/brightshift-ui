import React from "react"

import { Button } from "@/components/ui"

import { MainNav } from "./main-nav"
import { Search } from "./search"
import { UserNav } from "./user-nav"

interface Props extends React.ComponentProps<"div"> {
  onDefaultLayout: (sizes: number[]) => void
  onIsCollapsed: (val: boolean) => void
  isCollapsed: boolean
}

export const DashboardNav = ({
  onDefaultLayout,
  onIsCollapsed,
  isCollapsed,
  ...props
}: Props) => {
  return (
    <div {...props}>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Button
            className="px-8"
            onClick={() => {
              // onIsCollapsed(isCollapsed ? false : true)
              // onDefaultLayout(isCollapsed ? [4, 96] : [16.9831516353, 83.0168483647])
              //
              // onDefaultLayout([16, 83])
              // onDefaultLayout([4, 96])
            }}
          >
            Open
          </Button>
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  )
}
