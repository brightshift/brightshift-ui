import React from "react"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui"

interface NavProps {
  isCollapsed: boolean
  links: {
    title: string
    label?: string
    icon: LucideIcon
    variant: "default" | "ghost"
  }[]
}

export function Nav({ links, isCollapsed }: NavProps) {
  return (
    <nav className="flex flex-col gap-2 p-2">
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          className={cn(
            buttonVariants({ variant: link.variant, size: "sm" }),
            link.variant === "default" &&
              "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
            "justify-start"
          )}
        >
          <link.icon className={cn("size-4", isCollapsed ? "mr-0" : "mr-3")} />
          {!isCollapsed && (
            <span className="overflow-hidden whitespace-nowrap transition-all duration-200 ease-in-out">
              {link.title}
            </span>
          )}
          {!isCollapsed && link.label && (
            <span
              className={cn(
                "ml-auto",
                link.variant === "default" && "text-background dark:text-white"
              )}
            >
              {link.label}
            </span>
          )}
        </a>
      ))}
    </nav>
  )
}
