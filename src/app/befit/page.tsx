"use client";

import BackBtn from "@/components/backbtn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full overflow-hidden min-h-screen relative">
      <BackBtn />

      {/* Hero Section with Mockup Image */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 group">
          <div className="relative w-full h-full">
            <Image
              src="/befit2.svg"
              alt="Befit mockup"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
              className="animate-fadeIn"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30"></div>
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <h1 className="font-['Syne'] font-extrabold text-3xl md:text-5xl mt-10 text-white mb-4 animate-slideUp">
                BEFIT
              </h1>
              <p className="text-white max-w-2xl mx-auto font-['Syne'] text-lg animate-slideUp animation-delay-200">
                A mobile app that combines social media and fitness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 md:px-[70px]">
        {/* Two Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-12">
          <div className="md:col-span-2 bg-[#191919] p-8 rounded-lg">
            <h3 className="font-['Poppins'] font-semibold text-xl text-white mb-4">
              What is BeFit?
            </h3>
            <p className="text-white/70 font-['Poppins'] text-sm mb-2 md:text-base leading-relaxed">
              BeFit is an mobile app that combines social media and fitness. The
              app is inspired on BeReal. The reason BeReal fell off is because
              users {"didn't"} have a motive to use the app anymore. With BeFit
              you can show your fitness progress to your friends and share what
              {" you're"} proud of.
            </p>
            <p className="text-white/70 font-['Poppins'] text-sm md:text-base leading-relaxed">
              {"I've"} created a POC within figma, which you can try out
              yourself below.
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
                  UX/UI Design
                </span>
                <span className="px-3 py-1 bg-[#0e0e0e] text-white/80 text-sm font-['Syne'] rounded-full">
                  Branding
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Figma Embed */}
        <div className="flex justify-center mb-12">
          <iframe
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
            width="100%"
            height="450"
            src="https://embed.figma.com/proto/5b8j6CGULA2GNTl9u9t43s/BeFit?page-id=218%3A104&node-id=218-105&p=f&viewport=60%2C111%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=218%3A105&embed-host=share"
            allowFullScreen
          />
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
