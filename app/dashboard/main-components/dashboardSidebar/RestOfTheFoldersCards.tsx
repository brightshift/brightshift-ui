import { ChangeEvent, FormEvent, MouseEvent } from "react"
import type { Mail } from "@/data"
import { useFolderManager, useFolders } from "@/hooks"
import { PlusCircle } from "lucide-react"

import { Folders } from "@/types/dashboard"
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
import { Button, Checkbox, Label } from "@/components/ui"

type Props = {
  MailData: Mail
}

export const RestOfTheFolders = ({ MailData }: Props) => {
  const { folders } = useFolders()

  const { addValueIntoFolder, removeValueFromFolder } = useFolderManager()
  const restFolder = folders?.slice(2, folders.length)
  console.log("🚀 ~ RestOfTheFolders ~ restFolder:", restFolder)

  const valueHandler = (isChecked: string | null, folder: Folders) => {
    if (isChecked) {
      addValueIntoFolder({ folderId: folder.id, newValue: MailData })
    } else {
      removeValueFromFolder({ folderId: folder.id, mailId: MailData?.id })
    }
  }

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
                {restFolder.map((folder: Folders) => {
                  const isAlreadySelected = folder.value?.some(
                    (mail) => mail.id === MailData?.id
                  )

                  return (
                    <Label htmlFor={folder.id} key={folder.id}>
                      <CommandItem className="gap-x-2">
                        <Checkbox
                          defaultChecked={isAlreadySelected}
                          id={folder.id}
                          onClick={(e) => {
                            const isChecked = JSON.parse(
                              e?.currentTarget?.ariaChecked || "false"
                            )
                            valueHandler(isChecked, folder)
                          }}
                        />

                        <p className="capitalize">{folder.name}</p>
                      </CommandItem>
                    </Label>
                  )
                })}
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
