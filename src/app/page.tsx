"use client";

import Image from "next/image";
import bgimage from "../../public/bgimage.svg";
import me from "../../public/me.svg";

export default function Home() {
  return (
    <main className="grid grid-cols-12 mx-[70px] h-screen">
      <div className="col-span-12 h-[50vh] gap-0 flex items-center justify-center bg-url[('../public/bgimage.png')] bg-cover bg-no-repeat">
        <Image
          src={bgimage}
          alt="bgimage"
          quality={100}
          className="absolute w-full h-[50vh] object-cover z-10"
        />
        <h1 className="text-center font-['Syne'] font-extrabold text-[50px] text-white z-20 relative">
          JESSE VAN LUXEMBURG
        </h1>
      </div>
      <div className="col-span-12 h-[50vh] grid grid-cols-2 -mx-[70px]">
        <div className="bg-[#202020] h-[50vh]">
          <Image
            src={me}
            alt="me"
            className="w-full h-full object-cover"
            quality={100}
          />
        </div>
        <div
          className="bg-[#202020] flex flex-col items-start justify-start gap-4 p-8 relative w-[50vw] h-[50vh] overflow-hidden"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const glowElement = e.currentTarget.querySelector(
              ".glow-effect"
            ) as HTMLElement;
            if (glowElement) {
              glowElement.style.left = `${x}px`;
              glowElement.style.top = `${y}px`;
            }
          }}
        >
          {/* Animated glow effect that follows cursor */}
          <div
            className="glow-effect absolute pointer-events-none w-[300px] h-[300px]"
            style={{
              background:
                "radial-gradient(circle at center, rgba(110,183,184,0.35) 0%, rgba(110,183,184,0.2 ) 40%, rgba(110,183,184,0) 70%)",
              transform: "translate(-50%, -50%)",
              mixBlendMode: "screen",
              filter: "blur(8px)",
              transition: "all 0.2s ease-out",
            }}
          />

          {/* Navigation buttons */}
          <button className="bg-[#202020] text-white font-['Syne'] font-semibold px-8 py-2 rounded-lg hover:bg-white hover:text-[#202020] transition-colors w-[200px] relative z-10">
            Projects
          </button>
          <button className="bg-[#202020] text-white font-['Syne'] font-semibold px-8 py-2 rounded-lg hover:bg-white hover:text-[#202020] transition-colors w-[200px] relative z-10">
            About
          </button>
          <button className="bg-none text-white font-['Syne'] font-semibold px-8 py-2 rounded-lg border border-white hover:bg-white hover:text-[#202020] transition-colors w-[200px] relative z-10">
            Contact
          </button>

          <style jsx>{`
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
            .glow-effect {
              animation: pulse 2s infinite ease-in-out;
            }
          `}</style>
        </div>
      </div>
    </main>
  );
}
