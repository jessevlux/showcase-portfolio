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
  ];

  return (
    <section className="w-full relative z-0">
      {/* About */}
      <section className="w-full relative z-0">
        <div className="container mx-auto px-4 md:px-[70px] relative z-0">
          <h2 className="ml-0 md:ml-[190px] mb-6 -mt-3 text-left text-3xl font-['Syne'] font-semibold tracking-wider text-white relative z-0">
            ABOUT
          </h2>
          <p className="ml-0 md:ml-[190px] max-w-[500px] col-start-1 text-zinc-400 text-md font-['Syne']">
            My name is Jesse van Luxemburg. {"I'm"} a 20 year old student at
            Fontys Tilburg (ICT & Media Design).
          </p>
          <p className="ml-0 md:ml-[190px] max-w-[500px] mt-2 col-start-1 text-zinc-400 text-md font-['Syne']">
            I chose this study because {"I've"} always liked creating visual
            things visual things to entertain myself.
          </p>
        </div>
      </section>
      {/* Skills */}
      <div className="container mx-auto px-4 md:px-[70px] relative z-0">
        <h2 className="ml-0 md:ml-[190px] mb-6 mt-8 text-left text-3xl font-['Syne'] font-semibold tracking-wider text-white relative z-0">
          SKILLS
        </h2>
        {/* Mobile view */}
        <div className="grid grid-cols-4 gap-[20px] md:hidden max-w-[1440px] mx-auto relative z-0">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`col-span-2 rounded-lg bg-zinc-800/50 p-4 transition-all hover:bg-[#191919] relative z-0`}
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
                  <h3 className="text-md font-['Syne'] font-regular text-white relative z-0">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-zinc-400 relative z-0">
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
              className={`col-span-2 ${index % 4 === 0 ? "col-start-3" : ""} ${
                index % 4 === 3 ? "col-end-11" : ""
              } rounded-lg bg-zinc-800/50 p-4 transition-all hover:bg-[#191919] relative z-0`}
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
                  <h3 className="text-md font-['Syne'] font-regular text-white relative z-0">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-zinc-400 relative z-0">
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
