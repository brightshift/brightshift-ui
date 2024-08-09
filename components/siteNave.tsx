"use client"

import React, { useState } from "react"
import Link from "next/link"
import { AlignJustify } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

import { Icons } from "./icons"
import { MainNav } from "./main-nav"
import { buttonVariants } from "./ui/button"

interface Props extends React.ComponentProps<"header"> {}

const menuItem = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

export const SiteNave = ({ ...props }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      {...props}
      className={cn(
        "glassmorphism sticky top-5 mx-auto flex w-11/12 max-w-[1204px] rounded-xl bg-transparent px-4 py-3 shadow shadow-black transition-all dark:shadow-white ",
        { "h-36 flex-col": isOpen }
      )}
    >
      <div className="   flex w-full items-start justify-between md:items-center ">
        {/* Point One */}
        <MainNav items={siteConfig.mainNav} />
        {/* Point Two */}
        <div className="hidden flex-1 items-center justify-end gap-x-2 md:flex">
          {menuItem.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="cursor-pointer font-bold text-white hover:animate-pulse "
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Point Three  */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden items-center space-x-1 md:flex">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="size-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.facebook className="size-5 fill-current" />
                <span className="sr-only">Facebook</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
          <AlignJustify
            className="cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      <div className={cn("mt-5", { hidden: !isOpen })}>
        {menuItem.map((items) => (
          <p key={items.name}>{items.name}</p>
        ))}
      </div>
    </header>
  )
}
