// export default function StudentCounsellingLoading() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md text-center">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600 mx-auto"></div>
//         <p className="mt-4 text-gray-600">Loading...</p>
//       </div>
//     </div>
//   );
// }

"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function StudentCounsellingLoading() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Hero Section Skeleton */}
      <Skeleton className="w-full h-[470px] bg-gray-200" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr,400px] gap-12">
          {/* Left Column - Content Skeleton */}
          <div className="space-y-8">
            <div>
              <Skeleton className="h-12 w-3/4 mb-4" />
              <Skeleton className="h-8 w-1/2 mb-6" />
            </div>

            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>

            <div className="border-t border-b py-8 my-12">
              <Skeleton className="h-6 w-full" />
            </div>

            <div className="flex flex-wrap gap-2">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="w-10 h-10 rounded-full" />
              ))}
            </div>
          </div>

          {/* Right Column - Form Skeleton */}
          <div className="lg:sticky lg:top-8 h-fit">
            <Card className="p-6 bg-gray-100 border-0">
              <div className="text-center mb-6">
                <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                <Skeleton className="h-4 w-1/2 mx-auto" />
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>

                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-10 w-full" />
                ))}

                <Skeleton className="h-10 w-full" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
