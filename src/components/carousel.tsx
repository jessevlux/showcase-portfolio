"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useDotButtons } from "@/hooks/useDotButtons";

const images = [
  "/1.svg",
  "/2.svg",
  "/3.svg",
  "/4.svg",
  "/5.svg",
  "/6.svg",
  "/7.svg",
  "/8.svg",
  "/9.svg",
  "/10.svg",
  "/11.svg",
];

export default function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplayOptions = Autoplay({
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: false,
      dragFree: false,
      skipSnaps: false,
      duration: 30, // Smooth transition
    },
    [autoplayOptions]
  );

  const { scrollPrev, scrollNext, onDotButtonClick } = useDotButtons(emblaApi);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    onSelect(); // Call once to initialize

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const getSlideStyles = (index: number) => {
    const isActive = index === selectedIndex;
    return {
      opacity: isActive ? 1 : 0.15,
      zIndex: isActive ? 10 : 5,
      transform: isActive ? "scale(1.15)" : "scale(1)",
    };
  };

  return (
    <div className="w-full bg-gradient-to-b from-black/55 to-[#0e0e0e]">
      <section className="relative w-full flex items-center justify-center overflow-hidden pt-12 mt-20">
        <div className="relative z-20 text-center">
          <h2 className="font-['Syne'] font-extrabold text-2xl md:text-3xl mb-10 text-white">
            Designs
          </h2>
        </div>
      </section>

      <div className="relative max-w-full mx-auto pb-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src, index) => (
              <div
                key={`slide-${index}`}
                className="flex-[0_0_50%] md:flex-[0_0_28%] lg:flex-[0_0_22%] mx-1 transition-all duration-500 relative"
                style={getSlideStyles(index)}
              >
                <div className="h-52 md:h-72 relative mb-8 mt-8">
                  <Image
                    src={src}
                    alt={`Design ${index + 1}`}
                    fill
                    className="object-contain rounded-2xl"
                    priority={index <= 2}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => onDotButtonClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
