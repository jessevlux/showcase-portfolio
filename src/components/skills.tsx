import Image from "next/image";

export default function SkillsSection() {
  const skills = [
    { name: "Figma", category: "Design tool", icon: "/figma.svg" },
    { name: "Photoshop", category: "Design tool", icon: "/photoshop.svg" },
    { name: "HTML", category: "Development", icon: "/html.svg" },
    { name: "CSS", category: "Development", icon: "/css.svg" },
    {
      name: "JavaScript",
      category: "Development",
      icon: "/javascript.svg",
    },
    { name: "Next.js", category: "React Framework", icon: "/nextjs.svg" },
    { name: "Tailwind", category: "CSS Framework", icon: "/tailwind.svg" },
    { name: "GIT", category: "Version control", icon: "/git.svg" },
    { name: "Storyblok", category: "Headless CMS", icon: "/storyblok.svg" },
    { name: "Cursor", category: "AI code-editor", icon: "/cursor.svg" },
    { name: "Typescript", category: "Development", icon: "/typescript.svg" },
    { name: "ChatGPT", category: "AI tool", icon: "/chatgpt.svg" },
  ];

  return (
    <section className="w-full relative z-0">
      {/* About */}
      <section className="w-full relative z-0">
        <div className="container mx-auto px-4 md:px-[70px] relative z-0">
          <h2 className="mb-6 -mt-3 text-left text-2xl font-['Poppins'] font-bold tracking-wider text-[#4fb1c4] relative z-0">
            ABOUT
          </h2>
          <p className="max-w-[650px] col-start-1 -mt-2 text-white/80 text-md font-['Poppins']">
            My name is Jesse van Luxemburg. {"I'm"} a 20 year old student at
            Fontys Tilburg (ICT & Media Design). But what makes me special?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 font-['Poppins'] gap-6 mt-6">
            {/* Left Column - Visual Elements */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-[#191919]/50 rounded-lg border border-white/10 transition-all duration-300 hover:bg-[#191919]/70 hover:border-white/20 hover:scale-[1.02] animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#FF6B09]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF6B09]/30">
                  <svg
                    className="w-6 h-6 text-[#FF6B09] transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#FF6B09] font-semibold">
                    Driven & Adaptable
                  </h3>
                  <p className="text-white/70 text-sm">
                    Driven on challenges and new technologies
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#191919]/50 rounded-lg border border-white/10 transition-all duration-300 hover:bg-[#191919]/70 hover:border-white/20 hover:scale-[1.02] animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#FF6B09]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF6B09]/30">
                  <svg
                    className="w-6 h-6 text-[#FF6B09] transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#FF6B09] font-semibold">
                    Clear Communicator
                  </h3>
                  <p className="text-white/70 text-sm">
                    Constructive feedback and open dialogue
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-[#191919]/50 rounded-lg border border-white/10 transition-all duration-300 hover:bg-[#191919]/70 hover:border-white/20 hover:scale-[1.02] animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#FF6B09]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF6B09]/30">
                  <svg
                    className="w-6 h-6 text-[#FF6B09] transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#FF6B09] font-semibold">
                    Analytical Thinker
                  </h3>
                  <p className="text-white/70 text-sm">
                    Stay focused under pressure
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-[#191919]/50 rounded-lg border border-white/10 transition-all duration-300 hover:bg-[#191919]/70 hover:border-white/20 hover:scale-[1.02] animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#FF6B09]/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF6B09]/30">
                  <svg
                    className="w-6 h-6 text-[#FF6B09] transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#FF6B09] font-semibold">Team Player</h3>
                  <p className="text-white/70 text-sm">
                    Flexible, self-aware, and motivated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills */}
      <div className="container mx-auto px-4 md:px-[70px] relative z-0">
        <h2 className=" mb-6 mt-8 text-left text-2xl font-['Poppins'] font-bold tracking-wider text-[#4fb1c4] relative z-0">
          SKILLS
        </h2>
        {/* Mobile view */}
        <div className="grid grid-cols-4 gap-[20px] md:hidden max-w-[1440px] mx-auto relative z-0">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`col-span-2 rounded-lg bg-[#191919]/50 p-4 transition-all relative z-0 border border-white/10`}
            >
              <div className="flex items-center gap-4 relative z-0">
                <div className="h-12 w-12 flex-shrink-0 relative z-0">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    width={48}
                    height={48}
                    className="h-full w-full relative z-0"
                  />
                </div>
                <div className="flex flex-col relative z-0">
                  <h3 className="text-sm font-['Poppins'] font-regular text-white relative z-0">
                    {skill.name}
                  </h3>
                  <p className="text-xs font-['Syne'] text-[#434343] relative z-0">
                    {skill.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Desktop view */}
        <div className="hidden md:grid md:grid-cols-12 gap-[20px] max-w-[1440px] mx-auto relative z-0">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`col-span-3 ${
                index % 4 === 0 ? "col-start-1" : ""
              } rounded-lg bg-[#191919]/50 p-4 transition-all relative z-0 border border-white/10`}
            >
              <div className="flex items-center gap-4 relative z-0">
                <div className="h-12 w-12 flex-shrink-0 relative z-0">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    width={48}
                    height={48}
                    className="h-full w-full relative z-0"
                  />
                </div>
                <div className="flex flex-col relative z-0">
                  <h3 className="text-md font-['Poppins'] font-regular text-white relative z-0">
                    {skill.name}
                  </h3>
                  <p className="text-sm font-['Syne'] text-[#505050] relative z-0">
                    {skill.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
