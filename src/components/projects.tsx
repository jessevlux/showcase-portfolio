"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProjectsSection() {
  const router = useRouter();

  const projects = [
    {
      title: "RAVEREBEL",
      description: "Designing my own clothing that's related to festivals.",
      image: "/raverebel1.png",
      date: "05-2024",
      tags: ["Design"],
      path: "/raverebel",
    },
    {
      title: "UPENDO",
      description: "Client group project for 2manydots.",
      image: "/upendo.png",
      date: "09-2024",
      tags: ["UI/UX Design", "Web Development"],
      path: "/upendo",
    },
    {
      title: "MARKETING NEWS WEBSITE",
      description: "Client group project for 2manydots.",
      image: "/aimtoday.png",
      date: "11-2024",
      tags: ["UI/UX Design", "Web Development", "Branding"],
      path: "/aimtoday",
    },
    {
      title: "BEFIT",
      description: "Mobile app that combines social media and fitness.",
      image: "/befit.png",
      date: "01-2025",
      tags: ["UI/UX Design", "Mobile App"],
      path: "/befit",
    },
  ];

  return (
    <section className="w-full relative z-0">
      <div className="container mx-auto px-4 md:px-[70px] relative z-0">
        <h2 className="ml-0 md:ml-[190px] mb-8 -mt-3 text-left text-3xl font-['Syne'] font-bold tracking-wider text-[#CBFFFE] relative z-0">
          PROJECTS
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-12 gap-[20px] max-w-[1440px] mx-auto relative z-0">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => router.push(project.path)}
              className={`
                col-span-4
                md:col-span-6
                lg:col-span-4
                ${index % 2 === 0 ? "lg:col-start-3" : "lg:col-start-7"}
                md:${index % 2 === 0 ? "md:col-start-2" : "md:col-start-7"}
                rounded-lg transition-all hover:bg-transparent cursor-pointerrelative z-0 
              `}
            >
              <div className="flex flex-col gap-4 relative z-0">
                <div className="h-48 w-full relative z-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col relative z-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-md font-['Syne'] font-semibold text-[#CBFFFE] group-hover:underline relative z-0">
                      {project.title}
                    </h3>
                    <span className="text-sm font-['Syne'] -mt-2 text-zinc-400">
                      {project.date}
                    </span>
                  </div>
                  <p className="text-sm text-white opacity-80 -mt-1 font-regular font-['Syne'] relative z-0">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 h-[30px] mb-1 leading-[30px] bg-[#0e0e0e] border-[#CBFFFE] text-white text-sm font-['Syne'] font-regular rounded-full"
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
