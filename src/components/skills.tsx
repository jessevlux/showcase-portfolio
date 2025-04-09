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
          <h2 className="mb-6 -mt-3 text-left text-2xl font-['Poppins'] font-bold tracking-wider text-[#4fb1c4] relative z-0">
            About
          </h2>
          <p className="max-w-[500px] col-start-1 -mt-2 text-white text-md font-['Poppins']">
            My name is Jesse van Luxemburg. {"I'm"} a 20 year old student at
            Fontys Tilburg (ICT & Media Design).
          </p>
          <p className=" max-w-[500px] mt-1 col-start-1 text-white text-md font-['Poppins']">
            I chose this study because {"I've"} always liked creating visual
            things visual things to entertain myself.
          </p>
        </div>
      </section>
      {/* Skills */}
      <div className="container mx-auto px-4 md:px-[70px] relative z-0">
        <h2 className=" mb-6 mt-8 text-left text-2xl font-['Poppins'] font-bold tracking-wider text-[#4fb1c4] relative z-0">
          Skills
        </h2>
        {/* Mobile view */}
        <div className="grid grid-cols-4 gap-[20px] md:hidden max-w-[1440px] mx-auto relative z-0">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`col-span-2 rounded-lg bg-[#191919] p-4 transition-all relative z-0`}
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
                  <p className="text-xs font-['Syne'] text-zinc-400 relative z-0">
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
              } rounded-lg bg-[#191919] p-4 transition-all relative z-0`}
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
                  <p className="text-sm font-['Syne'] text-zinc-400 relative z-0">
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
