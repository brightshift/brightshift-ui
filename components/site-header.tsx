import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import HamMenu from "./hamMenu"

export function SiteHeader() {
  return (
    <header className="sticky top-0 mt-5 w-full px-20">
      <div className="container flex h-16 items-center space-x-4 rounded-3xl shadow shadow-black dark:shadow-white sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="hidden flex-1 items-center justify-end md:flex">
          <ul className="flex items-center space-x-5 text-gray-500">
            <b className="cursor-pointer hover:animate-pulse hover:text-black dark:hover:text-white">
              Home
            </b>
            <b className="cursor-pointer hover:animate-pulse hover:text-black dark:hover:text-white">
              About
            </b>
            <b className="cursor-pointer hover:animate-pulse hover:text-black dark:hover:text-white">
              Contact
            </b>
          </ul>
        </div>
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

          {/* Hamburger menu */}
          <HamMenu />
        </div>
      </div>
    </header>
  )
}
