import React from "react"
import Link from "next/link"
import { type DashboardSidebarDataType } from "@/data"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui"

interface NavProps {
  links: DashboardSidebarDataType[]
}

const DashboardSidePanel = ({ links }: NavProps) => {
  return (
    <nav className="group flex flex-col gap-4 border-r border-gray-700/40 py-2 data-[collapsed=true]:py-2">
      <div className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link) => {
          return (
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: link.variant, size: "icon" }),
                "size-9",
                link.variant === "default" &&
                  "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
              )}
            >
              <link.icon className="size-4" />
              <span className="sr-only">{link.title}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default DashboardSidePanel
