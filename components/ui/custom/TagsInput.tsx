import React, { ChangeEvent, KeyboardEvent } from "react"
import { X } from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { Input } from "../input"

interface TagInputProps {
  maxTags?: number
  tags: string[]
  setTags: (tags: string[]) => void
  error?: string | null
  setError?: (error: string | null) => void
}

export function TagInput({
  maxTags = 5,
  tags,
  setTags,
  error,
  setError,
}: TagInputProps) {
  const [input, setInput] = React.useState("")

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim()
    if (!trimmedTag) return

    if (tags.length >= maxTags) {
      setError?.(`Maximum ${maxTags} tags allowed`)
      return
    }

    if (tags.includes(trimmedTag)) {
      setError?.("Tag already exists")
      return
    }

    setTags([...tags, trimmedTag])
    setInput("")
    setError?.(null)
  }

  const removeTag = (indexToRemove: number) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove)
    setTags(newTags)
    setError?.(null)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addTag(input)
    } else if (e.key === "," || e.key === ";") {
      e.preventDefault()
      addTag(input)
    } else if (e.key === "Backspace" && !input && tags.length > 0) {
      removeTag(tags.length - 1)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value.includes(",") || value.includes(";")) {
      const newTags = value
        .split(/[,;]/)
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0)

      newTags.forEach((tag) => addTag(tag))
    } else {
      setInput(value)
    }
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="relative">
        <div
          className={`min-h-[48px] w-full border ${error ? "border-red-300" : ""} 
          rounded-lg  px-3 py-2 shadow-sm focus-within:border-input 
          `}
        >
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index}>
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(index)}
                  className="ml-1 inline-flex items-center justify-center rounded-full hover:bg-blue-200 hover:text-blue-900 focus:outline-none"
                >
                  <X size={14} />
                </button>
              </Badge>
            ))}
            <Input
              type="text"
              value={input}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              disabled={tags.length >= maxTags}
              placeholder={
                tags.length < maxTags ? "Type and press Enter or comma..." : ""
              }
              isBorderLessEffect
            />
          </div>
        </div>

        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

        <p className="mt-2 text-sm text-gray-500">
          {tags.length}/{maxTags} tags maximum. Press Enter, comma, or semicolon
          to add tags.
        </p>
      </div>
    </div>
  )
}
