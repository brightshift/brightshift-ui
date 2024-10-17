"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useFolderManager, useFolders } from "@/hooks"
import { Folder, FolderOpen, Plus } from "lucide-react"

import { Folders } from "@/types/dashboard"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

import { AddOrEditFolder } from "./AddOrEditFolder"
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
  const { addFolders } = useFolderManager()
  const router = useRouter()

  const toggleExpand = () => setIsExpanded(!isExpanded)

  const newFolderHandler = (obg: Folders) => {
    return addFolders(obg)
  }

  return (
    <div className="relative mx-auto w-[92%]" {...props}>
      <div className="flex items-center justify-between">
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
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${!isCollapsed && isExpanded ? "max-h-96" : "max-h-0"}`}
      >
        <div className="ml-5 mr-1  mt-2  flex flex-col space-y-2 pl-2 text-start ">
          {folders.map((item, index) => (
            <div
              className=" flex w-full items-center rounded-md   pl-2 text-sm font-medium ring-offset-background transition-colors  focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50"
              key={index}
            >
              <span
                style={{ backgroundColor: item.color }}
                onClick={() => router.push(`/dashboard/group/${item.id}`)}
                className="mr-2 inline-block size-4 rounded-full border  "
              ></span>

              <div className="mr-1 flex flex-1 items-center justify-between">
                <span
                  onClick={() => router.push(`/dashboard/group/${item.id}`)}
                  className="flex-1 cursor-pointer"
                >
                  {item.name}
                </span>
                <FolderActions item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
