"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import ReactCookieBot from "react-cookiebot";
import { Button } from "@/components/ui/button";
import {
  Banknote,
  BookAIcon,
  Calendar,
  GraduationCap,
  Handshake,
  Plane,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const InfiniteSlider = dynamic(() => import("@/components/InfiniteSlider"), {
  ssr: false,
});
const NewsCard = dynamic(() => import("./ui/NewsCard"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

interface AchievementCircleProps {
  number: string;
  text: string;
  bgColor: string;
  textColor: string;
  size: string;
  numberSize: string;
  textSize: string;
}

const AchievementCircle: React.FC<AchievementCircleProps> = ({
  number,
  text,
  bgColor,
  textColor,
  size,
  numberSize,
  textSize,
}) => (
  <div
    className={`flex items-center justify-center ${size} ${bgColor} rounded-full`}
  >
    <div className="text-center p-4">
      <div className={`font-bold ${textColor} ${numberSize}`}>{number}</div>
      <div className={`${textColor} ${textSize} mt-2 break-words`}>{text}</div>
    </div>
  </div>
);

const countrySlugs = [
  "study-in-uk",
  "study-in-australia",
  "study-in-germany",
  "study-in-finland",
  "study-in-sweden",
  "study-in-denmark",
];

const countryNames = {
  "study-in-uk": "Study in UK",
  "study-in-australia": "Study in Australia",
  "study-in-germany": "Study in Germany",
  "study-in-finland": "Study in Finland",
  "study-in-sweden": "Study in Sweden",
  "study-in-denmark": "Study in Denmark",
};

const domainGroupId = "8002e9a1-25d7-4b5d-af03-5e21b4c952e1";

export default function ClientHome() {
  const heroRef = useRef<HTMLElement>(null);
  const studyAbroadRef = useRef<HTMLElement>(null);
  const helpSectionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const whyChooseRef = useRef<HTMLElement>(null);
  const counsellingRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const accreditationsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const animatedElements = document.querySelectorAll('[data-gsap="true"]');
    animatedElements.forEach((el) => {
      el.style.willChange = "transform, opacity";
    });

    // Batch animations using gsap.timeline()
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial hero animations - staggered but in a single timeline
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll("p, h1, .btn_white");
      tl.from(elements, {
        opacity: 0,
        x: 100,
        duration: 0.8,
        stagger: 0.15,
      });
    }

    // Create separate timelines for scroll-triggered animations
    const scrollAnimations = () => {
      // Study Abroad Section
      if (studyAbroadRef.current) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: studyAbroadRef.current,
              start: "top 80%",
            },
          })
          .from(studyAbroadRef.current.querySelectorAll(".card"), {
            opacity: 0,
            y: 50,
            duration: 0.6,
            stagger: 0.1,
          });
      }

      // Help Section - Simple transform
      if (helpSectionRef.current) {
        gsap.from(helpSectionRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          scrollTrigger: {
            trigger: helpSectionRef.current,
            start: "top 80%",
          },
        });
      }

      // Services Section - Batch animations
      if (servicesRef.current) {
        const serviceElements = servicesRef.current.querySelectorAll(".flex");
        gsap
          .timeline({
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
            },
          })
          .from(serviceElements, {
            opacity: 0,
            x: -50,
            duration: 0.6,
            stagger: 0.1,
          });
      }

      // Why Choose Section - Simplified animation
      if (whyChooseRef.current) {
        const elements = whyChooseRef.current.querySelectorAll(".flex-col");
        gsap
          .timeline({
            scrollTrigger: {
              trigger: whyChooseRef.current,
              start: "top 80%",
            },
          })
          .from(elements, {
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            stagger: 0.1,
          });
      }

      // Achievement Circles - Batch animation
      if (achievementsRef.current) {
        const elements = achievementsRef.current.querySelectorAll(
          ".rounded-full, .text-center"
        );
        gsap
          .timeline({
            scrollTrigger: {
              trigger: achievementsRef.current,
              start: "top 80%",
            },
          })
          .from(elements, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
          });
      }

      // About Section - Simplified animation
      if (aboutRef.current) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 80%",
            },
          })
          .from(aboutRef.current.querySelectorAll("div, h3"), {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
          });
      }

      // Accreditations - Simple fade
      if (accreditationsRef.current) {
        gsap.from(accreditationsRef.current.querySelectorAll("img"), {
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: accreditationsRef.current,
            start: "top 90%",
          },
        });
      }
    };

    // Initialize scroll animations after a slight delay
    const initScrollAnimations = () => {
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        scrollAnimations();
      });
    };

    // Delay scroll animations initialization
    setTimeout(initScrollAnimations, 100);

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      animatedElements.forEach((el) => {
        el.style.willChange = "auto";
      });
    };
  }, []);
  return (
    <>
      <ReactCookieBot domainGroupId={domainGroupId} />

      <section
        ref={heroRef}
        className="bg-hero-img w-full bg-cover bg-no-repeat bg-center border-2 border-gray-100 pt-20 px-4 sm:px-8 md:px-14 h-auto"
      >
        <p className="mt-14 text-white text-lg sm:text-xl md:text-2xl">
          Globally Top Rated Study Aboard Consultants
        </p>
        <h1 className="mt-4 text-white text-4xl sm:text-6xl md:text-8xl font-bold triggerHeader">
          NWC
          <br />
          EDUCATION
        </h1>
        <p className="mt-8 text-white text-xl sm:text-2xl md:text-3xl">
          We aim to establish a bond between millions of students, their dreams
          of achieving successful careers, and our partner universities.
        </p>
        <div className="flex flex-col sm:flex-row mt-10 gap-4">
          <Link href="/apply-now">
            <Button className="btn_white w-full sm:w-auto py-6 ">
              <Calendar className="mr-2" size={24} />
              Book appointment
            </Button>
          </Link>
          <Link href="/study-abroad/study-in-uk/">
            <Button className="btn_white w-full sm:w-auto py-6">
              <GraduationCap className="mr-2" size={24} />
              January 2025 Intake in the UK
            </Button>
          </Link>
        </div>
        <InfiniteSlider />
      </section>

      <section
        ref={studyAbroadRef}
        className="mt-14 w-full bg-white px-4 sm:px-6"
      >
        <div className="grid gap-6 justify-center">
          <h2 className="text-primary-800 font-bold text-2xl sm:text-3xl text-center">
            Study Abroad at Your Dream University
          </h2>
          <p className="text-primary-700 text-center text-base sm:text-lg leading-7 max-w-[500px] mx-auto">
            Build Your Dream Career with World-Class Education and Innovative
            Programs at Top Destinations Like the UK, Australia, Finland,
            Sweden, Denmark, and Germany!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countrySlugs.map((slug) => {
            const country = countryNames[slug]; // Get the country name from the object
            return (
              <Link key={slug} href={`/study-abroad/${slug}`}>
                <Card className="py-14 px-4 h-full rounded-md text-center flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-primary-800 text-xl sm:text-2xl font-bold">
                    {country}
                  </h3>
                  <p className="text-primary-700 mt-4 leading-7 text-sm sm:text-base">
                    Experience world-class education and a vibrant lifestyle.
                    Ideal for students seeking academic excellence and
                    adventure.
                  </p>
                  <Button className="btn_red mt-6 self-center">
                    Learn More
                  </Button>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
      <section
        ref={helpSectionRef}
        className="my-24 py-16 px-4 w-full bg-primary-300 text-center flex flex-col justify-center items-center"
      >
        <h3 className="text-white text-2xl sm:text-3xl font-bold">
          We're Here to Help You
        </h3>
        <p className="text-white mt-2 text-base sm:text-xl">
          "We don't just give consultancy but we give care to your future"
        </p>
        <Link href="/apply-now">
          <Button className="btn_white mt-6">Check your Eligibility</Button>
        </Link>
      </section>

      <section
        ref={servicesRef}
        className="my-24 flex flex-col lg:flex-row items-center gap-12 px-4 sm:px-8 lg:px-12"
      >
        <div className="w-full lg:w-1/2">
          <h4 className="text-primary-800 font-bold text-2xl sm:text-3xl uppercase">
            Our Services
          </h4>
          <iframe
            src="https://www.youtube.com/embed/JD-uRleLEbs?list=TLGGWjUqWxYLPRcyMjExMjAyNA"
            frameBorder="0"
            title="YouTube video player"
            className="mt-8 w-full aspect-video rounded-md"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          {[
            {
              icon: <Handshake size={40} />,
              title: "University Admission Support",
              description:
                "Obtain your university admission with our comprehensive guidance",
            },
            {
              icon: <Banknote size={40} />,
              title: "Finance Application Support",
              description:
                "Navigate financial applications effortlessly with our expert support",
            },
            {
              icon: <Plane size={40} />,
              title: "Visa Application Support",
              description:
                "Simplify visa applications with our comprehensive support and guidance",
            },
            {
              icon: <BookAIcon size={40} />,
              title: "IELTS 360",
              description:
                "Boost your confidence & proficiency with our specialized program",
            },
          ].map((service, index) => (
            <div key={index} className="flex items-center gap-4 border-b pb-4">
              {service.icon}
              <div>
                <h5 className="text-primary-800 font-bold text-xl">
                  {service.title}
                </h5>
                <p className="text-primary-700 mt-1 text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={whyChooseRef} className="py-20 px-4 sm:px-8 lg:px-20">
        <h3 className="text-primary-800 font-bold text-center text-2xl sm:text-3xl mb-12">
          Why Choose NWC Education
        </h3>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-2/3">
            {[
              {
                number: "01",
                title: "Market Knowledge",
                description:
                  "Experienced in education system dynamics, thriving for excellence in admissions",
              },
              {
                number: "02",
                title: "Friendly Faces",
                description:
                  "Our trained consultants handle situations calmly and professionally, aiding partner universities",
              },
              {
                number: "03",
                title: "Pre & Post Services",
                description:
                  "We continuously support students and partners, offering pre and post-admission services",
              },
              {
                number: "04",
                title: "Ed-Tech Company",
                description:
                  "NWC Education revolutionizes learning, empowering students with cutting-edge technology",
              },
            ].map((item, index) => (
              <div key={index} className="flex-col">
                <h4 className="text-primary-300 text-5xl sm:text-6xl font-bold">
                  {item.number}
                </h4>
                <h5 className="text-primary-800 text-xl sm:text-2xl font-bold mt-2">
                  {item.title}
                </h5>
                <p className="text-primary-700 text-base sm:text-lg leading-7 mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <Image
            src="/graduation.png"
            alt="Graduation"
            width={350}
            height={350}
            className="w-full max-w-[250px] lg:max-w-[350px] object-contain"
          />
        </div>
      </section>

      <section
        ref={counsellingRef}
        className="my-24 py-14 w-full bg-black px-4 sm:px-8 lg:px-14 bg-contact-img bg-no-repeat bg-cover bg-center"
      >
        <div className="max-w-md">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase leading-tight mb-6">
            get free counselling
          </h3>
          <Link href="/apply-now">
            <Button className="btn_white py-3 px-6">Contact Us</Button>
          </Link>
        </div>
      </section>

      <section ref={achievementsRef} className="px-4 sm:px-6 lg:px-12 py-12">
        <h3 className="text-primary-800 font-bold text-2xl sm:text-3xl lg:text-4xl uppercase text-center lg:text-left mb-8 sm:mb-12">
          our achievements
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-start">
          <AchievementCircle
            number="8"
            text="Countries"
            bgColor="bg-white"
            textColor="text-primary-700"
            size="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
            numberSize="text-3xl sm:text-4xl lg:text-5xl"
            textSize="text-xs sm:text-sm lg:text-base"
          />
          <AchievementCircle
            number="120"
            text="Top Ranking Universities"
            bgColor="bg-primary-800"
            textColor="text-white"
            size="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56"
            numberSize="text-3xl sm:text-4xl lg:text-5xl"
            textSize="text-xs sm:text-sm lg:text-base"
          />
          <AchievementCircle
            number="35k+"
            text="of satisfied students"
            bgColor="bg-gray-200"
            textColor="text-primary-800"
            size="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52"
            numberSize="text-3xl sm:text-4xl lg:text-5xl"
            textSize="text-xs sm:text-sm lg:text-base"
          />
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <AchievementCircle
              number="19 years"
              text="of successful experience"
              bgColor="bg-primary-300"
              textColor="text-white"
              size="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
              numberSize="text-xl sm:text-2xl lg:text-3xl"
              textSize="text-xs sm:text-sm"
            />
            <div className="text-center lg:text-left max-w-xs">
              <h6 className="text-primary-800 font-bold text-lg sm:text-xl mb-2">
                NWC Education
              </h6>
              <p className="text-primary-700 text-sm leading-relaxed">
                NWC Education is a student consultancy organization dedicated to
                stress-free admission experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={aboutRef}
        className="pt-24 my-24 w-full bg-black px-4 sm:px-8 lg:px-24 flex flex-col"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
          <div className="bg-contact-img w-full h-64 lg:h-auto bg-no-repeat bg-cover bg-center"></div>
          <div className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed max-w-2xl">
            NWC Education is a student consultancy organization dedicated to
            stress-free admission experiences. Over the last 19 years, we have
            managed to open multiple offices around the world. We are truly
            determined to create a global network to provide millions of
            students with quality services.
          </div>
        </div>
        <h3 className="text-white mt-12 text-center text-6xl sm:text-8xl lg:text-[220px] font-bold">
          NWC
        </h3>
      </section>

      <NewsCard />

      <section ref={accreditationsRef} className="my-14 px-4 sm:px-8 lg:px-24">
        <h3 className="text-primary-800 font-bold text-2xl sm:text-3xl uppercase text-center mb-8">
          accreditations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "/university-1.jpeg",
            "/university-2.jpeg",
            "/university-3.jpeg",
          ].map((src, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={src}
                alt={`University ${index + 1}`}
                width={300}
                height={200}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
