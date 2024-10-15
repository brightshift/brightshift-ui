"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { mails } from "@/data/dashboard/dashboard.data"

import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { MailList } from "./dashboardSidebar/mail-list"
import { MailSearch } from "./MailSearch"

interface Props extends React.ComponentProps<"div"> {
  setIsShowMailPreview: React.Dispatch<React.SetStateAction<boolean>>
  isSmallDevice?: boolean
}

export const EmailList = ({
  setIsShowMailPreview,
  isSmallDevice,
  ...props
}: Props) => {
  const router = useRouter()

  const navigateToSubPage = (id: string) => {
    router.push(`/dashboard/${id}`)
  }
  return (
    <div {...props}>
      <Tabs defaultValue="all">
        <div className="flex items-center px-4 py-2">
          <h1 className="text-xl font-bold">Inbox</h1>
          <TabsList className="ml-auto">
            <TabsTrigger
              value="all"
              className="text-zinc-600 dark:text-zinc-200"
            >
              All mail
            </TabsTrigger>
            <TabsTrigger
              value="unread"
              className="text-zinc-600 dark:text-zinc-200"
            >
              Unread
            </TabsTrigger>
          </TabsList>
        </div>
        <Separator />
        <MailSearch />

        <TabsContent value="all" className="m-0 ">
          <MailList
            items={mails}
            onNavigate={navigateToSubPage}
            setIsShowMailPreview={setIsShowMailPreview}
            isSmallDevice={isSmallDevice}
            className="mt-4"
          />
        </TabsContent>
        <TabsContent value="unread" className="m-0">
          <MailList
            onNavigate={navigateToSubPage}
            items={mails.filter((item) => !item.read)}
            setIsShowMailPreview={setIsShowMailPreview}
            isSmallDevice={isSmallDevice}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
