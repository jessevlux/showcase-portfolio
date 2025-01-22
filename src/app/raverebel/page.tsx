"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BackBtn from "@/components/backbtn";

import img1 from "../../../public/1.svg";
import img2 from "../../../public/2.svg";
import img3 from "../../../public/3.svg";
import img4 from "../../../public/4.svg";
import img5 from "../../../public/5.svg";
import img6 from "../../../public/6.svg";
import img7 from "../../../public/7.svg";
import img8 from "../../../public/8.svg";
import img9 from "../../../public/9.svg";
import img10 from "../../../public/10.svg";
import img11 from "../../../public/11.svg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getImageIndex = (offset: number) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  return (
    <main className="w-full overflow-hidden min-h-screen relative">
      <BackBtn />
      <div className="container mx-auto px-4 md:px-[70px] relative z-0">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-[20px] max-w-[1440px] mx-auto relative z-0">
          <div className="col-span-4 md:col-span-12 md:col-start-2 md:col-end-12">
            <div className="flex justify-between items-center">
              <h1 className="text-left font-['Syne'] font-extrabold text-2xl md:text-3xl text-white my-4 md:my-8">
                RAVEREBEL
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Line */}
      <div
        className="w-[90%] md:w-5/6 mx-auto h-[1px] rounded-full"
        style={{
          background: "linear-gradient(90deg, #134A51 0%, #8DB4B3 100%)",
        }}
      />

      {/* What is RaveRebel? */}
      <div className="container mx-auto px-4 md:px-[70px] mt-8">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-[20px] items-start md:items-center mb-20">
          <div className="col-span-4 md:col-span-5 md:col-start-2">
            <h3 className="font-['Syne'] font-semibold text-xl md:text-2xl text-white mb-4">
              What is RaveRebel?
            </h3>
            <p className="text-white/80 font-['Syne'] text-sm md:text-base leading-relaxed">
              RaveRebel is a clothing brand I created with the aim of appealing
              to the festival community, particularly those into the harder
              styles. From stylish designs to ones with a message, there are
              multiple options for different people attending festivals.
            </p>
          </div>
          <div className="col-span-4 w-[80%] md:col-span-4 md:col-start-9 mt-8 md:mt-0">
            <Image
              src="/raverebel.png"
              alt="RaveRebel brand"
              width={256}
              height={256}
              className="w-full md:w-64 h-full object-cover rounded-lg"
            />
          </div>
        </div>
        {/* Why? */}
        <div className="grid grid-cols-4 md:grid-cols-12 gap-[20px] items-start md:items-center mb-20">
          <div className="col-span-4 md:col-span-4 md:col-start-2">
            <Image
              src="/mockup.png"
              alt="RaveRebel mockup"
              width={400}
              height={400}
              className="w-full object-cover scale-110 ml-0 md:ml-5 rounded-lg"
            />
          </div>
          <div className="col-span-4 md:col-span-5 md:col-start-7 mt-8 md:mt-0">
            <h3 className="font-['Syne'] font-semibold text-xl md:text-2xl text-white mb-4">
              Why?
            </h3>
            <p className="text-white/80 font-['Syne'] text-sm md:text-base leading-relaxed">
              When I attend festivals, I often see people wearing clothing from
              their own festival related brands. This always seemed like a cool
              idea to me. I had the chance to create my own project at school,
              so it was the perfect opportunity to put my creativity and ideas
              into this project.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full">
        <div className="w-full">
          <div className="carousel-container relative w-full h-[400px] md:h-[500px] overflow-hidden bg-[#141414]">
            <div className="carousel flex items-center justify-center h-full">
              {[-1, 0, 1].map((offset) => (
                <div
                  key={offset}
                  className={`carousel-item flex-shrink-0 transition-all duration-300 ease-in-out ${
                    offset === 0
                      ? "w-4/5 md:w-2/3 h-72 md:h-96 z-20"
                      : "w-1/4 md:w-1/5 h-60 md:h-80 opacity-50 absolute"
                  } ${
                    offset === -1
                      ? "left-[15%] md:left-[25%] transform -translate-x-3/3"
                      : offset === 1
                      ? "right-[15%] md:right-[25%] transform translate-x-3/3"
                      : ""
                  }`}
                >
                  <Image
                    src={
                      images[getImageIndex(offset)].src || "/placeholder.svg"
                    }
                    alt={`Image ${getImageIndex(offset) + 1}`}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 md:left-[165px] top-[250px] transform -translate-y-1/2 bg-white/20 text-white rounded-full z-30"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 md:right-[165px] top-[250px] transform -translate-y-1/2 bg-white/20 text-white rounded-full z-30"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          let lastScrollY = window.scrollY;
          const nav = document.getElementById('navBtn');

          window.addEventListener('scroll', () => {
            if (window.scrollY < lastScrollY) { // scrolling up
              nav.style.opacity = '1';
            } else { // scrolling down
              nav.style.opacity = '0';
            }
            lastScrollY = window.scrollY;
          });
        `,
        }}
      />
    </main>
  );
}
