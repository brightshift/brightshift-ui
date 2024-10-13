import { EllipsisVertical, File, PencilLine, Trash2 } from "lucide-react"

import { Folders } from "@/types/dashboard"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui"

interface Props extends React.ComponentProps<"div"> {
  item: Folders
}

export const FolderItems = ({ item, ...props }: Props) => {
  //   const totalContent = item?.value?.length || 0

  return (
    <div
      className=" flex w-full cursor-pointer  items-center justify-between gap-x-2 overflow-x-hidden rounded-xl   px-2 py-1 text-xs font-normal leading-5 text-slate-50 antialiased  dark:bg-gray-800  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
      {...props}
    >
      <div className="flex items-center gap-x-1">
        <File className="size-3" />
        <p>{item.name}</p>
      </div>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <EllipsisVertical className=" size-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="gap-x-1">
              <PencilLine className="size-3" />
              <span> Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-x-1">
              <Trash2 className="size-3" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
