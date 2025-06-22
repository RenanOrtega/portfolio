export interface Project {
    id: string;
    image: string;
    technologies: string[];
    github: string;
    demo: string;
    category: 'frontend' | 'backend' | 'fullstack';
}