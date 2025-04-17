"use client";

import BackBtn from "@/components/backbtn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-hidden relative">
      <BackBtn />

      {/* Hero Section with Mockup Image */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 group">
          <div className="relative w-full h-full">
            <Image
              src="/aimtoday.svg"
              alt="AimToday mockup"
              fill
              sizes="100vw"
              priority
              quality={90}
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="animate-fadeIn transition-opacity duration-300"
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <h1 className="font-['Syne'] font-extrabold text-3xl md:text-5xl mt-10 text-white mb-4 animate-slideUp">
                MARKETING NEWS WEBSITE
              </h1>
              <p className="text-white max-w-2xl mx-auto font-['Syne'] text-lg animate-slideUp animation-delay-200">
                Group project for 2manydots
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 md:px-[70px]">
        {/* Two Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-16">
          <div className="md:col-span-2 bg-[#191919] p-8 rounded-lg">
            <h3 className="font-['Poppins'] font-semibold text-xl text-white mb-4">
              What is AIMTODAY?
            </h3>
            <p className="text-white/70 font-['Poppins'] text-sm mb-2 md:text-base leading-relaxed">
              AIMTODAY is a group project we did for 2manydots. 2manydots wanted
              a marketing news website. For this project we {"didn't"} have any
              guidelines. No company name, no brandguide, etc. So {"we've"} done
              the branding and created the website with the name AIMTODAY, which
              stands for Ads, Insights & Marketing Today.
            </p>
            <p className="text-white/70 font-['Poppins'] text-sm md:text-base leading-relaxed">
              {"I've"} participated in the branding, UI/UX design and the
              frontend and the frontend development.
            </p>
          </div>
          <div className="md:col-span-1 bg-[#191919] p-8 rounded-lg flex flex-col justify-between">
            <div>
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
                <span className="px-3 py-1 bg-[#0e0e0e] text-white/80 text-sm font-['Syne'] rounded-full">
                  Storyblok
                </span>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/SpagettBro/aim-today"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-[#0e0e0e] text-white hover:bg-[#4fb1c4] transition-colors duration-300 text-sm font-['Syne'] rounded-full"
                >
                  <Image
                    src="/github-icon.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                    className="filter invert hover:brightness-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots Section */}
        <h2 className="font-['Syne'] font-bold text-3xl text-center text-white mb-12">
          Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-20">
          {/* Left Column - Single Image */}
          <div className="relative w-full h-auto rounded-lg overflow-hidden">
            <Image
              src="/aimtoday/v1.svg"
              alt="AimToday Version 1"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Right Column - Stacked Images */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-auto rounded-lg overflow-hidden">
              <Image
                src="/aimtoday/v2.svg"
                alt="AimToday Version 2"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="relative w-full h-auto rounded-lg overflow-hidden">
              <Image
                src="/aimtoday/v3.svg"
                alt="AimToday Version 3"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="relative w-full h-auto rounded-lg overflow-hidden">
              <Image
                src="/aimtoday/v4.svg"
                alt="AimToday Version 4"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
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
