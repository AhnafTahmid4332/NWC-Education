// app/page.tsx
import { Metadata } from "next";
import ClientHome from "@/components/ClientHome";
import ServerCard from "@/components/ui/NewsCard";
import NewsCard from "@/components/ui/NewsCard";

export const metadata: Metadata = {
  title: "NWC Education",
  description: "Globally Top Rated Study Aboard Consultants",
};

export default async function Home() {
  return (
    <>
      <ClientHome />
    </>
  );
}
