import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Stitch & Style",
  description: "Browse our collection of custom-designed clothing",
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/10">
      {children}
    </div>
  )
}
