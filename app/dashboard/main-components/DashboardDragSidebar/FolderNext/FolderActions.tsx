import React from "react"
import { useFolderManager } from "@/hooks"
import { EllipsisVertical, PencilLine, Trash2 } from "lucide-react"

import { Folders } from "@/types/dashboard"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { AddOrEditFolder } from "./AddOrEditFolder"

interface Props {
  item: Folders
}

export const FolderActions = ({ item, ...props }: Props) => {
  const { deleteFolder, editFolder } = useFolderManager()
  const handleDelete = () => {
    deleteFolder(item.id)
  }
  const editHandler = (folder: Folders) => {
    return editFolder(item.id, folder)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <EllipsisVertical className=" size-3" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer gap-x-1">
            <PencilLine className="size-3" />

            <AddOrEditFolder
              onSave={editHandler}
              defaultValue={{
                color: item.color,
                desc: item.desc,
                name: item.name,
              }}
            >
              <span> Edit</span>
            </AddOrEditFolder>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer gap-x-1 "
            onClick={handleDelete}
          >
            <Trash2 className="size-3 text-red-600 hover:text-red-700" />
            <span className="text-red-600 hover:text-red-700">Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
