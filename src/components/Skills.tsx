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
        <div className="relative transition-all duration-500 ease-out will-change-transform">
            {/* Layout Mobile: Stack vertical */}
            <div className="flex flex-col lg:hidden gap-4">
                {skillsData.map((skill) => (
                    <div key={skill.id} className="flex flex-col gap-3">
                        <SkillItem
                            title={t(`skills.${skill.id}.title`)}
                            subTitle={skill.subTitle}
                            icon={skill.icon}
                            isSelected={selectedSkill === skill.id}
                            isCompact={false}
                            isTransitioning={isTransitioning}
                            onClick={() => handleSkillClick(skill.id)}
                        />
                        
                        {/* Detail aparece logo abaixo do item no mobile */}
                        {selectedSkill === skill.id && (
                            <div className={`transition-all duration-400 ease-out will-change-transform ${
                                !isTransitioning 
                                    ? 'opacity-100 translate-y-0 scale-100' 
                                    : 'opacity-0 translate-y-4 scale-98'
                            }`}>
                                <SkillDetail
                                    skill={skill}
                                    onClose={() => handleSkillClick(skill.id)}
                                    isVisible={!isTransitioning}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Layout Desktop: Grid horizontal */}
            <div className={`hidden lg:grid transition-all duration-500 ease-out will-change-transform ${
                selectedSkill
                    ? 'grid-cols-5 gap-8 items-start'
                    : 'grid-cols-1'
            }`}>
                <div className={`transition-all duration-500 ease-out will-change-transform ${
                    selectedSkill
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

                {selectedSkill && (
                    <div className={`col-span-3 transition-all duration-400 ease-out will-change-transform ${
                        !isTransitioning
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 translate-y-4 scale-98'
                    }`}>
                        {selectedSkillData && (
                            <SkillDetail
                                skill={selectedSkillData}
                                onClose={() => handleSkillClick(selectedSkillData.id)}
                                isVisible={!isTransitioning}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Skills;