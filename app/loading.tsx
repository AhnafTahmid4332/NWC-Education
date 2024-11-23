import React from "react";
import { GraduationCap, Plane, BookOpen, Calendar } from "lucide-react";

const loading = () => {
  return (
    <div className="w-full animate-pulse">
      {/* Hero Section */}
      <section className="w-full h-[600px] bg-gray-200 relative px-8 py-20">
        <div className="space-y-4 max-w-3xl">
          <div className="h-6 bg-gray-300 w-2/3 rounded"></div>
          <div className="h-20 bg-gray-300 w-full rounded"></div>
          <div className="h-12 bg-gray-300 w-3/4 rounded"></div>
          <div className="flex gap-4 mt-8">
            <div className="h-12 bg-gray-300 w-48 rounded"></div>
            <div className="h-12 bg-gray-300 w-64 rounded"></div>
          </div>
        </div>
        {/* Infinite Slider Placeholder */}
        <div className="h-24 bg-gray-300 w-full absolute bottom-0 left-0"></div>
      </section>

      {/* Study Abroad Section */}
      <section className="px-8 py-16 bg-white">
        <div className="text-center space-y-4 mb-12">
          <div className="h-8 bg-gray-200 w-96 mx-auto rounded"></div>
          <div className="h-6 bg-gray-200 w-[500px] mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-64 bg-gray-100 rounded-lg p-6 flex flex-col justify-between"
            >
              <div className="h-6 bg-gray-200 w-3/4 rounded"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 w-full rounded"></div>
                <div className="h-4 bg-gray-200 w-5/6 rounded"></div>
              </div>
              <div className="h-10 bg-gray-200 w-32 mx-auto rounded"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gray-200">
        <div className="text-center space-y-4">
          <div className="h-8 bg-gray-300 w-64 mx-auto rounded"></div>
          <div className="h-6 bg-gray-300 w-80 mx-auto rounded"></div>
          <div className="h-10 bg-gray-300 w-48 mx-auto rounded mt-6"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-8 py-16 flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="h-8 bg-gray-200 w-48 rounded"></div>
          <div className="aspect-video bg-gray-200 rounded-lg"></div>
        </div>
        <div className="w-full lg:w-1/2 space-y-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-4 pb-4 border-b">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="space-y-2 flex-1">
                <div className="h-6 bg-gray-200 w-48 rounded"></div>
                <div className="h-4 bg-gray-200 w-full rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="h-8 bg-gray-200 w-72 mx-auto rounded mb-12"></div>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-2/3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-16 bg-gray-200 w-16 rounded"></div>
                <div className="h-6 bg-gray-200 w-48 rounded"></div>
                <div className="h-16 bg-gray-200 w-full rounded"></div>
              </div>
            ))}
          </div>
          <div className="w-64 h-64 bg-gray-200 rounded-lg"></div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="px-8 py-16">
        <div className="h-8 bg-gray-200 w-64 rounded mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full"></div>
              <div className="h-6 bg-gray-200 w-32 rounded mt-4"></div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-16 bg-gray-900">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 h-64 bg-gray-800 rounded-lg"></div>
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="h-6 bg-gray-800 w-full rounded"></div>
            <div className="h-6 bg-gray-800 w-5/6 rounded"></div>
            <div className="h-6 bg-gray-800 w-4/6 rounded"></div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="px-8 py-16">
        <div className="h-8 bg-gray-200 w-48 rounded mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-96 bg-gray-100 rounded-lg p-4 space-y-4">
              <div className="h-48 bg-gray-200 rounded"></div>
              <div className="h-6 bg-gray-200 w-3/4 rounded"></div>
              <div className="h-24 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="h-8 bg-gray-200 w-64 mx-auto rounded mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-48 bg-gray-200 rounded"></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default loading;
