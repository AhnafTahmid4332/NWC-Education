import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  GraduationCap,
  BookOpen,
  Building2,
  Wallet,
  Briefcase,
  HelpCircle,
} from "lucide-react";


const cardIcons = {
  Overview: GraduationCap,
  "Course Subjects": BookOpen,
  "Best University & Programs": Building2,
  "Fees & Scholarships Facility": Wallet,
  "Career & Work Opportunity": Briefcase,
  "FAQ and Application Support": HelpCircle,
};

async function getCountryData(slug: string) {
  try {
    const data = await client.fetch(
      `*[_type == "Country" && slug.current == $slug][0]{
        title,
        pageTitle,
        pageSubTitle,
        mainImage,
        fromCountries[]{
          name,
          slug,
          cards[]{
            title,
            description,
            slug
          }
        }
      }`,
      { slug }
    );

    console.log("Fetched country data:", JSON.stringify(data, null, 2));

    if (!data) {
      console.error(`No data found for country with slug: ${slug}`);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error fetching country data:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const countryData = await getCountryData(params.slug);

  if (!countryData) {
    return {
      title: "Country Not Found",
    };
  }

  return {
    title: `Study in ${countryData.title || "Abroad"} | NWC Education`,
    description: countryData.pageSubTitle || "Study abroad opportunities",
  };
}

export default async function CountryPage({
  params,
}: {
  params: { slug: string };
}) {
  const countryData = await getCountryData(params.slug);

  console.log("Rendering country data:", JSON.stringify(countryData, null, 2));

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        {countryData.mainImage && (
          <Image
            src={urlForImage(countryData.mainImage).url()}
            alt={countryData.title || "Study Abroad"}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            {countryData.title || "Study Abroad"}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">
              {countryData.pageTitle || "Study Abroad Opportunities"}
            </h2>
            <p className="text-gray-700 text-lg xl:min-w-[1200px]">
              {countryData.pageSubTitle ||
                "Explore international education options"}
            </p>
          </div>

          {/* From Countries Section */}
          {countryData.fromCountries && countryData.fromCountries.length > 0 ? (
            countryData.fromCountries.map((fromCountry, index) => (
              <div key={index} className="space-y-8">
                <h3 className="text-2xl font-bold text-[#1a1a1a]">
                  {fromCountry.name || "Study Destination"}
                </h3>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link
                    href={`/study-abroad/${params.slug}/${fromCountry.slug?.current || ""}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                      <div className="mb-4">
                        <GraduationCap className="w-8 h-8 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-[#1a1a1a] mb-3">
                        {fromCountry.name || "Study Destination"}
                      </h4>
                      <p className="text-gray-700 mb-4">
                        {`Learn about studying in ${countryData.title} from ${fromCountry.name}`}
                      </p>
                      <span className="text-red-600 font-medium group-hover:underline">
                        Learn More {">"}
                      </span>
                    </div>
                  </Link>
                  {fromCountry.cards &&
                    fromCountry.cards.map((card, cardIndex) => {
                      const IconComponent =
                        cardIcons[card.title as keyof typeof cardIcons] ||
                        GraduationCap;
                      return (
                        <Link
                          href={`/study-abroad/${params.slug}/${fromCountry.slug?.current || ""}/${card.slug?.current || ""}`}
                          key={cardIndex}
                          className="group"
                        >
                          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="mb-4">
                              <IconComponent className="w-8 h-8 text-red-600" />
                            </div>
                            <h4 className="text-xl font-bold text-[#1a1a1a] mb-3">
                              {card.title || "Information"}
                            </h4>
                            <p className="text-gray-700 mb-4">
                              {card.description ||
                                "Learn more about studying abroad"}
                            </p>
                            <span className="text-red-600 font-medium group-hover:underline">
                              Learn More {">"}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            ))
          ) : (
            <p>No country information available.</p>
          )}
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
            <li className="text-gray-700" aria-current="page">
              {countryData.title || "Country"}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
