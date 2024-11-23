import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Facebook,
  Twitter,
  VibrateIcon as VK,
  PinIcon as Pinterest,
  RssIcon as Reddit,
} from "lucide-react";
import StudyAbroadForm from "@/components/study-abroad-form";

interface Props {
  params: {
    slug: string;
  };
}

async function getBlogPost(slug: string) {
  return await client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      title,
      mainImage,
      publishedAt,
      BlogInfo,
      body
    }`,
    { slug }
  );
}

const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-gray-700 text-lg leading-relaxed mb-6">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
        {children}
      </h3>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 mb-6 text-gray-700">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value.href}
        className="text-red-600 hover:text-red-800 transition duration-300 ease-in-out"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-gray-700">
        Post not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src={urlForImage(post.mainImage).url()}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 max-w-4xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr,400px] gap-12">
          {/* Left Column - Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {post.BlogInfo}
                </span>
                <time className="text-gray-600 text-sm">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>

            <article className="prose prose-lg max-w-none">
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </article>

            {/* Social Share */}
            <div className="flex gap-4 pt-8 border-t">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-gray-100"
              >
                <Mail className="h-5 w-5 text-gray-600" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-[#1877f2] text-white hover:bg-[#166fe5]"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-black text-white hover:bg-gray-800"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-[#e60023] text-white hover:bg-[#d50c22]"
              >
                <Pinterest className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-[#4C75A3] text-white hover:bg-[#446690]"
              >
                <VK className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-[#FF4500] text-white hover:bg-[#e63e00]"
              >
                <Reddit className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:sticky lg:top-8 h-fit">
            <StudyAbroadForm />
          </div>
        </div>
      </div>
    </div>
  );
}
