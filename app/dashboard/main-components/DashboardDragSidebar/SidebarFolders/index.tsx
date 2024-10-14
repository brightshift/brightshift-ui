import React, { useState } from "react"
import { useFolderManager } from "@/hooks"
import { motion } from "framer-motion"
import { File, Folder, FolderOpen, Plus } from "lucide-react"

import { Folders } from "@/types/dashboard"
import { cn } from "@/lib/utils"
import { useFolders } from "@/hooks/useFolders"

import { AddOrEditFolder } from "./AddOrEditFolder"
import { FolderItems } from "./FolderItems"

interface Props extends React.ComponentProps<"div"> {
  isCollapsed: boolean
  isOpen: boolean

  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const SidebarFolders = ({
  isCollapsed,
  isOpen,

  setIsCollapsed,
  setIsOpen,

  className,
  ...props
}: Props) => {
  const folder = useFolders()
  const { addFolders } = useFolderManager()

  const newAddHandler = (obg: Folders) => {
    addFolders(obg)
  }

  return (
    <motion.div
      className="overflow-y-hidden transition-all "
      style={{ height: !isOpen ? "30px" : "100%" }}
    >
      <div
        {...props}
        className={cn(
          "flex size-9 w-full items-center  justify-between gap-x-2 px-1",
          className
        )}
      >
        <div
          className={cn(
            " box-border flex w-full cursor-pointer items-center   gap-x-2 text-sm font-medium leading-5 text-slate-50 antialiased ",
            {
              "justify-center": isCollapsed,
              "justify-start": !isCollapsed,
            }
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FolderOpen className="size-4" />
          ) : (
            <Folder
              className="size-4"
              onClick={() => setIsCollapsed(!isCollapsed)}
            />
          )}

          {isCollapsed || <span>Groups</span>}
        </div>
        {isCollapsed || (
          <AddOrEditFolder onSave={newAddHandler}>
            <Plus className="size-4" />
          </AddOrEditFolder>
        )}
      </div>

      <div
        className={cn("space-y-1", {
          hidden: isCollapsed,
        })}
      >
        {folder.folders.map((item) => (
          <FolderItems item={item} key={item.id} />
        ))}
      </div>
    </motion.div>
  )
}
