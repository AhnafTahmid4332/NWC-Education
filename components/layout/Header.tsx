"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { clsx } from "clsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const buttonRef = useRef(null);
  const gsapRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  const initAnimations = useCallback(() => {
    if (
      !headerRef.current ||
      !logoRef.current ||
      !buttonRef.current ||
      !gsapRef.current ||
      !scrollTriggerRef.current
    )
      return;

    const { gsap, ScrollTrigger } = gsapRef.current;

    gsap.to(headerRef.current, {
      height: "50px",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "100px",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(logoRef.current, {
      scale: 0.7,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: logoRef.current,
        start: "top top",
        end: "100px top",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(buttonRef.current, {
      scale: 0.8,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top top",
        end: "100px top",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    setIsClient(true);

    const loadGSAP = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      gsapRef.current = {
        gsap: gsapModule.default,
        ScrollTrigger: scrollTriggerModule.default,
      };
      gsapRef.current.gsap.registerPlugin(gsapRef.current.ScrollTrigger);
      scrollTriggerRef.current = gsapRef.current.ScrollTrigger;
      initAnimations();
    };

    loadGSAP();

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.getAll().forEach((t) => t.kill());
      }
    };
  }, [initAnimations]);

  useEffect(() => {
    if (isClient && gsapRef.current) {
      initAnimations();
    }
  }, [isClient, pathname, initAnimations]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevState) => !prevState);
    if (isClient && gsapRef.current) {
      const { gsap } = gsapRef.current;
      gsap.to(isOpen ? ".X-icon" : ".hamburger-menu", {
        rotation: isOpen ? -180 : 180,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [isClient, isOpen]);

  const links = [
    { name: "Student Counselling", slug: "student-counseling" },
    { name: "Application Process", slug: "application-process" },
    { name: "Financial Guidance", slug: "financial-guidance" },
    { name: "Visa Application Assistance", slug: "visa-assistance" },
  ];

  const countryLinks = [
    { name: "UK", slug: "uk" },
    { name: "Australia", slug: "australia" },
    { name: "Germany", slug: "germany" },
    { name: "Finland", slug: "finland" },
    { name: "Sweden", slug: "sweden" },
    { name: "Denmark", slug: "denmark" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="shrinkingHeader pl-24 shadow-2xl flex justify-between items-center fixed w-full h-[100px]  max-md:px-7 bg-white transition-all duration-500 z-50 px-4 pr-24"
      >
        <Link
          href="/"
          ref={logoRef}
          className="header-logo text-primary-300 text-5xl font-black max-sm:text-3xl transform-origin-left"
        >
          NWC
        </Link>
        <nav className="relative">
          <ul className="flex max-xl:hidden border-none gap-8 items-center">
            <li className="text-primary-700 text-xl hover:text-yellow-500">
              <Link href="/">Home</Link>
            </li>
            <li className="group relative">
              <Link
                href="/study-abroad"
                className="flex gap-1 items-center hover:text-yellow-500"
              >
                <p className="text-primary-700 text-xl hover:text-yellow-500 text-nowrap max-[1050px]:text-base max-[800px]:text-sm">
                  Study Abroad
                </p>
                <ChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 mt-2 w-[250px] bg-white p-2 shadow-lg rounded-md border-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {countryLinks.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/study-abroad/study-in-${country.slug}`}
                    className="block p-3 hover:bg-gray-50 rounded-md cursor-pointer text-primary-700"
                  >
                    {`Study in ${country.name}`}
                  </Link>
                ))}
              </div>
            </li>
            <li className="text-primary-700 text-xl hover:text-yellow-500">
              <Link href="/partner-universities">Universities</Link>
            </li>
            <li className="group relative">
              <div className="flex gap-1 items-center hover:text-yellow-500 cursor-pointer">
                <p className="text-primary-700 text-xl hover:text-yellow-500">
                  Services
                </p>
                <ChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
              </div>
              <div className="absolute left-0 mt-2 w-[250px] bg-white p-2 shadow-lg rounded-md border-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {links.map(({ name, slug }) => (
                  <Link
                    key={slug}
                    href={`/our-services/${slug}`}
                    className="block p-3 hover:bg-gray-50 rounded-md cursor-pointer text-primary-700"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </li>
            <li className="group relative">
              <Link
                href="/blog"
                className="flex gap-1 items-center hover:text-yellow-500"
              >
                <p className="text-primary-700 text-xl hover:text-yellow-500 text-nowrap">
                  Blogs & Events
                </p>
                <ChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 mt-2 w-[250px] bg-white p-2 shadow-lg rounded-md border-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  href="/blog"
                  className="block p-3 hover:bg-gray-50 rounded-md cursor-pointer text-primary-700"
                >
                  Blogs
                </Link>
                <Link
                  href="/event"
                  className="block p-3 hover:bg-gray-50 rounded-md cursor-pointer text-primary-700"
                >
                  Events & Expo
                </Link>
              </div>
            </li>
            <li className="text-primary-700 text-xl hover:text-yellow-500 text-nowrap">
              <Link href="/global-branches">Global Branches</Link>
            </li>
          </ul>
        </nav>

        <Link href="/apply-now">
          <button
            ref={buttonRef}
            className="btn_red mr-[-60px] !py-[16px] !px-7 text-nowrap max-xl:hidden apply-now-button"
          >
            Apply Now
          </button>
        </Link>

        <div onClick={toggleMenu} className="transition-all duration-500">
          {isOpen ? (
            <X size={40} className="xl:hidden hover:text-yellow-500 X-icon" />
          ) : (
            <Menu
              size={40}
              className="xl:hidden hover:text-yellow-500 hamburger-menu"
            />
          )}
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav
        className={clsx(
          "fixed top-0 left-0 w-full xl:hidden bg-white pb-5 shadow-md pt-[110px] px-5 transition-all duration-500 z-40",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="home" className="border-none">
            <Link
              href="/"
              className="text-primary-700 text-xl hover:text-yellow-500 block py-4"
            >
              Home
            </Link>
          </AccordionItem>

          <AccordionItem value="study-abroad" className="border-none">
            <AccordionTrigger className="text-primary-700 text-xl hover:text-yellow-500 py-4">
              Study Abroad
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-4 pl-4">
                {countryLinks.map((country) => (
                  <Link
                    key={country.slug}
                    href={`/study-abroad/study-in-${country.slug}`}
                    className="block p-3 hover:bg-gray-50 rounded-md cursor-pointer text-primary-700"
                  >
                    {`Study in ${country.name}`}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="universities" className="border-none">
            <Link
              href="/partner-universities"
              className="text-primary-700 text-xl hover:text-yellow-500 block py-4"
            >
              Universities
            </Link>
          </AccordionItem>

          <AccordionItem value="services" className="border-none">
            <AccordionTrigger className="text-primary-700 text-xl hover:text-yellow-500 py-4">
              Services
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-4 pl-4">
                {links.map(({ name, slug }) => (
                  <Link
                    key={slug}
                    href={`/our-services/${slug}`}
                    className="text-primary-700 hover:text-yellow-500"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="blogs-events" className="border-none">
            <AccordionTrigger className="text-primary-700 text-xl hover:text-yellow-500 py-4">
              Blogs & Events
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-4 pl-4">
                <Link
                  href="/blog"
                  className="text-primary-700 hover:text-yellow-500"
                >
                  Blogs
                </Link>
                <Link
                  href="/event"
                  className="text-primary-700 hover:text-yellow-500"
                >
                  Events & expo
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="global-branches" className="border-none">
            <Link
              href="/global-branches"
              className="text-primary-700 text-xl hover:text-yellow-500 block py-4"
            >
              Global Branches
            </Link>
          </AccordionItem>
        </Accordion>
      </nav>
    </>
  );
}

export default Header;
