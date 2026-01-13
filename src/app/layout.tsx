import type { Metadata } from "next"
import { Fredoka } from "next/font/google"
import "./globals.css"

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-fredoka",
})

export const metadata: Metadata = {
  title: "Red Panda Field Guide — one page explainer",
  description: "A visually-stunning one-page explainer about red pandas.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body className="font-[var(--font-fredoka)]">{children}</body>
    </html>
  )
}
