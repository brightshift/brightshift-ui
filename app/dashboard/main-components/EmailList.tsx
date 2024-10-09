"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { accounts, mails, type Mail } from "@/data/dashboard/dashboard.data"
import { useMail } from "@/hooks"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { MailDisplay } from "./dashboardSidebar"
import { MailList } from "./dashboardSidebar/mail-list"

interface Props extends React.ComponentProps<"div"> {}

export const EmailList = ({ ...props }: Props) => {
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
        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <form>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8" />
            </div>
          </form>
        </div>

        <TabsContent value="all" className="m-0 ">
          <MailList items={mails} onClick={navigateToSubPage} />
        </TabsContent>
        <TabsContent value="unread" className="m-0">
          <MailList
            onClick={navigateToSubPage}
            items={mails.filter((item) => !item.read)}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
