import React from "react"

import { Content } from "./Content"

export const dynamic = "force-static"

interface Props {
  params: {
    folderId: string
  }
}

const MailSubPage = ({ params }: Props) => {
  return <Content folderId={params.folderId} />
}

export default MailSubPage

export async function generateStaticParams() {
  const folderIds = [
    "eb301fcc-44a3-4667-b032-61171e32baed",
    "another-folder-id",
  ]

  return folderIds.map((id) => ({
    folderId: id,
  }))
}
