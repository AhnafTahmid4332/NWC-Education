import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

async function getSectionData(slug: string, country: string) {
  try {
    const data = await client.fetch(
      `*[_type == "Country" && slug.current == $slug][0]{
        title,
        fromCountries[]{
          name,
          "slug": slug.current,
          heroImage,
          heroTitle,
          body
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

    return { ...countryData, parentTitle: data.title };
  } catch (error) {
    console.error("Error fetching section data:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; country: string };
}) {
  const sectionData = await getSectionData(params.slug, params.country);

  if (!sectionData) {
    return {
      title: "Section Not Found",
    };
  }

  return {
    title:
      sectionData.heroTitle ||
      `Study in ${sectionData.parentTitle} from ${sectionData.name}`,
    description: `Information about studying in ${sectionData.parentTitle} for students from ${sectionData.name}`,
  };
}

export default async function SectionPage({
  params,
}: {
  params: { slug: string; country: string };
}) {
  const sectionData = await getSectionData(params.slug, params.country);

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        {sectionData.heroImage && (
          <Image
            src={urlForImage(sectionData.heroImage).url()}
            alt={`Study in ${sectionData.parentTitle} from ${sectionData.name}`}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4 max-w-5xl">
            Study in {sectionData.parentTitle} from {sectionData.name}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6">
            Best Guide to Study in {sectionData.parentTitle} From{" "}
            {sectionData.name} 2025
          </h2>

          <div className="text-gray-700">
            <PortableText
              value={sectionData.body}
              components={{
                block: {
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-[#1a1a1a] mt-8 mb-4">
                      {children}
                    </h2>
                  ),
                  normal: ({ children }) => (
                    <p className="mb-4 leading-relaxed">{children}</p>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      {children}
                    </ul>
                  ),
                },
                marks: {
                  link: ({ children, value }) => (
                    <a
                      href={value.href}
                      className="text-red-600 hover:underline"
                    >
                      {children}
                    </a>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-[#1a1a1a]">
                      {children}
                    </strong>
                  ),
                },
              }}
            />
          </div>
        </div>

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
            <li className="text-gray-700" aria-current="page">
              Study in {sectionData.parentTitle} from {sectionData.name}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
