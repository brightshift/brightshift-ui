import { useState } from "react"
import { useFolders } from "@/hooks"
import { Plus } from "lucide-react"

import { Folders } from "@/types/dashboard"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ColorPicker } from "@/components/color-picker"

interface Props {
  onSave: ({}: Folders) => void
  defaultValue?: { name: string; desc: string; color: string; id?: string }
}

export function AddFolder({ onSave, defaultValue }: Props) {
  // const folder = useFolders()

  const [color, setColor] = useState(defaultValue?.color || "")
  const [name, setName] = useState(defaultValue?.name || "")
  const [desc, setDesc] = useState(defaultValue?.desc || "")

  const submitHandler = () => {
    onSave({ name, desc, color, id: defaultValue?.id || crypto.randomUUID() })
  }

  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <Plus className="size-4" />
      </DialogTrigger>
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
            <ColorPicker id="color" value={color} onChange={setColor} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={submitHandler}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
