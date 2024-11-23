import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NWC Education",
  description: "NWC Education",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
    <body>
    <main className="overflow-hidden">{children}</main>
    </body>
    </html>
  )
}
