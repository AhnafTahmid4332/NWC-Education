"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CountryCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const CountryCard: React.FC<CountryCardProps> = ({
  title,
  imageUrl,
  description,
}) => {
  return (
    <div
      className={cn(
        "group relative h-[250px] sm:h-[300px] overflow-hidden rounded-lg transition-all duration-300 ease-in-out"
      )}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 transition-all duration-300 group-hover:bg-purple-900/50" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-4 sm:p-6 transition-all duration-300 group-hover:translate-y-[-20px]">
        <h2 className="text-xl sm:text-2xl font-bold text-white transition-all duration-300 group-hover:mb-2">
          {title}
        </h2>

        <p className="h-0 overflow-hidden text-white text-sm opacity-0 transition-all duration-300 group-hover:h-auto group-hover:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
