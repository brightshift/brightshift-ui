"use client"

import React, { ChangeEvent, KeyboardEvent, useRef, useState } from "react"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui"

interface Tag {
  id: string
  text: string
}

export const SearchModal: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("")
  const [tags, setTags] = useState<Tag[]>([])
  const [isTagMode, setIsTagMode] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.endsWith("/") && !isTagMode) {
      setIsTagMode(true)
      setSearchValue(value.slice(0, -1))
    } else if (isTagMode) {
      setSearchValue(value)
    } else {
      setSearchValue(value)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isTagMode) {
      e.preventDefault()
      const newTag = searchValue.trim()
      if (newTag && !tags.some((tag) => tag.text === newTag)) {
        setTags([...tags, { id: Date.now().toString(), text: newTag }])
        setSearchValue("")
        setIsTagMode(false)
      }
    } else if (e.key === "Backspace" && searchValue === "" && tags.length > 0) {
      const newTags = [...tags]
      newTags.pop()
      setTags(newTags)
    }
  }

  const removeTag = (tagToRemove: Tag) => {
    setTags(tags.filter((tag) => tag.id !== tagToRemove.id))
  }

  return (
    <div>
      <div className="relative flex items-center overflow-hidden ">
        <div
          className={cn("flex flex-wrap items-center py-1 ", {
            "px-2": tags.length > 0,
          })}
        >
          {tags.map((tag) => (
            <span
              key={tag.id}
              className=" flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
            >
              {tag.text}
              <button
                onClick={() => removeTag(tag)}
                className="ml-1 text-blue-600 hover:text-blue-800"
              >
                &times;
              </button>
            </span>
          ))}
        </div>

        <div className="relative w-full border-none outline-none focus:outline-none">
          <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
          <Input
            ref={inputRef}
            placeholder={
              isTagMode
                ? "Type tag and press Enter"
                : "Search or type / to add tags"
            }
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-full  rounded-none    border-border   pl-8 outline-none "
          />
        </div>
      </div>
    </div>
  )
}