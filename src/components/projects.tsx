"use client";

import { useRouter } from "next/navigation";

export default function ProjectsSection() {
  const router = useRouter();

  const projects = [
    {
      title: "RAVEREBEL",
      description:
        "I've designed my own clothing that's related to festivals. ",
      image: "/raverebel1.png",
      date: "05-2024",
      tags: ["Design", "Branding"],
      path: "/raverebel",
    },
    {
      title: "UPENDO",
      description: "Lorem ipsum is simply dummy text of the printing industry",
      image: "/upendo.png",
      date: "09-2024",
      tags: ["UI/UX Design", "Web Development"],
      path: "/upendo",
    },
    {
      title: "MARKETING NEWS WEBSITE",
      description: "Lorem ipsum is simply dummy text of the printing industry",
      image: "/aimtoday.png",
      date: "11-2024",
      tags: ["UI/UX Design", "Web Development"],
      path: "/marketing-news",
    },
    {
      title: "BEFIT",
      description: "Lorem ipsum is simply dummy text of the printing industry",
      image: "/befit.png",
      date: "01-2025",
      tags: ["UI/UX Design", "Mobile App"],
      path: "/befit",
    },
  ];

  return (
    <section className="w-full relative z-0">
      <div className="container mx-auto px-[70px] relative z-0">
        <h2 className="ml-[190px] mb-8 -mt-3 text-left text-3xl font-['Syne'] font-semibold tracking-wider text-white relative z-0">
          PROJECTS
        </h2>
        <div className="grid grid-cols-12 gap-[20px] max-w-[1440px] mx-auto relative z-0">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => router.push(project.path)}
              className={`
                col-span-12
                md:col-span-6
                lg:col-span-4
                ${index % 2 === 0 ? "lg:col-start-3" : "lg:col-start-7"}
                rounded-lg transition-all hover:bg-transparent cursor-pointer relative z-0
              `}
            >
              <div className="flex flex-col gap-4 relative z-0">
                <div className="h-48 w-full relative z-0">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-fit relative z-0"
                  />
                </div>
                <div className="flex flex-col relative z-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-md font-['Syne'] font-semibold text-white -mt-2 group-hover:underline relative z-0">
                      {project.title}
                    </h3>
                    <span className="text-sm font-['Syne'] -mt-2 text-zinc-400">
                      {project.date}
                    </span>
                  </div>
                  <p className="text-sm text-white opacity-80 -mt-2 font-regular font-['Syne'] relative z-0">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 h-[30px] leading-[30px] bg-[#134A51] text-[#CBFFFE] text-sm font-['Syne'] font-regular rounded-full"
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
