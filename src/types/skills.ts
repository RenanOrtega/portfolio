import type { Cloud } from "lucide-react";

export interface Skill {
    id: string;
    title: string;
    subTitle: string;
    icon: typeof Cloud;
    description: string;
    technologies: string[];
    experience: string;
}