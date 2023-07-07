import "./globals.css"
import { Outfit } from "next/font/google"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata = {
  title: "Error 404",
  description: "Page Error 404",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
