import { useParams } from "react-router-dom";

const projectData = {
  writers_realm: {
    title: "Writer's Realm",
    description: "A platform for writers to share and collaborate.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Docker"],
    videoSrc: "/videos/writers_realm.mp4",
    githubLink: "https://github.com/CodingOdysseyOrginal/writers_realm",
    liveDemo: "https://writersrealm.app"
  },
  devops_tutorial: {
    title: "DevOps Tutorial",
    description: "A step-by-step DevOps guide with real-world examples.",
    techStack: ["AWS", "Docker", "GitHub Actions"],
    videoSrc: "/videos/devops_tutorial.mp4",
    githubLink: "https://github.com/CodingOdysseyOrginal/devops_tutorial",
    liveDemo: "https://devops-tutorial.com"
  },
  Group_project: {
    title: "DevOps Tutorial",
    description: "A step-by-step DevOps guide with real-world examples.",
    techStack: ["AWS", "Docker", "GitHub Actions"],
    videoSrc: "/videos/devops_tutorial.mp4",
    githubLink: "https://github.com/CodingOdysseyOrginal/devops_tutorial",
    liveDemo: "https://devops-tutorial.com"
  }
};

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) return <h1 className="text-white text-center mt-20">Project Not Found</h1>;

  return (
    <section className="bg-black text-white h-[150vh] flex flex-col items-center px-8 pt-16">
      <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
      <video className="w-full max-w-2xl rounded-lg mb-6" controls>
        <source src={project.videoSrc} type="video/mp4" />
      </video>
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
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
          GitHub
        </a>
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn">
          Live Demo
        </a>
      </div>
    </section>
  );
}
