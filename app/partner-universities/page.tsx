import Image from "next/image";
import { Mail, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Page() {
  const universities = [
    "Anglia Ruskin University",
    "Arden University",
    "Aston University",
    "Brunel University London",
    "Bangor University",
    "Birkbeck University London",
    "Birmingham City University",
    "Canterbury Christ Church University",
    "Cardiff Metropolitan University",
    "Coventry University",
    "De Montfort University",
    "Glasgow Caledonian University (London and Scotland)",
    "Heriot-Watt University",
    "New Castle College HEI",
    "Northumbria University (All Campuses)",
    "Oxford Brooks University",
    "Solent University",
    "St Mary's University London",
    "Teesside University",
    "University of Chester",
    "University of East London",
    "University of Greenwich, London",
    "University of Hertfordshire",
    "University of Law",
    "University of Lincoln",
    "University of Portsmouth",
    "University of Suffolk",
    "University of the Creative Arts",
    "University of The West of England",
    "University of the West of Scotland",
    "University of Ulster London & Birmingham",
    "University of Worcester",
    "York St John University London",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[460px] w-full mb-12 max-sm:mb-4">
        <Image
          src="/hero-bg.jpeg"
          alt="London cityscape"
          fill
          className="object-cover"
          priority
        />
      </div>

      <section className="px-32 max-sm:px-5 max-xl:px-6">
        {/* Main Content */}
        <div className="container px-4 py-8 md:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Left Column - Universities Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">
                  Universities
                </h1>

                <h2 className="mb-6 text-2xl font-semibold">
                  Services we offer to the Universities
                </h2>
                <p className="mb-6 text-muted-foreground">
                  At NWC Education, we offer various services to universities
                  and institutions.
                </p>

                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    • Regularly organise education fairs and expositions at
                    local and international levels
                  </li>
                  <li>
                    • Facilitate and promote university open admission days
                  </li>
                  <li>
                    • Spot assessment days at our offices with university
                    delegates
                  </li>
                  <li>• Campus visits through our local offices</li>
                  <li>
                    • Seminars/workshops on various topics and current affairs
                  </li>
                  <li>
                    • Special activities to promote partners' newly launched
                    courses and services
                  </li>
                  <li>
                    • Regular Facebook / Zoom live sessions on various topics,
                    from spot assessments to visa processes
                  </li>
                  <li>
                    • Most importantly, all our student and partner university
                    services are FREE
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-2xl font-semibold">
                  List of Universities
                </h2>
                <ul className="grid gap-3 sm:grid-cols-2 text-muted-foreground">
                  {universities.map((university, index) => (
                    <li key={index}>• {university}</li>
                  ))}
                </ul>
              </div>

              {/* Social Share */}
              <div className="pt-6">
                <h3 className="mb-4 text-lg font-semibold">Share this page</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-[#1877f2] text-white hover:bg-[#1877f2]/90"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-[#1da1f2] text-white hover:bg-[#1da1f2]/90"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-[#0077b5] text-white hover:bg-[#0077b5]/90"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-[#25D366] text-white hover:bg-[#25D366]/90"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="rounded-lg bg-muted p-8">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-semibold mb-2">
                  INTERESTED TO STUDY ABROAD WITH NWC?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Let's Talk To Our Expert Counsellors
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone Number" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="date" placeholder="Select Intake Date" />
                <Input placeholder="Type your previous qualification" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select English Test Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ielts">IELTS</SelectItem>
                    <SelectItem value="toefl">TOEFL</SelectItem>
                    <SelectItem value="pte">PTE</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  type="submit"
                  className="w-full bg-red-500 text-white hover:bg-red-600"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
