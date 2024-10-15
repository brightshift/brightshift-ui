import { useFolderManager, useFolders } from "@/hooks"
import { PlusCircle } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button, Checkbox } from "@/components/ui"

export const RestOfTheFolders = ({ ...props }) => {
  const { folders } = useFolders()
  const {} = useFolderManager()
  const restFolder = folders?.slice(2, folders.length)

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center p-1">
          <PlusCircle className="mr-2 size-4" />
          <span>More...</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Group Folder</DialogTitle>

          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup className="mt-2">
                {restFolder.map((folder) => (
                  <CommandItem key={folder.id} className="gap-x-2">
                    <Checkbox />
                    <p className="capitalize">{folder.name}</p>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogHeader>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
