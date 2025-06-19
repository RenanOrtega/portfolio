import type { Skill } from "../Skills";

interface SkillDetailProps {
    skill: Skill;
    onClose: () => void;
    isVisible?: boolean;
}

const SkillDetail = ({ skill, onClose, isVisible }: SkillDetailProps) => {
    return (
        <div className={`
            bg-gradient-to-br from-light/10 to-light/5 backdrop-blur-md 
            rounded-2xl  shadow-xl transition-all duration-500 ease-out
            flex flex-col gap-18 p-6 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}>
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <skill.icon className="w-8 h-8 text-primary" />
                    <div>
                        <h3 className="text-xl font-bold text-light">{skill.title}</h3>
                        <p className="text-primary/70 font-medium">{skill.subTitle}</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="text-light/60 hover:text-light transition-colors duration-200 p-1"
                >
                    ✕
                </button>
            </div>

            <div className="flex items-center gap-2 text-light/70">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>{skill.experience}</span>
            </div>

            <div className="mb-6">
                <h4 className="text-light font-semibold mb-3">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary/80 rounded-full text-sm border border-primary/30"
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