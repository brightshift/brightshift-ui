import { createContext, useState } from "react"
import type { PropsWithChildren } from "react"

import { Folders } from "@/types/dashboard"

interface ContextType {
  folders: Folders[]
  setFolders: React.Dispatch<React.SetStateAction<Folders[]>>
}

export const DashboardFoldersContext = createContext<ContextType>({
  folders: [],
  setFolders: () => {},
})

export const FoldersContextProvider = ({ children }: PropsWithChildren) => {
  const [folders, setFolders] = useState<Folders[]>([])

  return (
    <DashboardFoldersContext.Provider value={{ folders, setFolders }}>
      {children}
    </DashboardFoldersContext.Provider>
  )
}
