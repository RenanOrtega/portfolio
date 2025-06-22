import { useTranslation } from "react-i18next";
import type { Skill } from "../../types/skills";

interface SkillDetailProps {
    skill: Skill;
    onClose: () => void;
    isVisible?: boolean;
}

const SkillDetail = ({ skill, onClose, isVisible }: SkillDetailProps) => {
    const { t } = useTranslation();

    return (
        <div className={`
            bg-gradient-to-br from-light/10 to-light/5 backdrop-blur-md 
            rounded-2xl shadow-xl transition-all duration-500 ease-out
            flex flex-col gap-4 lg:gap-6 p-4 sm:p-5 lg:p-6 
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
        `}>
            {/* Header */}
            <div className="flex justify-between items-start gap-3">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <skill.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-light leading-tight">
                            {t(`skills.${skill.id}.title`)}
                        </h3>
                        <p className="text-primary/70 font-medium text-sm sm:text-base leading-tight">
                            {skill.subTitle}
                        </p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="text-light/60 hover:text-light transition-colors duration-200 p-1 sm:p-2 flex-shrink-0"
                    aria-label="Fechar detalhes"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Experience */}
            <div className="flex items-center gap-2 text-light/70">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base">{t(`skills.${skill.id}.experience`)}</span>
            </div>

            {/* Technologies */}
            <div>
                <h4 className="text-light font-semibold mb-3 text-sm sm:text-base lg:text-lg">
                    {t(`skills.${skill.id}.techTitle`)}
                </h4>
                <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 sm:px-3 sm:py-1.5 bg-primary/10 text-primary/80 rounded-full text-xs sm:text-sm border border-primary/30 leading-tight"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillDetail;