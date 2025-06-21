import { useState } from "react";
import HeroWord from "./ui/hero-word";

const words = ["Build", "Code", "Launch"];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = (index: number) => {
        setHoverIndex(null);
        setActiveIndex(index);
    };

    return (
        <div className="flex flex-col gap-3 items-center justify-center text-center px-4">
            <h2 className="text-5xl md:text-8xl font-bold text-light">
                Renan Johny Ortega
            </h2>
            <div className="flex gap-10">
                {words.map((word, index) => {
                    const isActive = hoverIndex !== null ? hoverIndex === index : activeIndex === index;

                    return (
                        <div
                            key={word}
                            className={`transition-all ${
                                isActive ? "blur-none" : "blur-sm"
                            }`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <HeroWord word={word} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Hero;
