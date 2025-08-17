// app/layout.tsx
import "./globals.css"
import { ReactNode } from "react"

// 共通パーツ
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
  title: "3RD ROOM",
  description: "Creative Space for Artists & Creators",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
