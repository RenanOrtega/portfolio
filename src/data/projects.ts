import type { Project } from "../types/project";

export const projectsData: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TypeScript"],
        category: "fullstack",
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        id: "2",
        title: "Task Management App",
        description: "Modern task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
        category: "frontend",
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        id: "3",
        title: "Weather Dashboard",
        description: "Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
        technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
        category: "frontend",
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        id: "4",
        title: "RESTful API Service",
        description: "Scalable REST API built with Node.js and Express, featuring JWT authentication, rate limiting, and comprehensive documentation.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
        category: "backend",
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        id: "5",
        title: "Social Media Analytics",
        description: "Analytics platform for social media metrics with real-time data visualization and automated reporting features.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
        category: "fullstack",
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        id: "6",
        title: "Cloud Monitoring Tool",
        description: "Infrastructure monitoring solution with real-time alerts, performance metrics, and automated scaling capabilities.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        technologies: ["Python", "Docker", "Kubernetes", "Grafana", "Prometheus"],
        category: "backend",
        github: "https://github.com",
        demo: "https://example.com"
    }
];