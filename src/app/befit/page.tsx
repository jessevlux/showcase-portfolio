"use client";

import { useEffect } from "react";
import BackBtn from "@/components/backbtn";

export default function Home() {
  return (
    <main className="w-full overflow-hidden min-h-screen relative">
      <BackBtn />

      <div className="container mx-auto px-4 md:px-[70px] relative z-0">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-[20px] max-w-[1440px] mx-auto relative z-0">
          <div className="col-span-4 md:col-span-12 md:col-start-2 md:col-end-12">
            <div className="flex justify-between items-center">
              <h1 className="text-left font-['Syne'] font-extrabold text-2xl md:text-3xl text-white my-4 md:my-8">
                BEFIT
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

      {/* What is BeFit? */}
      <div className="container mx-auto px-4 md:px-[70px] mt-8">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-[20px] items-start md:items-center mb-20">
          <div className="col-span-4 md:col-span-5 md:col-start-2">
            <h3 className="font-['Syne'] font-semibold text-xl md:text-2xl text-white mb-4">
              What is BeFit?
            </h3>
            <p className="text-white/80 font-['Syne'] text-sm md:text-base leading-relaxed">
              BeFit is a personal project {"I've"} done for school. I wanted to
              create a mobile app that combines social media and fitness. The
              app is inspired on BeReal. The reason BeReal fell off is because
              users {"didn't"} have a motive to use the app anymore. With BeFit
              you can show your fitness progress to your friends and share what
              {"you're"} proud of.
            </p>
            <p className="text-white/80 mt-2 font-['Syne'] text-sm md:text-base leading-relaxed">
              The app is still in progress, but {"I've"} already created the
              branding and the app design with a POC.
            </p>
          </div>
        </div>
        <div className="flex -mt-8 justify-center">
          <iframe
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              marginBottom: "40px",
            }}
            width="800"
            height="450"
            src="https://embed.figma.com/proto/5b8j6CGULA2GNTl9u9t43s/BeFit?page-id=218%3A104&node-id=218-105&p=f&viewport=60%2C111%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=218%3A105&embed-host=share"
            allowFullScreen
          />
        </div>
      </div>
    </main>
  );
}
