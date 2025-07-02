import { Cloud, Code, Database, ExternalLink, Server } from "lucide-react";
import GitHubIcon from "../assets/github";
import type { Project } from "../types/project";
import { projectsData } from "../data/projects";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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
    const [isHovered, setIsHovered] = useState(false);
    const { t } = useTranslation();

    return (
        <div
            className={`group relative bg-gradient-to-br from-light/5 to-light/5 backdrop-blur-xl border-4 border-dark rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-dark/70 hover:border-light/40 h-full flex flex-col`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Efeito de brilho no hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-light/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />

            {/* Container da imagem com espaçamento */}
            <div className="relative h-48 overflow-hidden p-2">
                <img
                    src={project.image}
                    alt={t(`projects.items.${project.id}.title`)}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out"
                />

                {/* Overlay com gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 rounded-xl" />

                {/* Links flutuantes */}
                <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    <a href={project.github} className="p-2 bg-dark/60 backdrop-blur-sm rounded-full hover:bg-dark/80 transition-colors">
                        <GitHubIcon className="w-4 h-4 text-light" />
                    </a>
                    <a href={project.demo} className="p-2 bg-dark/60 backdrop-blur-sm rounded-full hover:bg-dark/80 transition-colors">
                        <ExternalLink className="w-4 h-4 text-light" />
                    </a>
                </div>
            </div>

            <div className="flex flex-col gap-3 p-5 flex-1">
                <div className="inline-flex w-fit gap-2 px-3 py-1.5 rounded-full bg-primary border border-light/10 text-sm font-medium text-light">
                    {getCategoryIcon(project.category)}
                    <span className="capitalize">
                        {t(`projects.filter.${project.category}`)}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-light">
                    {t(`projects.items.${project.id}.title`)}
                </h3>

                <p className="text-light/70 text-sm leading-relaxed">
                    {t(`projects.items.${project.id}.description`)}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs bg-dark/60 text-light/70 rounded-md border border-light/10 hover:bg-dark/80 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const { t } = useTranslation();

    const categories = ['all', 'frontend', 'backend', 'fullstack', 'cloud'];

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-3 pb-10">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === category
                            ? 'bg-primary text-light border-secondary shadow-lg shadow-primary/40'
                            : 'bg-dark text-light border-light/20 hover:bg-dark/80 hover:border-light/10 cursor-pointer'
                            }`}
                    >
                        <span className="capitalize">{t(`projects.filter.${category}`)}</span>
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {filteredProjects.map((project) => (
                    <div key={project.id}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-light mb-2">
                            {t('projects.noProject.title')}
                        </h3>
                        <p className="text-light/40">
                            {t('projects.noProject.description')}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};


export default Projects;