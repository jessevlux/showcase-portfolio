"use client";

import BackBtn from "@/components/backbtn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full relative min-h-screen overflow-hidden">
      <BackBtn />

      {/* Hero Section with Mockup Image */}
      <section className="relative w-full h-[60vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/upendo.png"
              alt="Upendo mockup"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              className="animate-fadeIn"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/75 "></div>
          </div>
        </div>
        <div className="relative z-20 text-center p-6">
          <h1 className="font-['Syne'] font-extrabold text-4xl md:text-5xl text-white mb-4 animate-slideUp">
            UPENDO
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto font-['Syne'] text-lg md:text-xl animate-slideUp animation-delay-200">
            Client group project for 2manydots
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <button
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            aria-label="Scroll down"
            className="text-white hover:text-white/80 transition-colors bg-black/50 p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="animate-fadeIn animation-delay-500"
            >
              <path d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
            </svg>
          </button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 md:px-[70px]">
        {/* Two Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-16">
          <div className="md:col-span-2 bg-[#191919] p-8 rounded-lg">
            <h3 className="font-['Poppins'] font-semibold text-xl text-white mb-4">
              What is Upendo?
            </h3>
            <p className="text-white/80 font-['Poppins'] text-sm mb-2 md:text-base leading-relaxed">
              Upendo is a group project we did for 2manydots. 2manydots wanted
              to create a new company where you can get clear insights and data
              for your own website. {"We've"} created the website that shows all
              of
              {"Upendo's"} services.
            </p>
            <p className="text-white/80 font-['Poppins'] text-sm md:text-base leading-relaxed">
              I participated in the UI/UX design and the frontend development.
            </p>
          </div>
          <div className="bg-[#191919] p-8 rounded-lg">
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/upendo2.png"
                alt="Upendo logo"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 mb-20">
          <div className="h-72 flex items-center justify-center relative overflow-hidden rounded-lg">
            <Image
              src="/upendo.png"
              alt="Upendo Screenshot 1"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-72 flex items-center justify-center relative overflow-hidden rounded-lg">
            <Image
              src="/upendo2.png"
              alt="Upendo Screenshot 2"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

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
