import React from "react"
import Link from "next/link"
import { mainNavItems } from "@/data"
import { AlignCenter } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Props extends React.ComponentProps<"div"> {}

export const MainNavLarge = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <AlignCenter />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-16">
          {mainNavItems.map((item) => {
            return (
              <DropdownMenuItem>
                <Link
                  href={item.href}
                  key={item.name}
                  className="text-sm font-medium capitalize transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
