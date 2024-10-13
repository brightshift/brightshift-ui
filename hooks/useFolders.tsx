import { useContext } from "react"
import { DashboardFoldersContext } from "@/context"

export const useFolders = () => {
  return useContext(DashboardFoldersContext)
}
