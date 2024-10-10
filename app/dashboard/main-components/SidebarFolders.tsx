import React, { useState } from "react"
import { mailFolderList } from "@/data/dashboard"
import { motion } from "framer-motion"
import { File, Folder, FolderOpen } from "lucide-react"

import { cn } from "@/lib/utils"

interface Props extends React.ComponentProps<"div"> {
  isCollapsed: boolean
}

export const SidebarFolders = ({ className, isCollapsed, ...props }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div
      className="overflow-y-hidden transition-all "
      style={{
        height: !isOpen ? "30px" : "100%",
      }}
    >
      <div
        {...props}
        className={cn(
          "flex size-9 w-full items-center justify-center gap-x-2 px-1",
          className
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <button>
          {isOpen ? (
            <FolderOpen className="size-4" />
          ) : (
            <Folder className="size-4" />
          )}
        </button>
        <motion.span
          style={{ display: isCollapsed ? "none" : "block" }}
          className=" box-border w-full cursor-pointer text-sm font-medium leading-5 text-slate-50 antialiased"
        >
          Folders
        </motion.span>
      </div>

      <div
        className={cn("space-y-1", {
          hidden: isCollapsed,
        })}
      >
        {mailFolderList.map((item) => {
          return (
            <div
              className=" flex w-full  cursor-pointer items-center gap-x-2 pl-6 text-sm font-medium leading-5 text-slate-50 antialiased dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
              key={item.value}
            >
              <File className="size-3" />
              <p>{item.label}</p>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
