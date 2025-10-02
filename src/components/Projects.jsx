import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Clothing E-commerce Website",
    description: "Create chat bot like gemini ai with html and css",
    image: "/projects/chatbot.png",
    url: "#",
    tags: ["Html", "Css", "Javascript"],
  },
  {
    id: 2,
    title: "Share-And-Care Clothing E-commerce management system",
    description: "Website Landing page 3D  html and css",
    image: "/projects/butterfly-three-js.png",
    url: "#",
    tags: ["Html", "Css", "Javascript"],
  },
  {
    id: 3,
    title: "Landing Intro Page",
    description: "Landing Intro Pages with html and css",
    image: "/projects/landiing-page.png",
    url: "#",
    tags: ["Html", "Css", "Javascript"],
  },
];
export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-2 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          There are some projects Each project was created with attention to
          detail and performance
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-45 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1 text-secondary">
                {project.title}
              </h3>
              <p className="text-secondary text-sm mb-4">
                {project.description}
              </p>
              <div className="flex space-x-3">
                <a
                  target="_blank"
                  href={project.url}
                  className="text-primary px-2 py-2 transition-colors duration-300"
                >
                  <ExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
