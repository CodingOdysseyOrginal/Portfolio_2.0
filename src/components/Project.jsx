import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Writer's Realm",
      description: "A platform for writers to share and collaborate.",
      techStack: ["Next.js", "Node.js", "MongoDB", "Docker"],
      videoSrc: "/videos/writers_realm.mp4",
      githubLink: "https://github.com/CodingOdysseyOrginal/writers_realm",
      liveDemo: "https://writersrealm.app",
      projectPage: "/project/writers_realm"
    },
    {
      title: "DevOps Tutorial",
      description: "A step-by-step DevOps guide with real-world examples.",
      techStack: ["AWS", "Docker", "GitHub Actions"],
      videoSrc: "/videos/devops_tutorial.mp4",
      githubLink: "https://github.com/CodingOdysseyOrginal/devops_tutorial",
      liveDemo: "https://devops-tutorial.com",
      projectPage: "/project/devops_tutorial"
    }
  ];

  return (
    <section id="projects" className="bg-black text-white py-16 px-8 h-[100vh] pt-30">
      <h2 className="text-6xl font-extrabold text-center mb-8 leading-tight text-gray-300">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
