"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { HelpCircleIcon } from "lucide-react";

gsap.registerPlugin(Draggable);

// Array of prestigious universities with their logos
const universities = [
  {
    id: 1,
    name: "Harvard",
    logo: "/university-1.jpeg", // Replace with actual logo URL
  },
  {
    id: 2,
    name: "University of Leeds",
    logo: "/university-2.jpeg",
  },
  {
    id: 3,
    name: "University of Western Australia",
    logo: "/university-3.jpeg",
  },
  {
    id: 4,
    name: "University of Glasgow",
    logo: "/university-4.jpeg",
  },
  {
    id: 5,
    name: "Trinity College Dublin",
    logo: "/university-5.jpeg",
  },
  {
    id: 6,
    name: "Fanshawe College",
    logo: "/university-6.jpeg",
  },
  {
    id: 7,
    name: "Fleming College Toronto",
    logo: "/university-7.jpeg",
  },
].map((uni) => ({
  ...uni,
  // Fallback to placeholder if logo URL is not available
  logo:
    uni.logo ||
    `/placeholder.svg?height=80&width=200&text=${encodeURIComponent(uni.name)}`,
}));

export default function UniversityLogoSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderContentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!sliderRef.current || !sliderContentRef.current) return;

    const slider = sliderRef.current;
    const sliderContent = sliderContentRef.current;

    // Clone the slider content
    const clone = sliderContent.cloneNode(true);
    slider.appendChild(clone);

    // Set up the animation
    animationRef.current = gsap.to(slider.children, {
      xPercent: -100,
      repeat: -1,
      duration: 20,
      ease: "linear",
    });

    // Set up draggable functionality
    Draggable.create(slider, {
      type: "x",
      edgeResistance: 0.5,
      onDragStart: () => {
        if (animationRef.current) {
          animationRef.current.pause();
        }
        setIsPaused(true);
      },
      onDragEnd: () => {
        if (animationRef.current && !isPaused) {
          animationRef.current.play();
        }
      },
      onPress: () => {
        if (animationRef.current) {
          animationRef.current.pause();
        }
        setIsPaused(true);
      },
      onRelease: () => {
        if (!isPaused && animationRef.current) {
          animationRef.current.play();
        }
      },
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      Draggable.get(slider)?.kill();
    };
  }, [isPaused]);

  const togglePause = () => {
    setIsPaused(!isPaused);
    if (animationRef.current) {
      isPaused ? animationRef.current.play() : animationRef.current.pause();
    }
  };

  return (
    <div className="  max-w-7xl  mx-auto px-5 pt-5 mb-20  mt-10  -z-20">
      <div className="bg-[#1a1a2e]/50 rounded-3xl  overflow-hidden ">
        <h2 className="text-center max-sm:text-xl text-white text-2xl font-medium  pt-4">
          Our Students Studying at
        </h2>

        <div
          ref={sliderRef}
          className="flex cursor-grab active:cursor-grabbing"
          onClick={togglePause}
        >
          <div
            ref={sliderContentRef}
            className="flex items-center space-x-12 py-8 px-6"
          >
            {universities.map((uni) => (
              <div key={uni.id} className="flex-shrink-0">
                <div className="w-[180px] h-[90px] bg-white rounded-lg overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={uni.logo}
                    alt={`${uni.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1b122f]/40 to-transparent -z-20"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1b122f]/40 to-transparent -z-20"></div>
      </div>
    </div>
  );
}
