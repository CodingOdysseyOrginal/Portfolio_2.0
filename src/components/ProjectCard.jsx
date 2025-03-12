import { motion } from "framer-motion";

export default function ProjectCard({ title, description, techStack, imageSrc, githubLink, liveDemo }) {
  return (
    <motion.div
      className="bg-gray-900 border border-white rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-all duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
    >
      <img className="w-full rounded-lg mb-4" src={imageSrc} alt={title} />

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      
      <div className="mb-4">
        <span className="font-semibold text-gray-400 block mb-2">Built with:</span>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span key={index} className="text-gray-300 bg-gray-800 px-2 py-1 rounded-lg text-sm inline-flex">
              {tech}
            </span>
          ))}
        </div>
      </div>

     
      <div className="flex space-x-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-4 py-2 border-2 border-white text-white rounded-lg transition-all duration-300 ease-in-out 
                     hover:bg-white hover:text-black hover:shadow-lg"
        >
          GitHub
        </a>
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-4 py-2 border-2 border-white text-white rounded-lg transition-all duration-300 ease-in-out 
                     hover:bg-white hover:text-black hover:shadow-lg"
        >
          Live Demo
        </a>
      </div>

      
      <p className="text-white text-sm mt-4">Look at the README for more information.</p>
    </motion.div>
  );
}
