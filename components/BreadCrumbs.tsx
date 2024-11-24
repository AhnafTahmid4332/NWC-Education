import Link from "next/link";
import { ChevronRight } from "lucide-react"; // Ensure you have this or another appropriate icon library
import { cn } from "@/lib/utils"; // Assuming you have a utility for conditional class names

// Breadcrumb component
export default function Breadcrumbs({
  slug,
  section,
  country,
}: {
  slug: string;
  section: string;
  country: string;
}) {
  // Define breadcrumb items dynamically based on the URL
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Study Abroad", href: "/study-abroad" },
    { label: slug, href: `/study-abroad/${slug}` },
    { label: section, href: `/study-abroad/${slug}/${section}` },
    { label: country, href: `/study-abroad/${slug}/${section}/${country}` },
  ];

  return (
    <div className="w-full py-10 px-10">
      <div className="h-px w-full bg-[#FF0000]/20" />
      <nav
        aria-label="Breadcrumb"
        className={cn("w-full bg-white px-2 sm:px-4 py-1 sm:py-2")}
      >
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              <Link href={item.href} className="text-[#FF0000] hover:underline">
                {item.label}
              </Link>
              {index < breadcrumbItems.length - 1 && (
                <ChevronRight
                  className="h-4 w-4 text-muted-foreground"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div className="h-px w-full bg-[#FF0000]/20" />
    </div>
  );
}
