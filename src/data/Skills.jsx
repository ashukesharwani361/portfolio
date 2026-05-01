import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    title: "User Interface",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Bootstrap", "Tailwind CSS"],
    accentColor: "bg-violet-500",
    labelColor: "text-violet-500",
    badgeClasses: "bg-violet-50 text-violet-900 border-violet-300 hover:bg-violet-100",
  },
  {
    id: "backend",
    label: "Backend",
    title: "Server & Data",
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Firebase", "Authentication (JWT, Passport)", "bcrypt", "API Development (REST)"],
    accentColor: "bg-emerald-500",
    labelColor: "text-emerald-600",
    badgeClasses: "bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100",
  },
  {
    id: "tools",
    label: "Tooling",
    title: "Dev & Testing",
    skills: ["Git", "Vite", "Github", "Jest", "Postman"],
    accentColor: "bg-orange-500",
    labelColor: "text-orange-600",
    badgeClasses: "bg-orange-50 text-orange-900 border-orange-300 hover:bg-orange-100",
  },
];

const stats = [
  { value: "21", label: "technologies" },
  { value: "3", label: "domains" },
  { value: "MERN", label: "stack focus" },
];

function SkillGroup({ group, visible, delay }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-800 p-5
                 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 dark:hover:border-white/20
                 hover:shadow-lg cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms,
                     box-shadow 0.2s ease, border-color 0.2s ease`,
      }}
    >
      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl ${group.accentColor}`} />

      <p className={`text-[10px] font-medium tracking-[0.15em] uppercase ${group.labelColor} dark:text-violet-300 mb-1`}>
        {group.label}
      </p>

      <p className="text-[17px] font-bold text-gray-900 dark:text-white mb-4">
        {group.title}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className={`text-xs font-medium px-3 py-1 rounded-full border
                        transition-transform duration-150 hover:scale-105 ${group.badgeClasses} dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-w-full mx-auto px-6 py-20 bg-white dark:bg-slate-900 rounded-2xl">

      {/* Header */}
      <div
        className="mb-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-gray-400 dark:text-gray-400 mb-2">
          What I work with
        </p>

        <h2 className="relative inline-block text-5xl text-purple-700 font-extrabold dark:text-white leading-none">
          Skills
          <span className="absolute left-0 bottom-1.5 w-full h-2.5 bg-violet-400 opacity-20 rounded-sm -z-10" />
        </h2>

        <p className="text-[15px] text-gray-500 dark:text-gray-300 font-light mt-3">
          Technologies I use to build full-stack web applications
        </p>
      </div>

      {/* Skill cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group, i) => (
          <SkillGroup
            key={group.id}
            group={group}
            visible={visible}
            delay={i * 100}
          />
        ))}
      </div>

      {/* Divider */}
      <div
        className="flex items-center gap-3 my-8"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease 400ms",
        }}
      >
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        <span className="text-[11px] tracking-widest text-gray-400 dark:text-gray-400 uppercase">
          at a glance
        </span>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Stats */}
      <div
        className="flex gap-8"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease 500ms",
        }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-0.5">
            <span className="text-3xl font-extrabold text-gray-900 dark:text-white leading-none">
              {stat.value}
            </span>
            <span className="text-[11px] text-gray-500 dark:text-gray-300 tracking-wide">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}
