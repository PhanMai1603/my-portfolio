import { motion } from "framer-motion";

export const Skills = () => {
  const skills = [
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "Java", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "ReactJS", category: "frontend" },
    { name: "Typescript", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "NextJS", category: "frontend" },
    { name: "Git/GitHub", category: "tools" },
    { name: "Vs Code", category: "tools" },
    { name: "Postman", category: "tools" },
    { name: "Jira", category: "tools" },
  ];

  const neonColor = ["#ff00cc", "#9966ff", "#ffffff"];

  return (
    <section id="skills" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
          {skills.map((skill, key) => {
            const neon = neonColor[key % neonColor.length];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: key * 0.08 }}
                viewport={{ once: true }}
                className="relative w-32 h-32 border-2 flex flex-col items-center justify-center"
                style={{
                  borderColor: neon,
                  boxShadow: `0 0 10px 6px ${neon}`,
                  background: "transparent",
                }}
              >
                <div className="text-sm mt-1 text-secondary uppercase tracking-wide">
                  {skill.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
