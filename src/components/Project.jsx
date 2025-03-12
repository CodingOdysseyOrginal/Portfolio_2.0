import ProjectCard from "./ProjectCard";
import PlaceHolder from "../assets/ComingSoonSign.png";

export default function Projects() {
  const projects = [
    {
      title: "Writer's Realm",
      description: "A platform for writers to share and collaborate.",
      techStack: ["React", "Express", "Supabase", "JavaScript", "Tailwind", "Node"],
      imageSrc: PlaceHolder, 
      githubLink: "https://github.com/CodingOdysseyOrginal/writers_realm",
      liveDemo: "https://writersrealm.app"
    },
    {
      title: "DevOps Tutorial",
      description: "A step-by-step DevOps guide with real-world examples.",
      techStack: ["AWS", "Docker", "GitHub Actions"],
      imageSrc: PlaceHolder,
      githubLink: "https://github.com/CodingOdysseyOrginal/devops_tutorial",
      liveDemo: "https://devops-tutorial.com"
    }
  ];

  return (
    <section id="projects" className="bg-black text-white py-16 px-8 min-h-screen">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-300">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
