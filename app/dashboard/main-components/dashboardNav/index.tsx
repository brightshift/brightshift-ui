import React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui"

import { MainNav } from "./main-nav"
import { MainNavLarge } from "./main-nav-large"
import { Search } from "./search"
import { UserNav } from "./user-nav"

interface Props extends React.ComponentProps<"div"> {}

export const DashboardNav = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <div className="border-b">
        <div className="flex h-16 items-center justify-between px-4">
          <Button
            variant={"ghost"}
            className={cn(
              "flex items-center justify-center  gap-2 whitespace-nowrap rounded-md border border-input bg-transparent py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 [&>span]:flex  [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:size-4 [&_svg]:shrink-0"
            )}
            aria-label="Toggle Sidebar"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Vercel</title>
              <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
            </svg>

            <span>Alicia Koch</span>
          </Button>

          <MainNav className="mx-6 hidden lg:flex" />
          <div className="flex items-center justify-end">
            <div className="ml-auto flex items-center space-x-2 sm:space-x-4">
              {/* <Search /> */}
              <UserNav />
            </div>

            <MainNavLarge className="mx-1 lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  )
}