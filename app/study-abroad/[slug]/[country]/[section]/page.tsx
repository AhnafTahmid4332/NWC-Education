import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

// Define the components for PortableText with improved styling
const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-gray-700 text-base leading-relaxed mb-6 font-normal tracking-normal">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="text-gray-900 text-4xl sm:text-5xl font-bold mb-8 mt-12 leading-tight tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-gray-900 text-3xl sm:text-4xl font-semibold mb-6 mt-10 leading-tight tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-gray-800 text-2xl sm:text-3xl font-semibold mb-4 mt-8 leading-snug tracking-normal">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-gray-800 text-xl sm:text-2xl font-medium mb-4 mt-6 leading-snug tracking-normal">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-200 pl-4 py-2 mb-6 italic text-gray-600">
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
    title:
      sectionData.heroTitle ||
      `${sectionData.title} | Study in ${sectionData.parentTitle} from ${sectionData.countryName}`,
    description: `Information about ${sectionData.title} for studying in ${sectionData.parentTitle} from ${sectionData.countryName}`,
  };
}

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6">
            {sectionData.title} - Study in {sectionData.parentTitle} From{" "}
            {sectionData.countryName}
          </h2>

          {sectionData.contentBody && (
            <PortableText
              value={sectionData.contentBody}
              components={portableTextComponents}
            />
          )}
        </article>

        {/* Breadcrumbs */}
        <nav className="mt-16" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-red-600 hover:underline">
                Home
              </Link>
            </li>
            <li className="text-gray-500" aria-hidden="true">{`>`}</li>
            <li>
              <Link
                href="/study-abroad"
                className="text-red-600 hover:underline"
              >
                Study Abroad
              </Link>
            </li>
            <li className="text-gray-500" aria-hidden="true">{`>`}</li>
            <li>
              <Link
                href={`/study-abroad/${params.slug}`}
                className="text-red-600 hover:underline"
              >
                Study in {sectionData.parentTitle}
              </Link>
            </li>
            <li className="text-gray-500" aria-hidden="true">{`>`}</li>
            <li>
              <Link
                href={`/study-abroad/${params.slug}/${params.country}`}
                className="text-red-600 hover:underline"
              >
                From {sectionData.countryName}
              </Link>
            </li>
            <li className="text-gray-500" aria-hidden="true">{`>`}</li>
            <li className="text-gray-700" aria-current="page">
              {sectionData.title}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
