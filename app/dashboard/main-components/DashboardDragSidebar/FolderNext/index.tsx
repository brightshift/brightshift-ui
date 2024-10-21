"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { useFolderManager, useFolders } from "@/hooks"
import { generateHexColor } from "@/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Folder, FolderOpen, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ColorPicker } from "@/components/color-picker"
import { Button, buttonVariants, Input, Label } from "@/components/ui"

import { FolderActions } from "./FolderActions"

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  isCollapsed: boolean
  isExpanded: boolean

  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

export const FolderMenu = ({
  isCollapsed,
  isExpanded,
  className,
  setIsExpanded,
  setIsCollapsed,

  ...props
}: Props) => {
  const { folders } = useFolders()
  const router = useRouter()
  const randomColor = generateHexColor()

  const [color, setColor] = useState(randomColor)
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const submitHandler = () => {
    setIsModalOpen(false)
  }
  const folderLength = folders.length
  return (
    <div className={cn("relative  z-50 mx-auto")} {...props}>
      <div className="mt-2 flex flex-col gap-2 px-2">
        <div
          className={cn(
            buttonVariants({ size: "sm" }),
            "cursor-pointer justify-start dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white"
          )}
          onClick={() => {
            setIsCollapsed(false)
            setIsExpanded(!isExpanded)
          }}
        >
          {isExpanded ? (
            <FolderOpen
              className={cn(
                "size-4",
                isCollapsed ? "mr-0 inline-block " : "mr-3"
              )}
            />
          ) : (
            <Folder
              className={cn(
                "size-4",
                isCollapsed ? "mr-0 inline-block " : "mr-3"
              )}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setIsCollapsed(false)
              }}
            />
          )}
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                className="overflow-hidden whitespace-nowrap transition-all duration-200 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Group
              </motion.span>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cn("ml-auto text-background dark:text-white")}
              >
                <Plus
                  className={cn("size-4 cursor-pointer", {
                    hidden: isCollapsed,
                  })}
                  onClick={() => setIsModalOpen(true)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[425px]" onSubmit={submitHandler}>
            <DialogHeader>
              <DialogTitle>Add New Group</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Description
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Color
                </Label>
                <ColorPicker
                  id="color"
                  value={color}
                  onChange={setColor}
                  defaultValue={randomColor}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={submitHandler}>
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* <div className="flex items-center justify-between">
        <div
          className={buttonVariants({
            variant: "ghost",
            className: "w-full justify-start gap-x-2 py-0 mt-1",
          })}
        >
          <button
            onClick={toggleExpand}
            className={cn(" flex w-full items-center gap-x-2")}
          >
            {isExpanded ? (
              <FolderOpen className="size-4" />
            ) : (
              <Folder
                className="size-4"
                onClick={() => setIsCollapsed(false)}
              />
            )}
            <span className={cn("", { hidden: isCollapsed })}>Group</span>
          </button>
          <AddOrEditFolder onSave={newFolderHandler}>
            <Plus
              className={cn("size-4 cursor-pointer", { hidden: isCollapsed })}
            />
          </AddOrEditFolder>
        </div>
      </div> */}

      <AnimatePresence>
        <div
          className={cn(
            `ml-5 mr-1 mt-2 flex flex-col space-y-2  overflow-hidden  text-start transition-all duration-300   ease-out `,
            !isCollapsed && isExpanded
              ? `h-[calc(var(--folder-length)*var(--folder-child-height))]`
              : "h-0"
          )}
          style={{ ["--folder-length"]: folderLength } as any}
        >
          {folders.map((item, index) => (
            <motion.div
              className="flex h-[var(--child-height)] w-full items-center rounded-md      pl-2 text-sm font-medium ring-offset-background transition-colors  focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <span
                style={{ backgroundColor: item.color }}
                onClick={() => router.push(`/dashboard/group/${item.id}`)}
                className="mr-2 inline-block size-4 rounded-full border  "
              ></span>
              <div className="mr-1 flex flex-1 items-center justify-between">
                <span
                  onClick={() => router.push(`/dashboard/group/${item.id}`)}
                  className="max-w-28 flex-1 cursor-pointer truncate"
                >
                  {item.name}
                </span>
                <FolderActions item={item} />
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  )
}
