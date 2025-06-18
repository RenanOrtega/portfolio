import { useState } from "react";
import { Cloud, Database, LucidePencil, Server } from "lucide-react";
import SkillItem from "./ui/skill-item";
import SkillDetail from "./ui/skill-detail";

export interface Skill {
    id: string;
    title: string;
    subTitle: string;
    icon: typeof Cloud;
    description: string;
    technologies: string[];
    experience: string;
}

const skillsData: Skill[] = [
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

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleSkillClick = (skillId: string) => {
        if (isTransitioning) return; // Previne cliques durante transição

        if (selectedSkill === skillId) {
            // Fechando o painel atual
            setIsTransitioning(true);
            setSelectedSkill(null);
            setTimeout(() => setIsTransitioning(false), 400);
        } else {
            // Abrindo um novo painel ou trocando
            setIsTransitioning(true);
            setSelectedSkill(skillId);
            setTimeout(() => setIsTransitioning(false), 100);
        }
    };

    const selectedSkillData = skillsData.find(skill => skill.id === selectedSkill);

    return (    
        <div className={`transition-all duration-500 ease-out will-change-transform ${selectedSkill
            ? 'lg:grid lg:grid-cols-5 lg:gap-8 lg:items-start'
            : 'flex flex-col'
            }`}>

            {/* Skills Container */}
            <div className={`transition-all duration-500 ease-out will-change-transform ${selectedSkill
                ? 'lg:col-span-2 grid grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-4'
                : 'grid grid-cols-1 gap-5'
                }`}>
                {skillsData.map((skill) => (
                    <SkillItem
                        key={skill.id}
                        title={skill.title}
                        subTitle={skill.subTitle}
                        icon={skill.icon}
                        isSelected={selectedSkill === skill.id}
                        isCompact={!!selectedSkill}
                        isTransitioning={isTransitioning}
                        onClick={() => handleSkillClick(skill.id)}
                    />
                ))}
            </div>

            {/* Detail Panel */}
            <div className={`lg:col-span-3 transition-all duration-400 ease-out will-change-transform ${selectedSkill && !isTransitioning
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-4 scale-98 lg:hidden'
                }`}>
                {selectedSkillData && (
                    <SkillDetail
                        skill={selectedSkillData}
                        onClose={() => handleSkillClick(selectedSkillData.id)}
                        isVisible={!isTransitioning}
                    />
                )}
            </div>
        </div>
    );
};

export default Skills;