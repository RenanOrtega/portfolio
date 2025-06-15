import { Cloud, Database, LucidePencil, Server } from "lucide-react";

const Skills = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-4xl w-full">
                <div className="flex flex-col justify-center items-center gap-2">
                    <LucidePencil width={50} height={50} className="font-bold md:w-16 md:h-16 lg:w-20 lg:h-20 text-blue-500" />
                    <p className="font-bold text-2xl md:text-3xl">Front-end</p>
                    <p className="font-bold text-sm text-gray-500">React</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Server width={50} height={50} className="font-bold md:w-16 md:h-16 lg:w-20 lg:h-20 text-green-500" />
                    <p className="font-bold text-2xl md:text-3xl">Back-end</p>
                    <p className="font-bold text-sm text-gray-500">.NET C# - NodeJS</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Cloud width={50} height={50} className="text-sky-500 font-bold md:w-16 md:h-16 lg:w-20 lg:h-20" />
                    <p className="font-bold text-2xl md:text-3xl">Cloud</p>
                    <p className="font-bold text-sm text-gray-500">GCP - AWS - Azure</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Database width={50} height={50} className="text-amber-500 font-bold md:w-16 md:h-16 lg:w-20 lg:h-20" />
                    <p className="font-bold text-2xl md:text-3xl">Databases</p>
                    <p className="font-bold text-sm text-gray-500">SQL - MongoDB</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;