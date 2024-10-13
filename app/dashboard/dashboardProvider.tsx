import React from "react"

interface Props extends React.ComponentProps<"div"> {}

export const dashboardProvider = ({ ...props }: Props) => {
  return <div {...props}>dashboardProvider</div>
}
