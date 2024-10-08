import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  LucideIcon,
  MessagesSquare,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"

export interface DashboardSidebarDataType {
  title: string
  label?: string
  icon: LucideIcon
  variant: "default" | "ghost"
}

export const dashboardSidebarData: DashboardSidebarDataType[] = [
  {
    title: "Inbox",
    label: "128",
    icon: Inbox,
    variant: "default",
  },
  {
    title: "Drafts",
    label: "9",
    icon: File,
    variant: "ghost",
  },
  {
    title: "Sent",
    label: "",
    icon: Send,
    variant: "ghost",
  },
  {
    title: "Junk",
    label: "23",
    icon: ArchiveX,
    variant: "ghost",
  },
  {
    title: "Trash",
    label: "",
    icon: Trash2,
    variant: "ghost",
  },
  {
    title: "Archive",
    label: "",
    icon: Archive,
    variant: "ghost",
  },
  {
    title: "Social",
    label: "972",
    icon: Users2,
    variant: "ghost",
  },
  {
    title: "Updates",
    label: "342",
    icon: AlertCircle,
    variant: "ghost",
  },
  {
    title: "Forums",
    label: "128",
    icon: MessagesSquare,
    variant: "ghost",
  },
  {
    title: "Shopping",
    label: "8",
    icon: ShoppingCart,
    variant: "ghost",
  },
  {
    title: "Promotions",
    label: "21",
    icon: Archive,
    variant: "ghost",
  },
]
