"use client"

interface Props extends React.ComponentProps<"div"> {
  folderId: string
}

export const Content = ({ folderId, ...props }: Props) => {
  return (
    <div {...props} className="min-h-[90vh]">
      Page : {folderId}
    </div>
  )
}
