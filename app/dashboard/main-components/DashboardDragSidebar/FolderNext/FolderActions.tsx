import React, { useState } from "react"
import { useFolderManager, useFolders } from "@/hooks"
import { generateHexColor } from "@/utils"
import { EllipsisVertical, PencilLine, Trash2 } from "lucide-react"

import { Folders } from "@/types/dashboard"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ColorPicker } from "@/components/color-picker"
import { Input, Label } from "@/components/ui"

interface Props {
  item: Folders
}

export const FolderActions = ({ item, ...props }: Props) => {
  const [setIsModalOpen, setSetIsModalOpen] = useState(false)
  const { deleteFolder } = useFolderManager()
  const randomColor = generateHexColor()

  const [color, setColor] = useState(item.color || randomColor)
  const [name, setName] = useState(item.name)
  const [desc, setDesc] = useState(item.desc)

  const handleDelete = () => {
    deleteFolder(item.id)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <EllipsisVertical className=" size-3" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className="cursor-pointer gap-x-1"
            onClick={() => setSetIsModalOpen(true)}
          >
            <PencilLine className="size-3 " />
            <span> Edit</span>
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

      <Dialog open={setIsModalOpen} onOpenChange={setSetIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
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
                className="col-span-3"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Color
              </Label>
              <ColorPicker id="color" value={color} onChange={setColor} />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
