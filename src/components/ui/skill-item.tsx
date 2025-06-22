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
    const itemRef = useRef(null);

    return (
        <div
            ref={itemRef}
            className={`flex flex-col gap-2 cursor-pointer transition-all duration-500 ease-out will-change-transform ${
                isCompact ? 'transform scale-95' : ''
            } ${isTransitioning ? 'pointer-events-none' : ''}`}
            onClick={onClick}
        >
            <div className={`relative rounded-2xl backdrop-blur-md overflow-hidden
                ${isSelected
                    ? "bg-gradient-to-br from-primary/20 to-primary/20 border-primary"
                    : "bg-light/5 border-light/20"
                } 
                border shadow-lg hover:scale-105 transition-all duration-300 ease-out
                ${isSelected ? 'scale-105 shadow-2xl shadow-blue-500/20' : 'hover:border-primary/50'}
                ${isCompact ? 'p-3 lg:p-4' : 'p-4 sm:p-5 lg:p-6'}
            `}>
                {/* Efeito de brilho animado quando selecionado */}
                {isSelected && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-light/10 to-transparent animate-pulse"></div>
                )}

                <div className="flex gap-3 sm:gap-4 lg:gap-5 z-10 relative">
                    <Icon
                        className={`flex-shrink-0 transition-all duration-300 ease-out will-change-transform ${
                            isSelected ? 'text-secondary' : 'text-light'
                        } ${
                            isCompact 
                                ? 'w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10' 
                                : 'w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14'
                        }`}
                    />
                    <div className={`min-w-0 flex-1 transition-all duration-300 ease-out will-change-transform ${
                        isCompact ? 'scale-90' : ''
                    }`}>
                        <p className={`font-bold text-light transition-all duration-300 ease-out leading-tight ${
                            isCompact 
                                ? 'text-base sm:text-lg lg:text-xl' 
                                : 'text-lg sm:text-xl lg:text-2xl'
                        }`}>
                            {title}
                        </p>
                        <p className={`font-medium transition-all duration-300 ease-out leading-tight ${
                            isSelected ? 'text-secondary' : 'text-light/60'
                        } ${
                            isCompact 
                                ? 'text-xs sm:text-sm' 
                                : 'text-sm sm:text-base'
                        }`}>
                            {subTitle}
                        </p>
                    </div>
                </div>

                {isSelected && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 border-light shadow-lg">
                        <div className="w-full h-full bg-primary rounded-full animate-ping opacity-75"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SkillItem;