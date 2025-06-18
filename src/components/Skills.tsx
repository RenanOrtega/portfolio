import { Cloud, Database, LucidePencil, Server } from "lucide-react";
import SkillItem from "./ui/skill-item";

const Skills = () => {
    return (
        <div className="relative grid grid-cols-2 gap-y-10 md:gap-0 md:grid-cols-4">
            {/* Front-end */}
            <SkillItem 
                title="Front-End"
                subTitle="React"
                icon={LucidePencil}
            />
            {/* Back-end */}
            <SkillItem 
                title="Back-End"
                subTitle=".NET C# - NodeJS"
                icon={Server}
            />
            {/* Cloud */}
            <SkillItem 
                title="Cloud"
                subTitle="GCP - AWS"
                icon={Cloud}
            />
            {/* Databases */}
            <SkillItem 
                title="Databases"
                subTitle="SQL - MongoDB"
                icon={Database}
            />
        </div>
    );
};

export default Skills;
