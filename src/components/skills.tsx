export default function SkillsSection() {
  const skills = [
    { name: "Figma", category: "Design tool", icon: "/figma-icon.svg" },
    { name: "Photoshop", category: "Design tool", icon: "/photoshop-icon.svg" },
    { name: "HTML", category: "Development", icon: "/html-icon.svg" },
    { name: "CSS", category: "Development", icon: "/css-icon.svg" },
    {
      name: "JavaScript",
      category: "Development",
      icon: "/javascript-icon.svg",
    },
    { name: "Next.js", category: "React Framework", icon: "/nextjs-icon.svg" },
    { name: "Tailwind", category: "CSS Framework", icon: "/tailwind-icon.svg" },
    { name: "GIT", category: "Version control", icon: "/git-icon.svg" },
  ];

  return (
    <section className="w-full relative z-0">
      <div className="container mx-auto px-[70px] relative z-0">
        <h2 className="ml-[190px] mb-12 text-left text-3xl font-['Syne'] font-semibold tracking-wider text-white relative z-0">
          SKILLS
        </h2>
        <div className="grid grid-cols-12 gap-[20px] max-w-[1440px] mx-auto relative z-0">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`col-span-2 ${index % 4 === 0 ? "col-start-3" : ""} ${
                index % 4 === 3 ? "col-end-11" : ""
              } rounded-lg bg-zinc-800/50 p-4 transition-all hover:bg-[#191919] relative z-0`}
            >
              <div className="flex items-center gap-4 relative z-0">
                <div className="h-12 w-12 flex-shrink-0 relative z-0">
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
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
