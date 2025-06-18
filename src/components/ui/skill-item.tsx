import type { ComponentType, SVGProps } from "react";

interface SkillItemProps {
    title: string;
    subTitle: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const SkillItem = ({title, subTitle, icon: Icon}: SkillItemProps) => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <div className="relative p-6 rounded-2xl 
                    backdrop-blur-md bg-white/10 border shadow-lg 
                    hover:bg-white/20 hover:text-primary hover:scale-105
                    transition-all duration-300 border-light/80 hover:border-secondary">
                <Icon width={50} height={50} className="font-bold md:w-16 md:h-16 lg:w-20 lg:h-20" />
            </div>
            <p className="font-bold text-2xl md:text-3xl text-light">{title}</p>
            <p className="font-bold text-sm text-light/60">{subTitle}</p>
        </div>
    );
}

export default SkillItem;