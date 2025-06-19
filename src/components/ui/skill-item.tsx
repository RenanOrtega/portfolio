import { useRef, type ComponentType, type SVGProps } from "react";

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
    const itemRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={itemRef}
            className={`flex flex-col gap-2 cursor-pointer transition-all duration-500 ease-out will-change-transform ${isCompact ? 'transform scale-95' : ''
                } ${isTransitioning ? 'pointer-events-none' : ''}`}
            onClick={onClick}
        >
            <div className={`rounded-2xl backdrop-blur-md overflow-hidden
                ${isSelected
                    ? "bg-gradient-to-br from-primary/20 to-priamry/20 border-primary"
                    : "bg-light/5 border-light/20"
                } 
                border shadow-lg hover:scale-105 transition-all duration-300 ease-out
                ${isSelected ? 'scale-105 shadow-2xl shadow-blue-500/20' : 'hover:border-primary/50'}
                ${isCompact ? 'p-4' : 'p-6'}
            `}>
                {/* Efeito de brilho animado quando selecionado */}
                {isSelected && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-light/10 to-transparent animate-pulse"></div>
                )}

                <div className="flex gap-5 z-10">
                    <Icon
                        className={`transition-all duration-300 ease-out will-change-transform ${isSelected ? 'text-secondary' : 'text-light'
                            } ${isCompact ? 'w-8 h-8 md:w-10 md:h-10' : 'w-12 h-12 lg:w-14 lg:h-14'}`}
                    />
                    <div className={`transition-all duration-300 ease-out will-change-transform ${isCompact ? 'scale-90' : ''
                        }`}>
                        <p className={`font-bold text-light transition-all duration-300 ease-out ${isCompact ? 'text-lg md:text-xl' : 'text-xl'
                            }`}>
                            {title}
                        </p>
                        <p className={`font-medium transition-all duration-300 ease-out ${isSelected ? 'text-secondary' : 'text-light/60'
                            } ${isCompact ? 'text-xs' : 'text-sm'}`}>
                            {subTitle}
                        </p>
                    </div>
                </div>

                {isSelected && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-light shadow-lg">
                        <div className="w-full h-full bg-primary rounded-full animate-ping opacity-75"></div>
                    </div>
                )}
            </div>
        </div>
    );
};


export default SkillItem;