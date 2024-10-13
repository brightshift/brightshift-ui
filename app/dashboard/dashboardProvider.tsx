import React, { Fragment } from "react"
import type { PropsWithChildren } from "react"
import { FoldersContextProvider } from "@/context"

interface Props extends React.ComponentProps<"div"> {}

export const DashboardProvider = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <FoldersContextProvider>{children}</FoldersContextProvider>
    </Fragment>
  )
}
