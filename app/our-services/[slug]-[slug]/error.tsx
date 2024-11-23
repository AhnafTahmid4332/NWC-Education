"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-4">
          We apologize for the inconvenience. Please try again later.
        </p>
        <Button
          onClick={reset}
          className="bg-red-600 hover:bg-red-700 text-white transition duration-300 ease-in-out"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
