import { ComponentProps } from "react"
import { mailFolderList } from "@/data"
import { Mail } from "@/data/dashboard/dashboard.data"
import { useMail } from "@/hooks"
import { formatDistanceToNow } from "date-fns"
import { FolderOpen, FolderPlus, Tags } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface MailListProps {
  items: Mail[]
  onNavigate?: (id: string) => void
  setIsShowMailPreview?: React.Dispatch<React.SetStateAction<boolean>>
  isSmallDevice?: boolean
  className?: string
}

export function MailList({
  items,
  onNavigate,
  setIsShowMailPreview,
  isSmallDevice,
  className,
}: MailListProps) {
  const [mail, setMail] = useMail()
  return (
    <ScrollArea className="h-screen">
      <div className={cn("flex flex-col gap-2 p-4 pt-0", className)}>
        {items.map((item) => (
          <button
            key={item.id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              mail.selected === item.id && "bg-muted"
            )}
            onClick={() => {
              if (!isSmallDevice) {
                setIsShowMailPreview?.(true)
                setMail({
                  ...mail,
                  selected: item.id,
                })
              } else {
                onNavigate && onNavigate(item.id)
              }
            }}
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.name}</div>
                  {!item.read && (
                    <span className="flex size-2 rounded-full bg-blue-600" />
                  )}
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs",
                    mail.selected === item.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {formatDistanceToNow(new Date(item.date), {
                    addSuffix: true,
                  })}
                </div>
              </div>
              <div className="text-xs font-medium">{item.subject}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.text.substring(0, 300)}
            </div>
            <div className="flex items-center gap-2">
              <Tags className="size-4" />
              <div>
                {item.labels.length ? (
                  <div className="flex items-center gap-2">
                    {item.labels.map((label) => (
                      <Badge
                        key={label}
                        variant={getBadgeVariantFromLabel(label)}
                      >
                        {label}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FolderPlus className="size-4" />

              <div>
                {mailFolderList.length ? (
                  <div className="flex items-center gap-2">
                    {mailFolderList.map((folder) => (
                      <Badge
                        key={folder.value}
                        variant={getBadgeVariantFromLabel(folder.label)}
                      >
                        {folder.label}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </button>
        ))}
      </div>
    </ScrollArea>
  )
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "default"
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline"
  }

  return "secondary"
}