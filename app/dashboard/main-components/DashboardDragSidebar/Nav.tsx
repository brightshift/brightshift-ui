import React from "react";
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
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
    <nav className="flex flex-col gap-2 px-2">
      {links.map((link, index) => (
        <Link
          key={index}
          href="/dashboard"
          aria-label={`Go to ${link.title}`}
          className={cn(
            buttonVariants({ variant: link.variant, size: "sm" }),
            link.variant === "default" &&
              "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
            "justify-start"
          )}
        >
          <link.icon className={cn("size-4", isCollapsed ? "mr-0" : "mr-3")} />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                className="overflow-hidden whitespace-nowrap transition-all duration-200 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {link.title}
              </motion.span>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!isCollapsed && link.label && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cn(
                  "ml-auto",
                  link.variant === "default" &&
                    "text-background dark:text-white"
                )}
              >
                {link.label}
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      ))}
    </nav>
  )
}