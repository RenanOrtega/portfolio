import { Cloud, Database, LucidePencil, Server } from "lucide-react";
import { useState } from "react";

const Skills = () => {
    const [lineColor, setLineColor] = useState<string>("bg-white/20")
    return (
        <div className="relative grid grid-cols-2 gap-y-10 md:gap-0 md:grid-cols-4">
            {/* Linha Conectando os Ícones */}
            <div className={`hidden md:block absolute top-16 left-0 right-0 h-0.5 ${lineColor}`}></div>

            {/* Front-end */}
            <div className="flex flex-col justify-center items-center gap-2 hover:text-blue-400">
                <div className="relative p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    onMouseEnter={() => setLineColor("bg-blue-400")}
                    onMouseLeave={() => setLineColor("bg-white/20")}
                >
                    <LucidePencil width={50} height={50} className="font-bold md:w-16 md:h-16 lg:w-20 lg:h-20" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-transparent pointer-events-none border-2 border-blue-500"></div>
                </div>
                <p className="font-bold text-2xl md:text-3xl text-white">Front-end</p>
                <p className="font-bold text-sm text-gray-500">React</p>
            </div>

            {/* Back-end */}
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="relative p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 hover:text-green-400 transition-all duration-300 hover:scale-105"
                    onMouseEnter={() => setLineColor("bg-green-400")}
                    onMouseLeave={() => setLineColor("bg-white/20")}
                >
                    <Server width={50} height={50} className="font-bold md:w-16 md:h-16 lg:w-20 lg:h-20" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/20 to-transparent pointer-events-none border-2 border-green-500"></div>
                </div>
                <p className="font-bold text-2xl md:text-3xl text-white">Back-end</p>
                <p className="font-bold text-sm text-gray-500">.NET C# - NodeJS</p>
            </div>

            {/* Cloud */}
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="relative p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 hover:text-sky-200 transition-all duration-300 hover:scale-105"
                    onMouseEnter={() => setLineColor("bg-sky-200")}
                    onMouseLeave={() => setLineColor("bg-white/20")}
                >
                    <Cloud width={50} height={50} className="font-bold md:w-16 md:h-16 lg:w-20 lg:h-20" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-200/20 to-transparent pointer-events-none border-2 border-sky-200"></div>
                </div>
                <p className="font-bold text-2xl md:text-3xl text-white">Cloud</p>
                <p className="font-bold text-sm text-gray-500">GCP - AWS - Azure</p>
            </div>

            {/* Databases */}
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="relative p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 hover:text-amber-400 transition-all duration-300 hover:scale-105"
                    onMouseEnter={() => setLineColor("bg-amber-400")}
                    onMouseLeave={() => setLineColor("bg-white/20")}
                >
                    <Database width={50} height={50} className="font-bold md:w-16 md:h-16 lg:w-20 lg:h-20" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/20 to-transparent pointer-events-none border-2 border-yellow-500"></div>
                </div>
                <p className="font-bold text-2xl md:text-3xl text-white">Databases</p>
                <p className="font-bold text-sm text-gray-500">SQL - MongoDB</p>
            </div>
        </div>
    );
};

export default Skills;
