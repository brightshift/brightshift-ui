"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import useSound from "use-sound"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [playOn] = useSound("/sounds/switch-on.mp3")
  const [playOff] = useSound("/sounds/switch-off.wav")

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        if (theme === "light") {
          setTheme("dark")
          playOff()
        } else {
          setTheme("light")
          playOn()
        }
      }}
    >
      <Sun className="h-6 w-[1.3rem] dark:hidden" />
      <Moon className="hidden size-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
