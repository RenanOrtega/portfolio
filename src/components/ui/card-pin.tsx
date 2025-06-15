"use client"

const gradients = {
    purple: "from-purple-500 via-purple-500 to-blue-500",
    green: "from-green-500 via-green-500 to-emerald-500",
    red: "from-red-500 via-red-500 to-pink-500",
    blue: "from-blue-500 via-blue-500 to-cyan-500",
    orange: "from-orange-500 via-orange-500 to-yellow-500",
    pink: "from-pink-500 via-pink-500 to-rose-500",
    indigo: "from-indigo-500 via-indigo-500 to-purple-500",
    teal: "from-teal-500 via-teal-500 to-cyan-500",
};

interface CardPinProps {
    title: string;
    iconPath: string;
    iconSize?: number;
    gradient?: keyof typeof gradients;
    customColor?: string;
}

const CardPin = ({
    title, 
    iconPath, 
    iconSize = 50, 
    gradient = "purple", 
    customColor
}: CardPinProps) => {
    // Se customColor for fornecido, usa ele; senão usa o gradient pré-definido
    const backgroundClass = customColor 
        ? customColor 
        : `bg-gradient-to-br ${gradients[gradient]}`;

    return (
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[10rem] h-[10rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {title}
            </h3>
            <div
                className={`flex justify-center items-center flex-1 w-full rounded-lg mt-4 ${backgroundClass}`}
            >
                <img src={iconPath} width={iconSize} height={iconSize} alt={title} />
            </div>
        </div>
    );
}

export default CardPin;