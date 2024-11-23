"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Building2, Mail, Phone, Facebook, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface Office {
  title: string;
  address: string;
  email: string;
  phone: string;
  socialMedia: string;
  mapUrl: string;
  embedUrl: string;
}

interface Location {
  name: string;
  offices: Office[];
}

export default function Page() {
  const locations: Location[] = [
    {
      name: "Head Office (UK)",
      offices: [
        {
          title: "London Office",
          address:
            "Unit 1, Sky View Tower, Stratford, London E15 2GR, United Kingdom",
          email: "london@nwc.ac",
          phone: "+44 (0)203 488 1195",
          socialMedia: "nwc.educationuk",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.432932659837!2d-0.1276473!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1639580842044!5m2!1sen!2suk",
        },
      ],
    },
    {
      name: "Bangladesh",
      offices: [
        {
          title: "Dhaka Office",
          address: "House 27, Road 5, Dhanmondi, Dhaka 1205, Bangladesh",
          email: "dhaka@nwc.ac",
          phone: "+880 2-9661301",
          socialMedia: "nwc.educationbd",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2975405573375!2d90.37484661492443!3d23.739057984593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd8f1%3A0xbe0c61dd5d59b396!2sUniversity%20of%20Dhaka!5e0!3m2!1sen!2sbd!4v1639581042044!5m2!1sen!2sbd",
        },
        {
          title: "Chittagong Office",
          address: "GEC Circle, Chittagong 4000, Bangladesh",
          email: "chittagong@nwc.ac",
          phone: "+880 31-651577",
          socialMedia: "nwc.educationctg",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.9201523862747!2d91.83145631489548!3d22.359391785290085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd89aaa8239cd%3A0x6e65fa00001dd59f!2sUniversity%20of%20Chittagong!5e0!3m2!1sen!2sbd!4v1639581142044!5m2!1sen!2sbd",
        },
        {
          title: "Sylhet Office",
          address: "Kumargaon, Sylhet 3114, Bangladesh",
          email: "sylhet@nwc.ac",
          phone: "+880 821-761023",
          socialMedia: "nwc.educationsyl",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.416490077922!2d91.86785731494959!3d24.91728848400474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet%20Agricultural%20University!5e0!3m2!1sen!2sbd!4v1639581242044!5m2!1sen!2sbd",
        },
        {
          title: "Rajshahi Office",
          address: "Motihar, Rajshahi 6205, Bangladesh",
          email: "rajshahi@nwc.ac",
          phone: "+880 721-750041",
          socialMedia: "nwc.educationraj",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.0307475649655!2d88.63581631493807!3d24.36728498428395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefa96a38d031%3A0x10f93a950ed6f410!2sUniversity%20of%20Rajshahi!5e0!3m2!1sen!2sbd!4v1639581342044!5m2!1sen!2sbd",
        },
        {
          title: "Khulna Office",
          address: "Khulna University, Khulna 9208, Bangladesh",
          email: "khulna@nwc.ac",
          phone: "+880 41-720171",
          socialMedia: "nwc.educationkhl",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6504749124073!2d89.53281631490516!3d22.802554985056387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9bda1d0ff6e5%3A0x123a926908efcd0c!2sKhulna%20University!5e0!3m2!1sen!2sbd!4v1639581442044!5m2!1sen!2sbd",
        },
      ],
    },
    {
      name: "Nigeria",
      offices: [
        {
          title: "Lagos Office",
          address:
            "Plot 1415 Adeola Hopewell Street, Victoria Island, Lagos, Nigeria",
          email: "lagos@nwc.ac",
          phone: "+234 1 460 7200",
          socialMedia: "nwc.educationng",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7304448416574!2d3.4216216148784837!3d6.431188095344718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5336f0a31ed%3A0x6b5e7b7fc351c7!2sUniversity%20of%20Lagos!5e0!3m2!1sen!2sng!4v1639581542044!5m2!1sen!2sng",
        },
        {
          title: "Abuja Office",
          address:
            "Plot 1000 Cadastral Zone, Central Business District, Abuja, Nigeria",
          email: "abuja@nwc.ac",
          phone: "+234 9 870 2000",
          socialMedia: "nwc.educationabj",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1051575073066!2d7.479044614896285!3d9.058545393508866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba5c0e31bbb%3A0x5e8f0b5a81f0f6d0!2sUniversity%20of%20Abuja!5e0!3m2!1sen!2sng!4v1639581642044!5m2!1sen!2sng",
        },
        {
          title: "Kano Office",
          address:
            "Kano University of Science and Technology, Wudil, Kano, Nigeria",
          email: "kano@nwc.ac",
          phone: "+234 64 950 0000",
          socialMedia: "nwc.educationkano",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.8485982721095!2d8.516944614923995!3d11.975555991513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae80c6d5555555%3A0x2f9a88a4c3b91965!2sKano%20University%20of%20Science%20and%20Technology%2C%20Wudil!5e0!3m2!1sen!2sng!4v1639581742044!5m2!1sen!2sng",
        },
        {
          title: "Port Harcourt Office",
          address:
            "University of Port Harcourt, East-West Road, Choba, Port Harcourt, Nigeria",
          email: "portharcourt@nwc.ac",
          phone: "+234 84 230 870",
          socialMedia: "nwc.educationph",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5501075684025!2d7.052777614869448!3d4.8983340963929785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd7fa2bf8f6f%3A0x5e71f7f8c8a123a6!2sUniversity%20of%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1639581842044!5m2!1sen!2sng",
        },
        {
          title: "Enugu Office",
          address: "University of Nigeria, Nsukka, Enugu State, Nigeria",
          email: "enugu@nwc.ac",
          phone: "+234 42 770 0000",
          socialMedia: "nwc.educationenu",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5505075684025!2d7.405777614869448!3d6.8683340963929785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044714b0fb8d1e5%3A0x5e8f0b5a81f0f6d0!2sUniversity%20of%20Nigeria%2C%20Nsukka!5e0!3m2!1sen!2sng!4v1639581942044!5m2!1sen!2sng",
        },
      ],
    },
    {
      name: "Pakistan",
      offices: [
        {
          title: "Islamabad Office",
          address: "Plot No. 1, Sector H-8/1, Islamabad, Pakistan",
          email: "islamabad@nwc.ac",
          phone: "+92 51 9250100",
          socialMedia: "nwc.educationpk",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.7963785684025!2d73.075777614869448!3d33.6683340963929785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbef8f6b2b3f9%3A0x1b1b5e8e6b2b3f9!2sQuaid-i-Azam%20University!5e0!3m2!1sen!2spk!4v1639582042044!5m2!1sen!2spk",
        },
        {
          title: "Karachi Office",
          address: "University Road, Karachi 75270, Pakistan",
          email: "karachi@nwc.ac",
          phone: "+92 21 99261300",
          socialMedia: "nwc.educationkhi",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.416490077922!2d67.11285731494959!3d24.91728848400474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70a31f45a9%3A0x7c2b7b7f7b2b7b7f!2sUniversity%20of%20Karachi!5e0!3m2!1sen!2spk!4v1639582142044!5m2!1sen!2spk",
        },
        {
          title: "Lahore Office",
          address: "Canal Bank Road, Lahore 54000, Pakistan",
          email: "lahore@nwc.ac",
          phone: "+92 42 99231105",
          socialMedia: "nwc.educationlhr",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5505075684025!2d74.305777614869448!3d31.5683340963929785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39196b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sUniversity%20of%20the%20Punjab!5e0!3m2!1sen!2spk!4v1639582242044!5m2!1sen!2spk",
        },
        {
          title: "Peshawar Office",
          address: "University Road, Peshawar 25120, Pakistan",
          email: "peshawar@nwc.ac",
          phone: "+92 91 9216701",
          socialMedia: "nwc.educationpew",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5505075684025!2d71.505777614869448!3d34.0183340963929785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b6b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sUniversity%20of%20Peshawar!5e0!3m2!1sen!2spk!4v1639582342044!5m2!1sen!2spk",
        },
        {
          title: "Quetta Office",
          address: "Sariab Road, Quetta 87300, Pakistan",
          email: "quetta@nwc.ac",
          phone: "+92 81 9213301",
          socialMedia: "nwc.educationqta",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.5505075684025!2d66.995777614869448!3d30.1883340963929785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2de1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sUniversity%20of%20Balochistan!5e0!3m2!1sen!2spk!4v1639582442044!5m2!1sen!2spk",
        },
      ],
    },
    {
      name: "Morocco",
      offices: [
        {
          title: "Casablanca Office",
          address: "Boulevard Moulay Youssef, Casablanca 20000, Morocco",
          email: "casablanca@nwc.ac",
          phone: "+212 522-227272",
          socialMedia: "nwc.educationma",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.9463785684025!2d-7.635777614869448!3d33.5983340963929785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2b1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sUniversity%20Hassan%20II%20of%20Casablanca!5e0!3m2!1sen!2sma!4v1639582542044!5m2!1sen!2sma",
        },
        {
          title: "Rabat Office",
          address: "Avenue des Nations Unies, Agdal, Rabat 10000, Morocco",
          email: "rabat@nwc.ac",
          phone: "+212 537-772750",
          socialMedia: "nwc.educationrba",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5505075684025!2d-6.865777614869448!3d34.0183340963929785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c7b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sMohammed%20V%20University!5e0!3m2!1sen!2sma!4v1639582642044!5m2!1sen!2sma",
        },
        {
          title: "Marrakech Office",
          address: "Avenue Abdelkrim Khattabi, Marrakech 40000, Morocco",
          email: "marrakech@nwc.ac",
          phone: "+212 524-434814",
          socialMedia: "nwc.educationmrk",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.5505075684025!2d-8.015777614869448!3d31.6483340963929785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sCadi%20Ayyad%20University!5e0!3m2!1sen!2sma!4v1639582742044!5m2!1sen!2sma",
        },
        {
          title: "Fez Office",
          address: "Route Imouzzer, Fès 30000, Morocco",
          email: "fez@nwc.ac",
          phone: "+212 535-609621",
          socialMedia: "nwc.educationfez",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5505075684025!2d-5.005777614869448!3d34.0383340963929785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sUniversity%20of%20Sidi%20Mohamed%20Ben%20Abdellah!5e0!3m2!1sen!2sma!4v1639582842044!5m2!1sen!2sma",
        },
        {
          title: "Tangier Office",
          address: "Route de l'Aéroport, Tangier 90000, Morocco",
          email: "tangier@nwc.ac",
          phone: "+212 539-393954",
          socialMedia: "nwc.educationtng",
          mapUrl: "https://maps.google.com",
          embedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.5505075684025!2d-5.895777614869448!3d35.7683340963929785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b1b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sAbdelmalek%20Essaadi%20University!5e0!3m2!1sen!2sma!4v1639582942044!5m2!1sen!2sma",
        },
      ],
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className="min-h-screen bg-background mb-16">
      {/* Hero Section */}
      <div className="relative h-[460px] w-full mb-12">
        <Image
          src="/hero-bg.jpeg"
          alt="Global Branches Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
      <section className="px-32 max-sm:px-5 max-xl:px-6">
        {/* Breadcrumb */}
        <div className="w-full border-b">
          <div className="container px-4 py-2">
            <Link href="/" className="text-red-500 hover:underline">
              Home
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="container px-4 py-8 md:px-6 lg:px-8">
          <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">
            Global Branches
          </h1>

          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar Navigation */}
            <nav className="space-y-2">
              {locations.map((location) => (
                <button
                  key={location.name}
                  onClick={() => setSelectedLocation(location)}
                  className={cn(
                    "w-full rounded-lg px-4 py-2 text-left text-lg transition-colors",
                    selectedLocation.name === location.name
                      ? "bg-red-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  {location.name}
                </button>
              ))}
            </nav>

            {/* Office Grid */}
            <div className="lg:col-span-3">
              <div className="grid gap-8 md:grid-cols-2">
                {selectedLocation.offices.map((office, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold">{office.title}</h3>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start gap-3">
                          <Building2 className="mt-1 h-5 w-5 text-red-500" />
                          <p>{office.address}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-red-500" />
                          <a
                            href={`mailto:${office.email}`}
                            className="hover:underline"
                          >
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-red-500" />
                          <a
                            href={`tel:${office.phone}`}
                            className="hover:underline"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Facebook className="h-5 w-5 text-red-500" />
                          <p>{office.socialMedia}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-red-500" />
                          <a
                            href={office.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-500 hover:underline"
                          >
                            Get Direction
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="aspect-video w-full">
                      <iframe
                        src={office.embedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-b-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
