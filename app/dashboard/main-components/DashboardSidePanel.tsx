"use client"

import React, { useState } from "react"
import Link from "next/link"
import { type DashboardSidebarDataType } from "@/data"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui"

import { SidebarFolders } from "./DashboardDragSidebar/SidebarFolders"

interface NavProps {
  links: DashboardSidebarDataType[]
}

const DashboardSidePanel = ({ links }: NavProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isFolderOpen, setIsFolderOpen] = useState(false)

  return (
    <motion.div
      className="relative  border-r border-gray-700/40 transition-all"
      style={{ width: isCollapsed ? "60px" : "auto" }}
      animate={{ width: isCollapsed ? "60px" : "auto" }}
    >
      <div className="group  flex flex-col gap-4  py-2 data-[collapsed=true]:py-2">
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          <SidebarFolders
            isCollapsed={isCollapsed}
            isOpen={isFolderOpen}
            setIsCollapsed={setIsCollapsed}
            setIsOpen={setIsFolderOpen}
          />
          {links.map((link) => {
            return (
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: link.variant, size: "icon" }),
                  "flex size-9 w-full items-center gap-x-2 px-1",
                  link.variant === "default" &&
                    "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                )}
              >
                <link.icon className="size-4" />
                <motion.span
                  style={{ display: isCollapsed ? "none" : "block" }}
                  className="w-full"
                >
                  {link.title}
                </motion.span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div
        className=" absolute -right-3 top-1/2 max-w-6  cursor-pointer self-center  rounded-xl  bg-gray-700"
        onClick={() => {
          setIsCollapsed(!isCollapsed)
          if (isFolderOpen) setIsFolderOpen(false)
        }}
      >
        <ChevronRight
          className={cn("transition-all", { "rotate-180": isCollapsed })}
        />
      </div>
    </motion.div>
  )
}

export default DashboardSidePanel
