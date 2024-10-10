"use client"

import { useState } from "react"
import { mailSearchData } from "@/data/dashboard"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export function MailSearch() {
  const [searchValue, setSearchValue] = useState("")
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput
        placeholder="Type a command or search..."
        value={searchValue}
        onValueChange={setSearchValue}
        className="rounded-lg"
      />

      <CommandList>
        {searchValue && (
          <>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {mailSearchData.map((item) => (
                <CommandItem key={item.title}>
                  <item.icon className="mr-2 size-4" />
                  <span>{item.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
      </CommandList>
    </Command>
  )
}
