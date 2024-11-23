"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Globe2,
  GraduationCap,
  MapPin,
  Search,
  X,
} from "lucide-react";

// Demo data
const events = [
  {
    id: 1,
    title: "Last Call for UK University Applications",
    date: "November 16, 2024",
    location: "Bangladesh Sylhet",
    countries: ["Denmark", "Finland", "Sweden", "United Kingdom"],
    studyLevels: [
      "Doctor of Philosophy (PhD)",
      "Postgraduate",
      "Undergraduate",
    ],
    image: "/university-1.jpeg",
  },
  {
    id: 2,
    title: "UK Education Expo November 2024 | Meet 100+ UK Universities",
    date: "November 23, 2024",
    location: "Bangladesh Dhaka",
    countries: ["Australia", "European Union", "United Kingdom"],
    studyLevels: [
      "Doctor of Philosophy (PhD)",
      "Master of Philosophy (MPhil)",
      "Postgraduate",
      "Undergraduate",
    ],
    image: "/university-2.jpeg",
  },
  {
    id: 3,
    title: "Denmark & Sweden Spot Admission Day – December 2024",
    date: "December 21, 2024",
    location: "Bangladesh Dhaka",
    countries: ["Denmark", "Sweden"],
    studyLevels: ["Postgraduate", "Undergraduate"],
    image: "/university-3.jpeg",
  },
];

const studyDestinations = [
  "Australia",
  "Denmark",
  "European Union",
  "Finland",
  "Sweden",
  "United Kingdom",
];

const cities = ["Dhaka", "Sylhet"];

const studyLevels = [
  "Doctor of Philosophy (PhD)",
  "Master of Philosophy (MPhil)",
  "Postgraduate",
  "Undergraduate",
];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(
    []
  );
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDestination =
      selectedDestinations.length === 0 ||
      event.countries.some((country) => selectedDestinations.includes(country));
    const matchesCity =
      selectedCities.length === 0 ||
      selectedCities.includes(event.location.split(" ").pop() || "");
    const matchesLevel =
      selectedLevels.length === 0 ||
      event.studyLevels.some((level) => selectedLevels.includes(level));

    return matchesSearch && matchesDestination && matchesCity && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-[#f8f9fa] ">
      {/* Hero Section */}
      <div
        className="w-full h-[400px] m bg-cover mb-16 bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">
          Events & Global Education Expo
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
        <div className="grid lg:grid-cols-[300px,1fr] gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-8 h-fit">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Filter Events</h2>

              {/* Search */}
              <div className="relative mb-6">
                <Input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              {/* Study Destination */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Study Destination</h3>
                <div className="space-y-2">
                  {studyDestinations.map((destination) => (
                    <div key={destination} className="flex items-center">
                      <Checkbox
                        id={destination}
                        checked={selectedDestinations.includes(destination)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedDestinations([
                              ...selectedDestinations,
                              destination,
                            ]);
                          } else {
                            setSelectedDestinations(
                              selectedDestinations.filter(
                                (d) => d !== destination
                              )
                            );
                          }
                        }}
                      />
                      <label
                        htmlFor={destination}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {destination}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event City */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Event City</h3>
                <div className="space-y-2">
                  {cities.map((city) => (
                    <div key={city} className="flex items-center">
                      <Checkbox
                        id={city}
                        checked={selectedCities.includes(city)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedCities([...selectedCities, city]);
                          } else {
                            setSelectedCities(
                              selectedCities.filter((c) => c !== city)
                            );
                          }
                        }}
                      />
                      <label
                        htmlFor={city}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {city}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Study Levels */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">Featured Study Levels</h3>
                  {selectedLevels.length > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedLevels([])}
                      className="h-8 text-sm text-red-500 hover:text-red-600"
                    >
                      Reset
                    </Button>
                  )}
                </div>
                <div className="space-y-2">
                  {studyLevels.map((level) => (
                    <div key={level} className="flex items-center">
                      <Checkbox
                        id={level}
                        checked={selectedLevels.includes(level)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedLevels([...selectedLevels, level]);
                          } else {
                            setSelectedLevels(
                              selectedLevels.filter((l) => l !== level)
                            );
                          }
                        }}
                      />
                      <label
                        htmlFor={level}
                        className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="aspect-[16/9] relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Globe2 className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">
                        {event.countries.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <GraduationCap className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">
                        {event.studyLevels.join(", ")}
                      </span>
                    </div>
                  </div>
                  <Button className="btn_red w-full">View and Register</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
