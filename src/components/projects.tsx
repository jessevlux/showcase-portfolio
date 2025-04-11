"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProjectsSection() {
  const router = useRouter();

  const projects = [
    {
      title: "RAVEREBEL",
      description: "Designing my own clothing that's related to festivals.",
      image: "/raverebel.svg",
      date: "05-2024",
      tags: ["Design", "Branding", "Marketing"],
      path: "/raverebel",
    },
    {
      title: "UPENDO",
      description: "Group project for a client (2manydots).",
      image: "/upendo.svg",
      date: "09-2024",
      tags: ["UX/UI Design", "Web Development"],
      path: "/upendo",
    },
    {
      title: "MARKETING NEWS WEBSITE",
      description: "Group project for a client (2manydots).",
      image: "/aimtoday.svg",
      date: "11-2024",
      tags: ["UX/UI Design", "Web Development", "Branding"],
      path: "/aimtoday",
    },

    {
      title: "BEFIT",
      description: "Mobile app that combines social media and fitness.",
      image: "/befit.svg",
      date: "01-2025",
      tags: ["UX/UI Design", "Mobile App", "Branding"],
      path: "/befit",
    },
    {
      title: "FOOTBALLCOACH",
      description: "A platform for football coaches to manage their teams.",
      image: "/footballcoach.svg",
      date: "03-2025",
      tags: ["UX/UI Design", "Web Development"],
      path: "/footballcoach",
    },
    {
      title: "UX/UI LEARNING TOOL (in progress)",
      description:
        "An interactive platform for learning UX/UI design principles",
      image: "/uxui-2.svg",
      date: "03-2025",
      tags: ["UX/UI Design", "Web Development", "Education"],
      path: "/uxui-learning-tool",
    },
  ];

  return (
    <section className="w-full relative z-0" id="projects">
      <div className="container mx-auto px-4 md:px-[70px] relative z-0">
        <h2 className=" mb-6 mt-8 text-left text-2xl font-['Poppins'] font-bold tracking-wider text-[#4fb1c4] relative z-0">
          PROJECTS
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-12 gap-[20px] max-w-[1440px] mx-auto relative z-0">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => router.push(project.path)}
              className={`
                col-span-4
                md:col-span-6
                lg:col-span-4
                md:col-start-1
                rounded-xl transition-all duration-300 cursor-pointer bg-[#191919] relative z-0
                hover:scale-[1.035] hover:shadow-lg
              `}
            >
              <div className="flex flex-col gap-4 relative z-0">
                <div className="h-48 w-full relative z-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="flex flex-col relative px-4 z-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-md font-['Poppins'] font-medium text-[#ACFFFD]  group-hover:underline relative z-0">
                      {project.title}
                    </h3>
                    <span className="text-sm font-['Syne'] -mt-2 text-[#505050]">
                      {project.date}
                    </span>
                  </div>
                  <p className="text-sm text-white/60 -mt-1 font-regular font-['Poppins'] relative z-0">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 h-[30px] mb-1 leading-[30px] bg-[#0e0e0e] text-white text-sm font-['Syne'] font-regular rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
