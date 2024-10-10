"use client"

import React from "react"
import { type Mail } from "@/data/dashboard/dashboard.data"

import { TooltipProvider } from "@/components/ui"

import { MailDisplay } from "../main-components"

interface Props extends React.ComponentProps<"div"> {
  mail: Mail | undefined
}

export const Content = ({ mail, ...props }: Props) => {
  return (
    <div {...props}>
      <TooltipProvider delayDuration={0}>
        {mail !== undefined ? (
          <MailDisplay mail={mail} />
        ) : (
          <MailDisplay mail={null} />
        )}
      </TooltipProvider>
    </div>
  )
}
