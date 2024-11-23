"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import {
  Facebook,
  Mail,
  PinIcon as Pinterest,
  RssIcon as Reddit,
  Twitter,
  VibrateIcon as VK,
} from "lucide-react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import StudentCounsellingLoading from "../../../components/StudentCounsellingLoading";
import Image from "next/image";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  country: z.string().min(1, "Please select a country"),
  intakeDate: z.string().min(1, "Please select an intake date"),
  qualification: z.string().min(1, "Previous qualification is required"),
  englishTest: z.string().min(1, "Please select your English test status"),
});

interface ServicePageData {
  HeroImage: string;
  title: string;
  SubTitle: string;
  body: any; // This will hold the Portable Text content
}

const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-gray-700 text-lg leading-relaxed mb-6">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-12">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-gray-900 mb-4 mt-10">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-medium text-gray-800 mb-4 mt-6">
        {children}
      </h4>
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
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-red-600 hover:text-red-800 transition duration-300 ease-in-out underline"
        >
          {children}
        </a>
      );
    },
  },
};

export default function StudentCounselling() {
  const pathname = usePathname();
  const [pageData, setPageData] = useState<ServicePageData | null>(null);

  // Extract the slug from the current pathname
  const slug = pathname.split("/").pop() || "student-counselling";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(
          `*[_type == "ServicePage" && slug.current == $slug][0]{
          HeroImage,
          title,
          SubTitle,
          body
        }`,
          { slug }
        );

        // If no result is found, try the default slug
        if (!result && slug !== "student-counselling") {
          const defaultResult =
            await client.fetch(`*[_type == "ServicePage" && slug.current == "student-counselling"][0]{
            HeroImage,
            title,
            SubTitle,
            body
          }`);
          setPageData(defaultResult);
        } else {
          setPageData(result);
        }
      } catch (error) {
        console.error("Error fetching page data:", error);
        // Fallback to a default state or error handling
        setPageData(null);
      }
    };

    fetchData();
  }, [slug]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      intakeDate: "",
      qualification: "",
      englishTest: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  if (!pageData) {
    return <StudentCounsellingLoading />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[470px]">
        <Image
          src={pageData.HeroImage}
          alt={pageData.title}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4 max-w-4xl">
            {pageData.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr,400px] gap-12">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                {pageData.SubTitle}
              </h2>
            </div>

            <div className="my-12">
              <PortableText
                value={pageData.body}
                components={portableTextComponents}
              />
            </div>

            <div className="border-t border-b border-gray-200 py-8 my-12">
              <p className="text-lg text-gray-700 italic">
                Don't navigate the complexities of international education
                alone. Let our experienced counsellors guide you towards the
                university of your dreams!
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-gray-100"
              >
                <Mail className="h-5 w-5 text-gray-600" />
                <span className="sr-only">Share via email</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-[#1877f2] text-white hover:bg-[#166fe5]"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Share on Facebook</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-black text-white hover:bg-gray-800"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-[#e60023] text-white hover:bg-[#d50c22]"
              >
                <Pinterest className="h-5 w-5" />
                <span className="sr-only">Share on Pinterest</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-[#4C75A3] text-white hover:bg-[#446690]"
              >
                <VK className="h-5 w-5" />
                <span className="sr-only">Share on VK</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-[#FF4500] text-white hover:bg-[#e63e00]"
              >
                <Reddit className="h-5 w-5" />
                <span className="sr-only">Share on Reddit</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:sticky lg:top-8 h-fit">
            <Card className="p-6 bg-white shadow-lg border-0 rounded-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  INTERESTED TO STUDY ABROAD WITH NWC?
                </h3>
                <p className="text-gray-600">
                  Let's Talk To Our Expert Counsellors
                </p>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="First Name"
                              className="bg-gray-50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Last Name"
                              className="bg-gray-50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Email"
                            type="email"
                            className="bg-gray-50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Phone Number"
                            className="bg-gray-50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-gray-50">
                              <SelectValue placeholder="Country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="aus">Australia</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="can">Canada</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="intakeDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Select Intake Date:"
                            className="bg-gray-50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="qualification"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Type your previous qualification"
                            className="bg-gray-50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="englishTest"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-gray-50">
                              <SelectValue placeholder="Select English Test Status:" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ielts">IELTS</SelectItem>
                            <SelectItem value="toefl">TOEFL</SelectItem>
                            <SelectItem value="pte">PTE</SelectItem>
                            <SelectItem value="none">Not taken yet</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white transition duration-300 ease-in-out"
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
