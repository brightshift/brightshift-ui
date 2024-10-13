"use client"

import React, { PropsWithChildren, useEffect, useState } from "react"
import { mails } from "@/data"
import { useFolders, useMail, useMediaQuery } from "@/hooks"
import cookies from "js-cookie"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { TooltipProvider } from "@/components/ui/tooltip"

import { MailDisplay } from "./main-components"
import { EmailList } from "./main-components/EmailList"

const DashboardLayout = () => {
  const [mail, setMail] = useMail()
  const { folders, setFolders } = useFolders()

  const [defaultLayout, setDefaultLayout] = useState<number[]>([4, 96])
  const [isShowMailPreview, setIsShowMailPreview] = useState(true)

  const isSmallDevice = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    const getLayout = cookies.get("react-resizable-panels:layout:mail")
    const LayoutValue = getLayout ? JSON.parse(getLayout) : undefined
    setDefaultLayout(LayoutValue)
  }, [])

  const onDefaultLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(sizes)}`
    setDefaultLayout(sizes)
  }

  useEffect(() => {
    setFolders([
      ...folders,
      { name: "applied", color: "red", desc: "", id: crypto?.randomUUID() },
      {
        name: "interview scheduled",
        color: "red",
        desc: "",
        id: crypto.randomUUID(),
      },
      {
        name: "offer received",
        color: "red",
        desc: "",
        id: crypto.randomUUID(),
      },
    ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => onDefaultLayout(sizes)}
          className="h-full max-h-[800px] min-h-[90vh] items-stretch "
        >
          <ResizablePanel defaultSize={defaultLayout?.at(1)} minSize={30}>
            <EmailList
              setIsShowMailPreview={setIsShowMailPreview}
              isSmallDevice={isSmallDevice}
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          {isShowMailPreview && !isSmallDevice && (
            <ResizablePanel defaultSize={defaultLayout?.at(2)} minSize={30}>
              <MailDisplay
                mail={mails.find((item) => item.id === mail.selected) || null}
                setIsShowMailPreview={setIsShowMailPreview}
              />
            </ResizablePanel>
          )}
        </ResizablePanelGroup>
      </TooltipProvider>
    </>
  )
}

export default DashboardLayout
