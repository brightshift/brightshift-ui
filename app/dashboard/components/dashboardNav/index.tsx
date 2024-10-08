import React from "react"

import { Button } from "@/components/ui"

import { MainNav } from "./main-nav"
import { Search } from "./search"
import { UserNav } from "./user-nav"

interface Props extends React.ComponentProps<"div"> {
  setIsCollapsed: React.Dispatch<any>
}

export const DashboardNav = ({ setIsCollapsed, ...props }: Props) => {
  return (
    <div {...props}>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Button
            className="px-8"
            onClick={() => {
              // document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify([4, 96])}`
              // setDefaultLayout([4, 96])
              setIsCollapsed((pre: boolean) => !pre)
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
