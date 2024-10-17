import React from "react"
import { Search } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui"

import { SearchModal } from "./SearchModal"

interface Props extends React.ComponentProps<"div"> {}

export const MailSearch = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <Dialog>
        <DialogTrigger className="w-full border-none outline-none focus-within:outline-none focus:outline-none focus-visible:outline-none">
          <div className="relative w-full border-none outline-none focus-within:outline-none focus:outline-none">
            <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
            <Input
              placeholder={"Search or type / to add tags"}
              className="w-full  rounded-none  border-none  pl-8 outline-none  focus:outline-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0"
              // style={{ borderBottom: `1px solid #27272A` }}
            />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
          </DialogHeader>
          <SearchModal />
        </DialogContent>
      </Dialog>
    </div>
  )
}
