import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Image Upload",
  description: "Upload your images with drag and drop",
}

export default function UploadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">{children}</div>
}

