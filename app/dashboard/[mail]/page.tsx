import React from "react"
import { mails } from "@/data/dashboard/dashboard.data"

import { Content } from "./Content"

export const dynamic = "force-static"

interface Props {
  params: {
    mail: string
  }
}

const MailSubPage = ({ params }: Props) => {
  const mail = mails.find((mail) => mail.id === params.mail)

  return <Content mail={mail} />
}

export default MailSubPage

export function generateStaticParams() {
  return mails.map((mail) => ({
    mail: mail.id,
  }))
}
