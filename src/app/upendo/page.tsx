"use client";

import BackBtn from "@/components/backbtn";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glowElements = document.querySelectorAll(
        ".glow-effect"
      ) as NodeListOf<HTMLElement>;
      glowElements.forEach((glowElement) => {
        const rect = glowElement.parentElement?.getBoundingClientRect();
        if (rect) {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          glowElement.style.left = `${x}px`;
          glowElement.style.top = `${y}px`;
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="w-full relative min-h-screen overflow-hidden">
      <BackBtn />
      <div className="container mx-auto px-4 md:px-[70px] relative z-0">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-[20px] max-w-[1440px] mx-auto relative z-0">
          <div className="col-span-4 md:col-span-12 md:col-start-2 md:col-end-12">
            <div className="flex justify-between items-center">
              <h1 className="text-left font-['Syne'] font-extrabold text-2xl md:text-3xl text-white my-4 md:my-8">
                UPENDO
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

      {/* What is Upendo? */}
      <div className="container mx-auto px-4 md:px-[70px] mt-8">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-[20px] items-start md:items-center mb-20">
          <div className="col-span-4 md:col-span-5 md:col-start-2">
            <h3 className="font-['Syne'] font-semibold text-xl md:text-2xl text-white mb-4">
              What is Upendo?
            </h3>
            <p className="text-white/80 font-['Syne'] text-sm md:text-base leading-relaxed">
              Upendo is a group project we did for 2manydots. 2manydots wanted
              to create a new company where you can get clear insights and data
              for your own website. We've created the website that shows all of
              Upendo's services. for your own website. {"We've"} created the
              website that shows all of
              {"Upendo's"} services.
            </p>
            <p className="text-white/80 mt-2 font-['Syne'] text-sm md:text-base leading-relaxed">
              I participated in the UI/UX design and the frontend development.
            </p>
          </div>
          <div className="col-span-4 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
            <Image
              src="/upendo2.png"
              alt="Upendo screenshot"
              width={400}
              height={300}
              className="w-full md:w-64 h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          perspective: 1000px;
        }
        .carousel {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }
        .carousel-item {
          backface-visibility: hidden;
        }

        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>

      <div className="glow-effect absolute pointer-events-none w-[200px] md:w-[300px] h-[200px] md:h-[300px] z-0" />
      <style jsx global>{`
        .glow-effect {
          position: absolute;
          pointer-events: none;
          background: radial-gradient(
            circle at center,
            rgba(110, 183, 184, 0.35) 0%,
            rgba(110, 183, 184, 0.2) 40%,
            rgba(110, 183, 184, 0) 70%
          );
          transform: translate(-50%, -50%);
          mix-blend-mode: screen;
          filter: blur(8px);
          transition: all 0.2s ease-out;
          animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.95);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
          }
          100% {
            transform: translate(-50%, -50%) scale(0.95);
          }
        }
      `}</style>
    </main>
  );
}
