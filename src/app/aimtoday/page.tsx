"use client";

import { useEffect } from "react";
import BackBtn from "@/components/backbtn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-hidden relative">
      <BackBtn />
      <div className="container mx-auto px-4 md:px-[70px] relative z-0">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-[20px] max-w-[1440px] mx-auto relative z-0">
          <div className="col-span-4 md:col-span-12 md:col-start-2 md:col-end-12">
            <div className="flex justify-between items-center">
              <h1 className="text-left font-['Syne'] font-extrabold text-2xl md:text-3xl text-white my-4 md:my-8">
                MARKETING NEWS WEBSITE
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

      {/* What is AimToday? */}
      <div className="container mx-auto px-4 md:px-[70px] mt-8">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-[20px] items-start md:items-center mb-20">
          <div className="col-span-4 md:col-span-5 md:col-start-2">
            <h3 className="font-['Syne'] font-semibold text-xl md:text-2xl text-white mb-4">
              What is AIMTODAY?
            </h3>
            <p className="text-white/80 font-['Syne'] text-sm md:text-base leading-relaxed">
              AIMTODAY is a group project we did for 2manydots. 2manydots wanted
              a marketing news website. For this project we {"didn't"} have any
              guidelines. No company name, no brandguide, etc. So {"we've"} done
              the branding and created the website with the name AIMTODAY, which
              stands for Ads, Insights & Marketing Today.
            </p>
            <p className="text-white/80 mt-2 font-['Syne'] text-sm md:text-base leading-relaxed">
              {"I've"} participated in the branding, UI/UX design and the
              frontend and the frontend development.
            </p>
          </div>
          <div className="col-span-4 md:col-span-4 md:col-start-9 mt-8 md:mt-0">
            <Image
              src="/aimtodaylogo.png"
              alt="RaveRebel brand"
              className="w-full md:w-64 h-full object-cover rounded-lg"
              width={256}
              height={256}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
