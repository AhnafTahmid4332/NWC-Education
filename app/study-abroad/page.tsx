import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import DynamicCountryCard from "@/components/DynamicCountryCard";

// Sanity configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
});

// Image URL builder
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

// Types
interface BreadcrumbItem {
  label: string;
  href: string;
}

interface Country {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  hoverDescription: string;
}

const StudyAbroadPage: React.FC = async () => {
  // Breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Study Abroad", href: "/study-abroad" },
  ];

  // Fetch countries from Sanity
  const query = `*[_type == "Country"] {
    _id,
    title,
    slug,
    mainImage,
    hoverDescription
  }`;

  const countries: Country[] = await client.fetch(query);

  return (
    <>
      <section className="mb-8 sm:mb-14 flex justify-center items-center bg-hero-img bg-cover bg-center bg-no-repeat p-8 sm:p-16 md:p-24 lg:p-36 min-h-[200px] sm:min-h-[300px]">
        <div className="bg-purple-900/50 py-2 sm:py-4 px-4 sm:px-10 rounded-lg">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
            Study Abroad
          </h1>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-primary-800 font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
          Best Guide for International Students in 2025
        </h2>
        <p className="text-primary-700 leading-7 sm:leading-8 text-base sm:text-lg md:text-xl mb-10">
          Looking to study abroad and need guidance? NWC Education is a leading
          study abroad agency, offering comprehensive support to international
          students. Whether you're aiming for the UK, Australia, Canada, or
          other top destinations, we guide you through every step—from
          university selection to visa assistance. With our global presence,
          expert consultants, and personalized services.
        </p>

        <h3 className="font-bold text-primary-800 text-2xl sm:text-3xl md:text-4xl mb-8 text-center">
          Your Dream Destinations
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {countries.map((country) => (
            <Link
              href={`/study-abroad/${country.slug.current}`}
              key={country._id}
            >
              <DynamicCountryCard
                title={country.title}
                imageUrl={urlFor(country.mainImage).url()}
                description={country.hoverDescription}
              />
            </Link>
          ))}
        </div>

        <div className="w-full py-10">
          <div className="h-px w-full bg-[#FF0000]/20" />
          <nav
            aria-label="Breadcrumb"
            className={cn("w-full bg-white px-2 sm:px-4 py-1 sm:py-2")}
          >
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              {breadcrumbItems.map((item, index) => (
                <li key={item.href} className="flex items-center gap-2">
                  <Link
                    href={item.href}
                    className="text-[#FF0000] hover:underline"
                  >
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
      </section>
    </>
  );
};

export default StudyAbroadPage;
