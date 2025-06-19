import { Cloud, Code, Database, ExternalLink, Server } from "lucide-react";
import GitHubIcon from "../assets/github";

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    category: 'frontend' | 'backend' | 'fullstack';
    featured: boolean;
}

const projectsData: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TypeScript"],
        githubUrl: "https://github.com/user/ecommerce",
        liveUrl: "https://ecommerce-demo.com",
        category: "fullstack",
        featured: true
    },
    {
        id: "2",
        title: "Task Management App",
        description: "Modern task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
        githubUrl: "https://github.com/user/task-manager",
        liveUrl: "https://taskmanager-demo.com",
        category: "frontend",
        featured: true
    },
    {
        id: "3",
        title: "Weather Dashboard",
        description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
        technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
        githubUrl: "https://github.com/user/weather-dashboard",
        liveUrl: "https://weather-demo.com",
        category: "frontend",
        featured: false
    },
    {
        id: "4",
        title: "RESTful API Service",
        description: "Scalable REST API built with Node.js and Express, featuring JWT authentication, rate limiting, and comprehensive documentation.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
        githubUrl: "https://github.com/user/api-service",
        liveUrl: "https://api-demo.com",
        category: "backend",
        featured: false
    },
    {
        id: "5",
        title: "Social Media Analytics",
        description: "Analytics platform for social media metrics with real-time data visualization and automated reporting features.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
        githubUrl: "https://github.com/user/social-analytics",
        liveUrl: "https://analytics-demo.com",
        category: "fullstack",
        featured: true
    },
    {
        id: "6",
        title: "Cloud Monitoring Tool",
        description: "Infrastructure monitoring solution with real-time alerts, performance metrics, and automated scaling capabilities.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        technologies: ["Python", "Docker", "Kubernetes", "Grafana", "Prometheus"],
        githubUrl: "https://github.com/user/cloud-monitor",
        liveUrl: "https://monitor-demo.com",
        category: "backend",
        featured: false
    }
];

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
            {/* Featured Badge
            {project.featured && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                    Featured
                </div>
            )} */}

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content */}
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

                {/* Technologies */}
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

                {/* Actions */}
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

            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
    );
};

const Projects = () => {
    // const featuredProjects = projectsData.filter(project => project.featured);
    const allProjects = projectsData;

    return (
        <div className="max-w-7xl mx-auto">


            {/* Featured Projects
            <div className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div> */}

            {/* All Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;