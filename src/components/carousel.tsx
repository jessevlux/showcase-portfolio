"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

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
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Add duplicates to the beginning and end for smoother looping
  // We're adding multiple copies to ensure no matter how fast the user swipes, there's always a buffer
  const extendedImages = [
    ...images.slice(-3),
    ...images,
    ...images.slice(0, 3),
  ];

  const autoplay = Autoplay({
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    playOnInit: true,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false, // We'll handle looping manually for smoother transitions
      align: "center",
      containScroll: "keepSnaps",
      duration: 50,
      startIndex: 3, // Start at index 3 which is the first actual image after the duplicated ones
    },
    [autoplay]
  );

  // Function to handle the loop manually when reaching the end or beginning
  const handleLoop = useCallback(() => {
    if (!emblaApi) return;

    const lastIndex = extendedImages.length - 1;
    const currIndex = emblaApi.selectedScrollSnap();

    // If we've reached one of the duplicate sections at the ends, jump to the corresponding real section
    if (currIndex <= 2) {
      // We're in the first duplicate section, jump to the corresponding real images at the end
      const targetIndex = currIndex + images.length;
      emblaApi.scrollTo(targetIndex, false); // Jump without animation
    } else if (currIndex >= lastIndex - 2) {
      // We're in the last duplicate section, jump to the corresponding real images at the beginning
      const targetIndex = currIndex - images.length;
      emblaApi.scrollTo(targetIndex, false); // Jump without animation
    }
  }, [emblaApi, extendedImages.length, images.length]);

  // Handle carousel scroll events
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const physicalIdx = emblaApi.selectedScrollSnap();
      setPrevIndex(selectedIndex);
      setSelectedIndex(getLogicalIndex(physicalIdx));
    };

    const onSettled = () => {
      handleLoop();
      setIsTransitioning(false);
    };

    const onScroll = () => {
      setIsTransitioning(true);
    };

    // Get logical index from physical index
    const getLogicalIndex = (physicalIdx: number): number => {
      // Calculate the offset due to the duplicated images at the beginning
      const offset = 3;
      return (
        (((physicalIdx - offset) % images.length) + images.length) %
        images.length
      );
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("settle", onSettled);
    emblaApi.on("scroll", onScroll);

    // Initial call to set the first slide
    onSelect();

    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect);
        emblaApi.off("settle", onSettled);
        emblaApi.off("scroll", onScroll);
      }
    };
  }, [emblaApi, handleLoop, selectedIndex]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        // Convert logical index to physical index (accounting for duplicated slides at the beginning)
        const physicalIndex = index + 3;
        emblaApi.scrollTo(physicalIndex);
      }
    },
    [emblaApi]
  );

  // Determine slide visibility and animation based on its position
  const getSlideStyles = (physicalIndex: number) => {
    const logicalIndex =
      (((physicalIndex - 3) % images.length) + images.length) % images.length;
    const isActive = logicalIndex === selectedIndex;

    return {
      opacity: isActive ? 1 : 0.4,
      zIndex: isActive ? 10 : 5,
      transform: isActive ? "scale(1.15)" : "scale(0.9)",
      pointerEvents: isTransitioning ? ("none" as const) : ("auto" as const),
    };
  };

  return (
    <div className="w-full bg-gradient-to-b from-black to-[#227F8B]">
      <section className="relative w-full flex items-center justify-center overflow-hidden pt-20 mt-20">
        <div className="relative z-20 text-center">
          <h2 className="font-['Syne'] font-extrabold text-4xl md:text-5xl mb-24 text-white">
            DESIGNS
          </h2>
        </div>
      </section>

      <div className="relative max-w-2xl mx-auto pb-8">
        <div className="overflow-visible" ref={emblaRef}>
          <div
            className="flex mx-auto"
            style={{ width: "200%", marginLeft: "-50%" }}
          >
            {extendedImages.map((src, physicalIndex) => (
              <div
                key={`slide-${physicalIndex}`}
                className="flex-none mx-[-10%] w-[70%] md:w-[50%] transition-all duration-500 relative"
                style={getSlideStyles(physicalIndex)}
              >
                <div className="h-72 md:h-96 relative">
                  <Image
                    src={src}
                    alt={`Design ${
                      ((((physicalIndex - 3) % images.length) + images.length) %
                        images.length) +
                      1
                    }`}
                    fill
                    className="object-contain rounded-2xl"
                    priority={physicalIndex >= 2 && physicalIndex <= 4}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-16">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
