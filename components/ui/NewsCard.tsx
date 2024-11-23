"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

// Function to format the time ago
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

interface Post {
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  BlogInfo: string;
}

export default function NewsCard() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await client.fetch<Post[]>(`
          *[_type == "blogPost"] | order(publishedAt desc) {
            title,
            slug,
            mainImage,
            publishedAt,
            BlogInfo
          }`);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Limit the posts to only the first 3
  const latestPosts = posts.slice(0, 3);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <h5 className="font-bold text-center text-2xl sm:text-3xl lg:text-4xl text-primary-800 mb-8 sm:mb-12">
        News & Articles
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {latestPosts.map((post) => (
          <Link key={post.slug.current} href={`/blog/${post.slug.current}`}>
            <Card className="flex flex-col rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden h-full">
              <div
                className="w-full h-48 sm:h-56 lg:h-64 bg-cover bg-center rounded-t-lg"
                style={{
                  backgroundImage: `url(${urlForImage(post.mainImage).url()})`,
                }}
              ></div>
              <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-4">
                <div className="flex gap-2 items-center justify-center text-sm text-primary-500 font-medium">
                  <span className="uppercase text-primary-300">
                    {post.BlogInfo}
                  </span>
                  <span className="text-primary-700">
                    {formatTimeAgo(post.publishedAt)}
                  </span>
                </div>
                <h5 className="leading-tight text-center text-lg sm:text-xl lg:text-2xl font-bold text-primary-800 mt-2 sm:mt-4">
                  {post.title}
                </h5>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
