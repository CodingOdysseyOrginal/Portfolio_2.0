import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const projectData = {
  writers_realm: {
    title: "Writer's Realm",
    description: "A platform for writers to share and collaborate.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Docker"],
    imageSrc: "/images/writers_realm.jpg",  // Updated to imageSrc
    githubLink: "https://github.com/CodingOdysseyOrginal/writers_realm",
    liveDemo: "https://writersrealm.app"
  },
  devops_tutorial: {
    title: "DevOps Tutorial",
    description: "A step-by-step DevOps guide with real-world examples.",
    techStack: ["AWS", "Docker", "GitHub Actions"],
    imageSrc: "/images/devops_tutorial.jpg",  // Updated to imageSrc
    githubLink: "https://github.com/CodingOdysseyOrginal/devops_tutorial",
    liveDemo: "https://devops-tutorial.com"
  },
  group_project: {
    title: "Group Project",
    description: "A collaborative project showcasing teamwork and skills.",
    techStack: ["React", "Node.js", "MongoDB"],
    imageSrc: "/images/group_project.jpg",  // Updated to imageSrc
    githubLink: "https://github.com/CodingOdysseyOrginal/group_project",
    liveDemo: "https://group-project.com"
  }
};

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) return <h1 className="text-white text-center mt-20">Project Not Found</h1>;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white h-screen flex flex-col items-center px-8 pt-20"
    >
      <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
     
      <img className="w-full max-w-4xl rounded-lg mb-6" src={project.imageSrc} alt={project.title} />
      <p className="text-xl max-w-3xl text-center mb-6">{project.description}</p>

      <div className="mb-4">
        <span className="font-semibold text-gray-400">Built with: </span>
        {project.techStack.map((tech, index) => (
          <span key={index} className="text-gray-300 bg-gray-800 px-2 py-1 rounded-lg mx-1 text-sm">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-4">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
        >
          Live Demo
        </a>
      </div>
    </motion.section>
  );
}
