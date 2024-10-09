"use client"

import React from "react"
import { type Mail } from "@/data/dashboard/dashboard.data"

import { MailDisplay } from "../main-components"

interface Props extends React.ComponentProps<"div"> {
  mail: Mail | undefined
}

export const Content = ({ mail, ...props }: Props) => {
  return (
    <div {...props}>
      {mail !== undefined ? (
        <MailDisplay mail={mail} />
      ) : (
        <MailDisplay mail={null} />
      )}
    </div>
  )
}
