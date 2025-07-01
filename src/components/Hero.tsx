import { useEffect, useRef, useState } from "react";
import HeroWord from "./ui/hero-word";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const { t } = useTranslation();
    const words = t("hero.words", { returnObjects: true }) as string[];
    const wordRefs = useRef<(HTMLDivElement | null)[]>([]);
    const borderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [words.length]);

    useEffect(() => {
        const activeEl = wordRefs.current[activeIndex];
        const borderEl = borderRef.current;

        if (activeEl && borderEl) {
            const rect = activeEl.getBoundingClientRect();
            const parentRect = activeEl.parentElement?.getBoundingClientRect();

            if (parentRect) {
                const top = rect.top - parentRect.top;
                const left = rect.left - parentRect.left;

                borderEl.style.transform = `translate(${left}px, ${top}px)`;
                borderEl.style.width = `${rect.width}px`;
                borderEl.style.height = `${rect.height}px`;
            }
        }
    }, [activeIndex]);

    return (
        <div className="relative">
            <div className="flex flex-col gap-3 items-center justify-center text-center px-4">
                <h2 className="text-5xl md:text-8xl font-bold text-light">
                    Renan Johny Ortega
                </h2>
                <div className="relative flex lg:gap-10 md:gap-8 gap-4">
                    {/* Borda animada */}
                    <div
                        ref={borderRef}
                        className="absolute border-2 border-primary rounded pointer-events-none transition-all duration-500 ease-in-out z-0"
                        style={{
                            filter:
                                "drop-shadow(0 0 2px #7c3aed) drop-shadow(0 0 8px #7c3aed) drop-shadow(0 0 16px #7c3aed)",
                        }}
                    />

                    {/* Palavras */}
                    {words.map((word, index) => (
                        <div
                            key={word}
                            ref={(el) => {
                                wordRefs.current[index] = el;
                            }}
                            className={`transition-all duration-500 z-10 ${activeIndex === index ? "blur-none" : "blur-sm"
                                }`}
                        >
                            <HeroWord word={word} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
