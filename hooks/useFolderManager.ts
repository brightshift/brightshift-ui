import { useFolders } from "@/hooks"

import type { Folders } from "@/types/dashboard"

export const useFolderManager = () => {
  const { setFolders } = useFolders()

  const addFolders = ({ id, ...folder }: Folders) => {
    setFolders((pre) => [...pre, { id: crypto.randomUUID(), ...folder }])
  }

  const deleteFolder = (id: string) => {
    setFolders((pre) => pre.filter((folder) => folder.id !== id))
  }
  const editFolder = (id: string, newValue: Folders) => {
    setFolders((pre) =>
      pre.map((folder) => (folder.id === id ? newValue : folder))
    )
  }

  return { addFolders, deleteFolder, editFolder }
}
