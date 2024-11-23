"use client";

import dynamic from "next/dynamic";
import React from "react";

const CountryCard = dynamic(() => import("@/components/CountryCard"), {
  ssr: false,
});

interface DynamicCountryCardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const DynamicCountryCard: React.FC<DynamicCountryCardProps> = ({
  title,
  imageUrl,
  description,
}) => {
  return (
    <CountryCard title={title} imageUrl={imageUrl} description={description} />
  );
};

export default DynamicCountryCard;
