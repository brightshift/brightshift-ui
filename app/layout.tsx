"use client"

import "@/styles/globals.css"

import { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site_header"
import { SiteNave } from "@/components/site_nav"
import { TailwindIndicator } from "@/components/tailwind_indicator"
import { ThemeProvider } from "@/components/theme_provider"

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
// }

interface RootLayoutProps {
  children: React.ReactNode
}

const queryClient = new QueryClient()

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          // socialButtonsPlacement: 'bottom',
          // socialButtonsVariant: 'iconButton',
          // termsPageUrl: 'https://clerk.com/terms'
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen scroll-smooth bg-[#F0F2F1] font-sans text-zinc-900 antialiased duration-300 dark:bg-[#07080A] dark:text-white",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <QueryClientProvider client={queryClient}>
              <div className="relative flex min-h-screen flex-col">
                <div className="flex-1">{children}</div>
              </div>
            </QueryClientProvider>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
