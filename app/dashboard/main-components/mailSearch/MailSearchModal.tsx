"use client"

import React, { useEffect, useRef, useState } from "react"
import { PopularSearches } from "@/data/search"
import { useDebounce } from "@/hooks"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type CommandType = "folder" | "search" | "query" | "tags" | "jobs"

interface TagState {
  folder: string[]
  search: string[]
  query: string[]
  tags: string[]
  jobs: string[]
}

export const SearchModal: React.FC = () => {
  const [inputValue, setInputValue] = useState("")
  const [showCommands, setShowCommands] = useState(false)
  const [activeCommand, setActiveCommand] = useState<CommandType | null>(null)
  const [tags, setTags] = useState<TagState>({
    folder: [],
    search: [],
    query: [],
    tags: [],
    jobs: [],
  })
  const [searchString, setSearchString] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const commandsRef = useRef<HTMLDivElement>(null)

  const debounceValue = useDebounce(searchString, 500)

  const commands: CommandType[] = ["folder", "search", "query", "tags", "jobs"]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        commandsRef.current &&
        !commandsRef.current.contains(event.target as Node)
      ) {
        setShowCommands(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (debounceValue === "/") {
      setShowCommands(true)
    } else {
      setShowCommands(false)
    }
  }, [debounceValue])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)

    if (value.startsWith("/") && !activeCommand) {
      setShowCommands(true)
    } else if (activeCommand) {
      // Do nothing, wait for Enter key
    } else {
      setSearchString(value)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (activeCommand) {
        const commandValue = inputValue.slice(activeCommand.length + 2) // +2 for '/' and space
        if (commandValue) {
          setTags((prev) => ({
            ...prev,
            [activeCommand]: [...prev[activeCommand], commandValue],
          }))
          setInputValue("")
          setActiveCommand(null)
        }
      } else if (searchString) {
        // Handle search string (e.g., save it to state or perform a search)
        console.log("Search string:", searchString)
        setSearchString("")
        setInputValue("")
      }
    } else if (e.key === "/" && inputValue === "") {
      setShowCommands(true)
    }
  }

  const selectCommand = (command: CommandType) => {
    setActiveCommand(command)
    setInputValue(`/${command} `)
    setShowCommands(false)
    inputRef.current?.focus()
  }

  const removeTag = (command: CommandType, index: number) => {
    setTags((prev) => ({
      ...prev,
      [command]: prev[command].filter((_, i) => i !== index),
    }))
  }

  return (
    <div
      className={cn(
        "fixed left-1/2 top-1/2 mt-10 size-full max-w-4xl -translate-x-1/2 -translate-y-1/2 p-4"
      )}
    >
      <Input
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a message or use / for commands"
        className="w-full"
      />

      <div className="overflow  z-10  mt-5 min-h-72 w-full rounded-md border border-border bg-background p-4 shadow-lg">
        <p>Popular searches</p>

        <div className="mt-2 flex w-full flex-wrap items-center gap-1">
          {PopularSearches.map((search) => (
            <p
              key={search}
              className="rounded-full bg-gray-900/70  px-2 py-1 text-xs"
            >
              {search}
            </p>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showCommands && (
          <motion.div
            ref={commandsRef}
            className="glassmorphism overflow  z-10 mt-1 w-full rounded-md border border-border bg-background shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {commands.map((command) => (
              <Button
                key={command}
                onClick={() => selectCommand(command)}
                variant="ghost"
                className="w-full justify-start"
              >
                /{command}
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-4 flex flex-wrap gap-2">
        {Object.entries(tags).flatMap(([command, values]) =>
          values.map((value: string, index: number) => (
            <span
              key={`${command}-${index}`}
              className="flex items-center rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground"
            >
              {value}
              <button
                onClick={() => removeTag(command as CommandType, index)}
                className="ml-1 focus:outline-none"
              >
                <X size={14} />
              </button>
            </span>
          ))
        )}
      </div>
    </div>
  )
}
