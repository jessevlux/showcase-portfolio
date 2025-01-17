"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

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
    <main className="w-full relative">
      <div className="container mx-auto px-[70px] relative z-0">
        <div className="grid grid-cols-12 gap-[20px] max-w-[1440px] mx-auto relative z-0">
          <div className="col-span-12 col-start-2 col-end-12">
            <div className="flex justify-between items-center">
              <h1 className="text-left font-['Syne'] font-extrabold text-3xl text-white my-8">
                RAVEREBEL
              </h1>
              <div className="w-[60px] hidden h-full">
                <img
                  src="/raverebel logo.svg"
                  alt="RAVEREBEL logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Line */}
      <div
        className="w-5/6 mx-auto h-[1px] rounded-full"
        style={{
          background: "linear-gradient(90deg, #134A51 0%, #8DB4B3 100%)",
        }}
      />

      <div className="container mx-auto px-[70px] mt-20">
        <div className="grid grid-cols-12 gap-[20px] items-center mb-40">
          <div className="col-span-5 col-start-2">
            <h3 className="font-['Syne'] font-semibold text-2xl text-white mb-4">
              What is RaveRebel?
            </h3>
            <p className="text-white/80 font-['Syne'] leading-relaxed">
              RaveRebel is a clothing brand I created with the aim of appealing
              to the festival community, particularly those into the harder
              styles. From stylish designs to ones with a message, there are
              multiple options for different people attending festivals.
            </p>
          </div>
          <div className="col-span-4 z-10 col-start-9">
            <img
              src="/raverebel.png"
              alt="RaveRebel brand"
              className="w-64 h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div
          className="grid grid-cols-12 container mx-auto gap-[20px] items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="col-span-4 col-start-2">
            <img
              src="/mockup.png"
              alt="RaveRebel mockup"
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>
          <div className="col-span-5 col-start-7">
            <h3 className="font-['Syne'] font-semibold text-2xl text-white mb-4">
              Why?
            </h3>
            <p className="text-white/80 font-['Syne'] leading-relaxed">
              When I attend festivals, I often see people wearing clothing from
              their own festival related brands. This always seemed like a cool
              idea to me. I had the chance to create my own project at school,
              so it was the perfect opportunity to put my creativity and ideas
              into this project.
            </p>
          </div>
        </div>
      </div>

      <div className="glow-effect absolute pointer-events-none w-[300px] h-[300px] z-0" />
      <style jsx global>{`
        .glow-effect {
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
