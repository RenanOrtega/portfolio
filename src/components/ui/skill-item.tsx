import type { ComponentType, SVGProps } from "react";

interface SkillItemProps {
    title: string;
    subTitle: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    isSelected?: boolean;
    isCompact?: boolean;
    isTransitioning?: boolean;
    onClick?: () => void;
}

const SkillItem = ({
    title,
    subTitle,
    icon: Icon,
    isSelected = false,
    isCompact = false,
    isTransitioning = false,
    onClick
}: SkillItemProps) => {
    return (
        <div
            className={`flex flex-col gap-2 cursor-pointer transition-all duration-400 ease-out will-change-transform ${isCompact ? 'transform scale-90' : ''
                } ${isTransitioning ? 'pointer-events-none' : ''}`}
            onClick={onClick}
        >
            <div className={`relative rounded-2xl backdrop-blur-md bg-light/5 border shadow-lg 
                     hover:text-primary hover:scale-105
                    transition-all duration-300 ease-out border-light/80 hover:border-primary
                    will-change-transform
                    ${isSelected
                    ? ' border-primary text-primary scale-105 shadow-xl shadow-primary/20'
                    : ''
                }
                    ${isCompact ? 'p-4' : 'p-6'}
                    `}>
                <div className="flex gap-5">
                    <Icon
                        className={`font-bold transition-all duration-300 ease-out will-change-transform ${isCompact
                            ? 'w-8 h-8 md:w-10 md:h-10'
                            : 'w-12 h-12 lg:w-15 lg:h-15'
                            }`}
                    />
                    <div className={`transition-all duration-300 ease-out will-change-transform ${isCompact ? 'scale-90' : ''
                        }`}>
                        <p className={`font-bold text-light transition-all duration-300 ease-out ${isCompact ? 'text-lg md:text-xl' : 'text-xl'
                            }`}>
                            {title}
                        </p>
                        <p className={`font-bold text-light/60 transition-all duration-300 ease-out ${isCompact ? 'text-xs' : 'text-sm'
                            }`}>
                            {subTitle}
                        </p>
                    </div>
                </div>
                {/* Selection indicator */}
                {isSelected && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white animate-pulse"></div>
                )}

            </div>

        </div>
    );
}

export default SkillItem;