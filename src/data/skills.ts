import { Cloud, Database, LucidePencil, Server } from "lucide-react";
import type { Skill } from "../types/skills";

export const skillsData: Skill[] = [
    {
        id: "frontend",
        title: "Front-End",
        subTitle: "React",
        icon: LucidePencil,
        description: "Passionate about creating intuitive and responsive user interfaces with modern frameworks and cutting-edge technologies.",
        technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "JavaScript ES6+"],
        experience: "3+ years building modern web applications",
    },
    {
        id: "backend",
        title: "Back-End",
        subTitle: ".NET C# - NodeJS",
        icon: Server,
        description: "Experienced in building scalable server-side applications with robust APIs and efficient database management.",
        technologies: [".NET Core", "C#", "Node.js", "Express.js", "REST APIs", "GraphQL"],
        experience: "4+ years in server-side development",
    },
    {
        id: "cloud",
        title: "Cloud",
        subTitle: "GCP - AWS",
        icon: Cloud,
        description: "Skilled in cloud architecture, deployment, and management using major cloud platforms for scalable solutions.",
        technologies: ["Google Cloud Platform", "AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
        experience: "2+ years in cloud infrastructure",
    },
    {
        id: "databases",
        title: "Databases",
        subTitle: "SQL - MongoDB",
        icon: Database,
        description: "Proficient in designing and optimizing both relational and NoSQL databases for optimal performance.",
        technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Entity Framework"],
        experience: "3+ years in database design",
    }
];