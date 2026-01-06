import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/config/site-config"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: siteConfig.title ? `${siteConfig.name} - ${siteConfig.title}` : siteConfig.name,
  description: siteConfig.bio,
  generator: 'v0.app',
  keywords: ['ポートフォリオ', 'Web開発', 'フロントエンド', siteConfig.name],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title ? `${siteConfig.name} - ${siteConfig.title}` : siteConfig.name,
    description: siteConfig.bio,
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title ? `${siteConfig.name} - ${siteConfig.title}` : siteConfig.name,
    description: siteConfig.bio,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
