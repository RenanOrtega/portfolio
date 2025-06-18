"use client"

import { useState, type ComponentType, type SVGProps } from "react";
import { ExternalLink, ChevronRight } from "lucide-react";

// const gradients = {
//     purple: "from-purple-400 via-purple-500 to-purple-600",
//     green: "from-green-400 via-green-500 to-emerald-600",
//     red: "from-red-400 via-red-500 to-pink-600",
//     blue: "from-blue-400 via-blue-500 to-cyan-600",
//     orange: "from-orange-400 via-orange-500 to-yellow-600",
//     pink: "from-pink-400 via-pink-500 to-rose-600",
//     indigo: "from-indigo-400 via-indigo-500 to-purple-600",
//     teal: "from-teal-400 via-teal-500 to-cyan-600",
// };

interface MobileSocialMedia {
    title: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
   // gradient?: keyof typeof gradients;
    customColor?: string;
    imageSize?: number;
    url: string;
}

const MobileSocialMedia = ({ title, icon: Icon, customColor = "bg-dark", imageSize = 25, url }: MobileSocialMedia) => {
    // const backgroundClass = customColor
    //     ? customColor
    //     : `bg-gradient-to-br ${gradients[gradient]}`;

    const [isPressed, setIsPressed] = useState<boolean>(false);

    return (
        <div className={`flex flex-col w-full px-10 `}>
            <a
                href={url}
                target="_blank"
                className={`
                    relative flex justify-between items-center ${customColor} h-12 px-4
                    transform transition-all duration-200 ease-out
                    ${isPressed ? 'scale-95' : 'scale-100'}
                    active:scale-95
                    shadow-lg hover:shadow-xl 
                `}
                onTouchStart={() => setIsPressed(true)}
                onTouchEnd={() => setIsPressed(false)}
                onTouchCancel={() => setIsPressed(false)}
            >
                {/* Conteúdo principal */}
                <div className="flex items-center gap-3 text-light ">
                    <Icon width={imageSize} height={imageSize} fill="currentColor" />
                    {/* <img src={imagePath} width={imageSize} height={imageSize} alt={title} /> */}
                    <span className="font-medium">Access {title}</span>
                </div>

                {/* Indicador visual de clique */}
                <div className="flex items-center gap-1 text-light">
                    <ExternalLink size={16} />
                </div>

                {/* Efeito de brilho sutil */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </a>
        </div>
    )
}

export default MobileSocialMedia;