import type { Project } from "../types/project";

export const projectsData: Project[] = [
    {
        id: "ecommerce",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TypeScript"],
        category: "fullstack",
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        id: "task",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
        category: "frontend",
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        id: "weather",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
        technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
        category: "frontend",
        github: "https://github.com",
        demo: "https://example.com"
    }
];