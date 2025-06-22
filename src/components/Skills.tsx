import { useState } from "react";
import SkillItem from "./ui/skill-item";
import SkillDetail from "./ui/skill-detail";
import { skillsData } from "../data/skills";
import { useTranslation } from "react-i18next";

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const { t } = useTranslation();

    const handleSkillClick = (skillId: string) => {
        if (isTransitioning) return;

        if (selectedSkill === skillId) {
            setIsTransitioning(true);
            setSelectedSkill(null);
            setTimeout(() => setIsTransitioning(false), 400);
        } else {
            setIsTransitioning(true);
            setSelectedSkill(skillId);
            setTimeout(() => setIsTransitioning(false), 100);
        }
    };

    const selectedSkillData = skillsData.find(skill => skill.id === selectedSkill);

    return (
        <div className={`relative transition-all duration-500 ease-out will-change-transform ${selectedSkill
            ? 'grid grid-cols-5 gap-8 items-start'
            : 'flex flex-col'
            }`}>

            <div className={`transition-all duration-500 ease-out will-change-transform ${selectedSkill
                ? 'col-span-2 grid grid-cols-1 gap-4'
                : 'grid grid-cols-1 gap-5'
                }`}>
                {skillsData.map((skill) => (
                    <SkillItem
                        key={skill.id}
                        title={t(`skills.${skill.id}.title`)}
                        subTitle={skill.subTitle}
                        icon={skill.icon}
                        isSelected={selectedSkill === skill.id}
                        isCompact={!!selectedSkill}
                        isTransitioning={isTransitioning}
                        onClick={() => handleSkillClick(skill.id)}
                    />
                ))}
            </div>

            <div className={`col-span-3 transition-all duration-400 ease-out will-change-transform ${selectedSkill && !isTransitioning
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