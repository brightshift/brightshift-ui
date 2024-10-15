import { Mail } from "@/data"
import { useFolders } from "@/hooks"

import type { Folders } from "@/types/dashboard"

export const useFolderManager = () => {
  const { folders, setFolders } = useFolders()

  const addFolders = (NewFolder: Folders) => {
    setFolders((pre) => [...pre, NewFolder])
  }

  const deleteFolder = (id: string) => {
    setFolders((pre) => pre.filter((folder) => folder.id !== id))
  }

  const editFolder = (id: string, newValue: Folders) => {
    setFolders((pre) =>
      pre.map((folder) => (folder.id === id ? newValue : folder))
    )
  }

  const addValueIntoFolder = ({
    folderId,
    newValue,
  }: {
    folderId: string
    newValue: any
  }) => {
    const findParent = folders.find((folder) => folder.id === folderId)

    if (findParent) {
      setFolders((pre) =>
        pre.map((folder) =>
          folder.id === folderId
            ? {
                ...folder,
                value: [...(folder.value || []), newValue],
              }
            : folder
        )
      )
    }
  }

  const removeValueFromFolder = ({
    folderId,
    mailId,
  }: {
    folderId: string
    mailId: string
  }) => {
    const findParent = folders.find((folder) => folder.id === folderId)

    if (findParent) {
      setFolders((pre) =>
        pre.map((folder) =>
          folder.id === folderId
            ? {
                ...folder,
                value: (folder.value || []).filter(
                  (mail) => mail.id !== mailId
                ),
              }
            : folder
        )
      )
    }
  }
  return {
    addFolders,
    deleteFolder,
    editFolder,
    addValueIntoFolder,
    removeValueFromFolder,
  }
}
