import { motion } from "framer-motion";

export default function ProjectCard({ title, description, techStack, videoSrc, githubLink, liveDemo, projectPage }) {
  return (
    <motion.div
      className="bg-gray-900 border border-white rounded-2xl shadow-lg p-6"
      whileHover={{ scale: 1.05 }}
    >
      <video className="w-full rounded-lg mb-4" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      <div className="mb-4">
        <span className="font-semibold text-gray-400">Built with: </span>
        {techStack.map((tech, index) => (
          <span key={index} className="text-gray-300 bg-gray-800 px-2 py-1 rounded-lg mx-1 text-sm">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-4">
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn">
          GitHub
        </a>
        <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="btn">
          Live Demo
        </a>
        <a href={projectPage} className="btn">
          More Info
        </a>
      </div>
    </motion.div>
  );
}
