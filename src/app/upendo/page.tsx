"use client";

import BackBtn from "@/components/backbtn";
import Image from "next/image";
import { useState, useEffect } from "react";

const screenshots = [
  { src: "/upendo/H.svg", alt: "Upendo Data View" },
  { src: "/upendo/blokje1.svg", alt: "Upendo UI Component 1" },
  { src: "/upendo/blokje1-1.svg", alt: "Upendo UI Component 2" },
  { src: "/upendo/blokje2.svg", alt: "Upendo Feature Block 1" },
  { src: "/upendo/A.svg", alt: "Upendo Hero Section" },
  { src: "/upendo/blokje2-1.svg", alt: "Upendo Feature Block 2" },
  { src: "/upendo/textv5.svg", alt: "Upendo Text Component" },
  { src: "/upendo/G.svg", alt: "Upendo Dashboard" },
  { src: "/upendo/blokje3.svg", alt: "Upendo Service Card 1" },
  { src: "/upendo/blokje3-1.svg", alt: "Upendo Service Card 2" },
  { src: "/upendo/L.svg", alt: "Upendo Layout Element" },
  { src: "/upendo/I.svg", alt: "Upendo Interface" },
  { src: "/upendo/packagev1.3.svg", alt: "Upendo Package Display" },
  { src: "/upendo/blokje3-2.svg", alt: "Upendo Service Card 3" },
  { src: "/upendo/blokje1-2.svg", alt: "Upendo UI Component 3" },
  { src: "/upendo/blokje2-2.svg", alt: "Upendo Feature Block 3" },
  { src: "/upendo/textv7.svg", alt: "Upendo Text Component 2" },
  { src: "/upendo/J.svg", alt: "Upendo Navigation" },
  { src: "/upendo/abilitiesv1.svg", alt: "Upendo Abilities Section" },
  { src: "/upendo/K.svg", alt: "Upendo UI Element" },
];

const ITEMS_PER_PAGE = 8;

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedImages, setLoadedImages] = useState<typeof screenshots>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load initial batch of images
    setLoadedImages(screenshots.slice(0, ITEMS_PER_PAGE));
  }, []);

  useEffect(() => {
    if (hoveredImage) {
      const timer = setTimeout(() => setFadeIn(true), 50);
      return () => clearTimeout(timer);
    } else {
      setFadeIn(false);
    }
  }, [hoveredImage]);

  const loadMoreImages = () => {
    setIsLoading(true);
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Simulate network delay for smooth loading
    setTimeout(() => {
      setLoadedImages((prev) => [
        ...prev,
        ...screenshots.slice(startIndex, endIndex),
      ]);
      setCurrentPage(nextPage);
      setIsLoading(false);
    }, 500);
  };

  const handleShowImage = (src: string) => {
    setHoveredImage(src);
  };

  const handleCloseImage = () => {
    setFadeIn(false);
    setTimeout(() => setHoveredImage(null), 300);
  };

  const hasMoreImages = loadedImages.length < screenshots.length;

  return (
    <main className="w-full relative min-h-screen overflow-hidden">
      <BackBtn />

      {/* Hero Section with Mockup Image */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 group">
          <div className="relative w-full h-full">
            <Image
              src="/upendo.svg"
              alt="Upendo"
              fill
              sizes="100vw"
              priority
              quality={90}
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="animate-fadeIn transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30"></div>
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <h1 className="font-['Syne'] font-extrabold text-3xl md:text-5xl mt-10 text-white mb-4 animate-slideUp">
                UPENDO
              </h1>
              <p className="text-white max-w-2xl mx-auto font-['Syne'] text-lg animate-slideUp animation-delay-200">
                Client group project for 2manydots
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 md:px-[70px] mb-8">
        {/* Two Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-16">
          <div className="md:col-span-2 bg-[#191919] p-8 rounded-lg">
            <h3 className="font-['Poppins'] font-semibold text-xl text-white mb-4">
              What is Upendo?
            </h3>
            <p className="text-white/70 font-['Poppins'] text-sm mb-2 md:text-base leading-relaxed">
              Upendo is a group project we did for 2manydots. 2manydots wanted
              to create a new company where the user can get clear insights and
              data for their own website. {"We've"} created the website that
              shows all of
              {" Upendo's"} services. <br></br>For this project, the client
              already had a brandguide for us to use.
            </p>
            <p className="text-white/70 font-['Poppins'] text-sm md:text-base leading-relaxed">
              I participated in the UX/UI design and the front-end development.
            </p>
          </div>
          <div className="md:col-span-1 bg-[#191919] p-8 rounded-lg">
            <h3 className="font-['Poppins'] font-semibold text-xl text-white mb-4">
              Included
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#0e0e0e] text-white/80 text-sm font-['Syne'] rounded-full">
                Figma
              </span>
              <span className="px-3 py-1 bg-[#0e0e0e] text-white/80 text-sm font-['Syne'] rounded-full">
                Tailwind
              </span>
              <span className="px-3 py-1 bg-[#0e0e0e] text-white/80 text-sm font-['Syne'] rounded-full">
                Next.js
              </span>
              <span className="px-3 py-1 bg-[#0e0e0e] text-white/80 text-sm font-['Syne'] rounded-full">
                TypeScript
              </span>
            </div>
          </div>
        </div>

        {/* Screenshots Section */}
        <h2 className="font-['Syne'] font-bold text-3xl text-center text-white mb-12">
          Component Screenshotss
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {loadedImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg transition-all duration-500"
            >
              <div
                className="relative w-full aspect-square bg-[#191919] rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => handleShowImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  quality={85}
                  className="object-cover object-center hover:scale-105 transition-all duration-500"
                  loading={index < 4 ? "eager" : "lazy"}
                />
              </div>

              {hoveredImage === image.src && (
                <div
                  className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-pointer transition-opacity duration-300 ease-in-out ${
                    fadeIn ? "opacity-100" : "opacity-0"
                  }`}
                  onClick={handleCloseImage}
                >
                  <div className="relative flex items-center justify-center h-full w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={800}
                      className={`max-w-[70%] max-h-[90vh] object-contain rounded-lg transition-opacity duration-300 ease-in-out ${
                        fadeIn ? "opacity-100" : "opacity-0"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                      priority
                    />
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {hasMoreImages && (
          <div className="flex justify-center mt-8 mb-8">
            <button
              onClick={loadMoreImages}
              disabled={isLoading}
              className="px-6 py-2 bg-[#191919] text-white rounded-full hover:bg-[#252525] transition-colors duration-300 disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
