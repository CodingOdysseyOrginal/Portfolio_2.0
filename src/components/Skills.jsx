import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaAws,
  FaJs,
  FaCuttlefish,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaClipboardList,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiVitest,
  SiExpress,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: <FaJs size={50} /> },
    { name: "React", icon: <FaReact size={50} /> },
    { name: "Node.js", icon: <FaNodeJs size={50} /> },
    { name: "SQL & NoSQL", icon: <FaDatabase size={50} /> },
    { name: "Vitest", icon: <SiVitest size={50} /> },
    { name: "Playwright", icon: <FaLaptopCode size={50} /> },
    { name: "HTML", icon: <FaHtml5 size={50} /> },
    { name: "CSS", icon: <FaCss3Alt size={50} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} /> },
    { name: "Git", icon: <FaGitAlt size={50} /> },
    { name: "REST APIs", icon: <FaServer size={50} /> },
    { name: "Express", icon: <SiExpress size={50} /> },
    { name: "Agile", icon: <FaClipboardList size={50} /> },
  ];

  const learning = [
    { name: "C#", icon: <FaCuttlefish size={50} /> },
    { name: "Next.js", icon: <SiNextdotjs size={50} /> },
    { name: "Docker", icon: <FaDocker size={50} /> },
    { name: "AWS", icon: <FaAws size={50} /> },
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-8 pt-32"
    >
      <motion.h1
        className="text-6xl font-extrabold mb-8 leading-tight text-gray-300"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
        }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white">{skill.icon}</div>
            <p className="text-xl font-semibold mt-3">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.h2
        className="text-4xl font-extrabold mt-16 mb-7 text-gray-300"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Currently Learning
      </motion.h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
        }}
        viewport={{ once: true }}
      >
        {learning.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white">{skill.icon}</div>
            <p className="text-xl font-semibold mt-3">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
