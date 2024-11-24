import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Breadcrumbs from "@/components/BreadCrumbs";

interface BreadcrumbItem {
  label: string;
  href: string;
}

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Study Abroad", href: "/study-abroad" },
];

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-lg leading-relaxed text-gray-700 mb-6 font-normal tracking-normal">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 mt-12 leading-tight tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 mt-10 leading-tight tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 mt-8 leading-snug tracking-normal">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4 mt-6 leading-snug tracking-normal">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 py-2 italic text-gray-600 mb-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="mb-1 leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="mb-1 leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm text-gray-800">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out underline"
        >
          {children}
        </a>
      );
    },
    highlight: ({ children }) => (
      <span className="bg-yellow-200 px-1 rounded">{children}</span>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure className="my-8">
          <div
            className="relative w-full h-0"
            style={{ paddingBottom: "56.25%" }}
          >
            <Image
              src={urlForImage(value).url()}
              alt={value.alt || ""}
              fill
              sizes="(min-width: 1280px) 1200px, (min-width: 780px) 91.67vw, 100vw"
              className="rounded-lg object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-sm text-gray-600 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    callout: ({ value }) => {
      return (
        <div
          className={`p-4 my-6 rounded-lg border ${value.tone === "info" ? "bg-blue-50 border-blue-200 text-blue-800" : value.tone === "warning" ? "bg-yellow-50 border-yellow-200 text-yellow-800" : value.tone === "error" ? "bg-red-50 border-red-200 text-red-800" : "bg-gray-50 border-gray-200 text-gray-800"}`}
        >
          <p className="font-medium mb-2">{value.title}</p>
          <p>{value.text}</p>
        </div>
      );
    },
    code: ({ value }) => {
      return (
        <pre className="bg-gray-800 rounded-lg p-4 my-6 overflow-x-auto">
          <code className="text-sm font-mono text-gray-200">{value.code}</code>
        </pre>
      );
    },
    table: ({ value }) => {
      return (
        <div className="my-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {value.rows[0].cells.map((cell: string, index: number) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {value.rows
                .slice(1)
                .map((row: { cells: string[] }, index: number) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    {row.cells.map((cell: string, cellIndex: number) => (
                      <td
                        key={cellIndex}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
};

// Fetch section data
async function getSectionData(slug: string, country: string, section: string) {
  try {
    const data = await client.fetch(
      `*[_type == "Country" && slug.current == $slug][0]{
        title,
        fromCountries[]{
          name,
          "slug": slug.current,
          cards[]{
            title,
            "slug": slug.current,
            heroImage,
            heroTitle,
            contentBody
          }
        }
      }`,
      { slug }
    );

    if (!data) {
      console.error(`No data found for country with slug: ${slug}`);
      return null;
    }

    const countryData = data.fromCountries?.find(
      (fc: any) => fc.slug === country
    );

    if (!countryData) {
      console.error(`No data found for country: ${country} in ${slug}`);
      return null;
    }

    const sectionData = countryData.cards?.find(
      (card: any) => card.slug === section
    );

    if (!sectionData) {
      console.error(
        `No data found for section: ${section} in ${country}, ${slug}`
      );
      return null;
    }

    return {
      ...sectionData,
      parentTitle: data.title,
      countryName: countryData.name,
      countrySlug: countryData.slug,
    };
  } catch (error) {
    console.error("Error fetching section data:", error);
    return null;
  }
}

// Metadata generation
export async function generateMetadata({
  params,
}: {
  params: { slug: string; country: string; section: string };
}): Promise<Metadata> {
  const sectionData = await getSectionData(
    params.slug,
    params.country,
    params.section
  );

  if (!sectionData) {
    return {
      title: "Section Not Found",
    };
  }

  return {
    title: sectionData.heroTitle || "Section Page",
    description:
      sectionData.contentBody[0]?.children[0]?.text || "Section page",
  };
}

// Main Section Page Component
export default async function SectionPage({
  params,
}: {
  params: { slug: string; country: string; section: string };
}) {
  const sectionData = await getSectionData(
    params.slug,
    params.country,
    params.section
  );

  if (!sectionData) {
    return (
      <div className="container py-12">
        <h1 className="text-2xl font-semibold text-red-600">
          Section not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        {sectionData.heroImage && (
          <Image
            src={urlForImage(sectionData.heroImage).url()}
            alt={sectionData.heroTitle || sectionData.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4 max-w-5xl">
            {sectionData.heroTitle || sectionData.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose max-w-full xl:px-24 px-5 pt-5 ">
        <PortableText
          value={sectionData.contentBody}
          components={portableTextComponents}
        />
      </div>

      {/* breadcrumbs */}
      <Breadcrumbs
        slug={params.slug}
        section={params.section}
        country={params.country}
      />
    </div>
  );
}
