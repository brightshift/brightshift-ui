import { useFolders } from "@/hooks"
import { EllipsisVertical, Folder, PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { RestOfTheFolders } from "./RestOfTheFoldersCards"

export function ManageFolderFromCards() {
  const { folders } = useFolders()
  const firstTwoFolder = folders?.slice(0, 2)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Folder className="mr-2 size-4" />
              <span>Add To Group</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {firstTwoFolder?.map((folder) => (
                  <DropdownMenuItem key={folder?.id}>
                    <span
                      style={{ backgroundColor: folder?.color }}
                      className="mr-2 size-3 rounded-full"
                    ></span>
                    <span>{folder?.name}</span>
                  </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator />
                <RestOfTheFolders />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}