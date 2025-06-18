import { X } from "lucide-react";
import type { Skill } from "../Skills";

interface SkillDetailProps {
    skill: Skill;
    onClose: () => void;
    isVisible?: boolean;
}

const SkillDetail = ({ skill, onClose, isVisible = true }: SkillDetailProps) => {
    const Icon = skill.icon;

    return (
        <div className={`bg-light backdrop-blur-md border rounded-3xl p-8 mt-8 lg:mt-0 flex flex-col gap-5 
                        transition-all duration-400 ease-out will-change-transform
                        ${isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-4 scale-98'
            }`}>
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                    <Icon className="w-8 h-8 text-primary transition-all duration-300 ease-out" />
                    <div>
                        <h3 className="text-3xl font-bold text-primary transition-all duration-300 ease-out">{skill.title}</h3>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-dark/20 transition-all duration-200 ease-out will-change-transform hover:scale-105"
                >
                    <X className="w-6 h-6 text-dark/60 hover:text-dark transition-colors duration-200 ease-out" />
                </button>
            </div>

            {/* Experience */}
            <div className="transition-all duration-300 ease-out">
                <h4 className="text-xl font-semibold text-dark mb-3">Experience</h4>
                <div className="bg-dark/10 rounded-xl p-4 border border-dark/10">
                    <p className="text-dark/70">{skill.experience}</p>
                </div>
            </div>

            {/* Technologies */}
            <div className="transition-all duration-300 ease-out">
                <h4 className="text-xl font-semibold text-dark mb-4">Technologies & Tools</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skill.technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-dark/10 rounded-lg p-3 border border-dark/20 text-center 
                                     hover:bg-dark/20 transition-all duration-200 ease-out 
                                     will-change-transform hover:scale-105 hover:shadow-md"
                            style={{
                                animationDelay: `${index * 50}ms`,
                                animation: isVisible ? 'fadeInUp 0.4s ease-out forwards' : 'none'
                            }}
                        >
                            <span className="text-dark/90 font-medium">{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillDetail;