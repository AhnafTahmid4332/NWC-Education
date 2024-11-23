import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { ChevronRight } from "lucide-react";

async function getBlogPosts() {
  return await client.fetch(`*[_type == "blogPost"] | order(publishedAt desc) {
    title,
    slug,
    mainImage,
    publishedAt,
    BlogInfo
  }`);
}

function formatTimeAgo(date: string) {
  const now = new Date();
  const postDate = new Date(date);
  const diffInHours = Math.floor(
    (now.getTime() - postDate.getTime()) / (1000 * 60 * 60)
  );

  if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  }
  return `${Math.floor(diffInHours / 24)} days ago`;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/hero-bg.jpeg"
          alt="Students graduating"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Blog Title Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12">
          Blog & News
        </h1>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug.current}`} key={post.slug.current}>
              <article className="group bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] xl:h-[450px]">
                <div className="relative aspect-[16/10] ">
                  <Image
                    src={urlForImage(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 xl:p-12">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-red-600 font-medium text-sm uppercase tracking-wide">
                      {post.BlogInfo}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {formatTimeAgo(post.publishedAt)}
                    </span>
                  </div>
                  <h2 className="text-[22px] xl:text-3xl leading-tight font-bold text-[#1a1a1a] line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
                    {post.title}
                  </h2>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white font-medium">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 font-medium">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
