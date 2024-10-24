"use client"

import React, { useEffect, useRef, useState } from "react"
import { jobsList, PopularSearches } from "@/data/search"
import { useDebounce } from "@/hooks"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
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
  const [searchedJobs, setSearchedJobs] = useState<typeof jobsList>([])
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
    if (debounceValue.startsWith("/")) {
      setShowCommands(true)
    } else {
      setShowCommands(false)

      const filterJob = jobsList.filter((job) =>
        job.title.toLowerCase().includes(debounceValue.toLowerCase())
      )
      setSearchedJobs(filterJob)
    }
  }, [debounceValue])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)

    // Only show commands when '/' is typed without any trailing space
    if (value === "/" || (value.startsWith("/") && !value.includes(" "))) {
      setShowCommands(true)
    } else {
      setShowCommands(false)
      setSearchString(value)
    }
  }

  const removeTag = (command: CommandType, index: number) => {
    setTags((prev) => ({
      ...prev,
      [command]: prev[command].filter((_, i) => i !== index),
    }))
  }

  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (showCommands && highlightedIndex !== null) {
        selectCommand(commands[highlightedIndex])
      } else if (activeCommand) {
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
    } else if (e.key === "ArrowDown" && showCommands) {
      setHighlightedIndex((prev) =>
        prev === null ? 0 : Math.min(prev + 1, commands.length - 1)
      )
    } else if (e.key === "ArrowUp" && showCommands) {
      setHighlightedIndex((prev) =>
        prev === null ? commands.length - 1 : Math.max(prev - 1, 0)
      )
    }
  }

  const selectCommand = (command: CommandType) => {
    setActiveCommand(command)
    setInputValue(`/${command} `)
    setShowCommands(false)
    inputRef.current?.focus()
    setHighlightedIndex(null)
  }

  // Filter commands based on input after '/'
  const filteredCommands = commands.filter((command) =>
    command.startsWith(inputValue.slice(1).toLowerCase())
  )

  const showCommandList = (
    <AnimatePresence>
      <motion.div
        ref={commandsRef}
        className="glassmorphism overflow absolute z-10 w-full space-y-2 rounded-md border border-border bg-background p-2 shadow-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        {filteredCommands.length > 0 ? (
          filteredCommands.map((command, index) => (
            <Button
              key={command}
              onClick={() => selectCommand(command)}
              variant="ghost"
              className={`h-9 w-full justify-start py-1 ${
                highlightedIndex === index ? "bg-accent" : ""
              }`}
            >
              /{command}
            </Button>
          ))
        ) : (
          <p className="text-sm">No matching commands</p>
        )}
      </motion.div>
    </AnimatePresence>
  )

  const defaultPopularSearch = (
    <div className="space-y-2">
      <p className="font-semibold text-primary">Most Popular Search</p>
      <div className="flex w-full flex-wrap items-center gap-1">
        {PopularSearches.map((search) => (
          <p
            key={search}
            onClick={() => setInputValue(search)}
            className="cursor-pointer rounded-full bg-gray-900/70 px-2 py-1 text-xs"
          >
            {search}
          </p>
        ))}
      </div>
    </div>
  )

  const searchResult = (
    <div>
      {searchedJobs.map((job) => (
        <div
          key={job.id}
          className="rounded-lg bg-gray-900/70 p-2 text-xs text-white"
        >
          {job.title}
        </div>
      ))}
    </div>
  )

  const showSelectedTagsResult = (
    <div className="flex flex-wrap gap-2">
      {Object.entries(tags).map((tagList: [string, string[]]) => {
        if (tagList[1].length === 0) return null
        return (
          <div className="inline-flex items-center gap-x-2 rounded-lg px-2 py-1">
            <p className="text-sm font-bold">{tagList[0]}</p> :
            {tagList[1].map((tag: string) => (
              <Badge key={tag} className="flex items-center gap-1">
                <p className="text-xs">{tag}</p>
                <X className="size-3" />
              </Badge>
            ))}
          </div>
        )
      })}
    </div>
  )

  const allSelectedTags = Object.entries(tags).flatMap(
    ([command, values]) => values
  )

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
        isBorderLessEffect
      />

      <>
        <div className="mt-2">
          {showCommands ? (
            showCommandList
          ) : (
            <div className="overflow z-10 mt-5 min-h-72 w-full rounded-md border border-border bg-background p-4 shadow-lg">
              {debounceValue
                ? searchResult
                : allSelectedTags.length > 0
                  ? showSelectedTagsResult
                  : defaultPopularSearch}
            </div>
          )}
        </div>
      </>
    </div>
  )
}
