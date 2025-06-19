import { Cloud, Code, Database, Server } from "lucide-react";
import GitHubIcon from "../assets/github";
import type { Project } from "../types/project";
import { projectsData } from "../data/projects";

const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'frontend':
            return <Code className="w-4 h-4" />;
        case 'backend':
            return <Server className="w-4 h-4" />;
        case 'fullstack':
            return <Database className="w-4 h-4" />;
        default:
            return <Cloud className="w-4 h-4" />;
    }
};

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10}`}>
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                        {getCategoryIcon(project.category)}
                        <span className="capitalize font-medium">{project.category}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-white/70 mb-4 leading-relaxed text-sm">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-white/10 text-white/80 rounded-md text-xs font-medium border border-white/20 hover:border-blue-400/50 transition-colors duration-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 ease-out hover:scale-105 border border-white/20 hover:border-white/40"
                    >
                        <GitHubIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                    </a>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;