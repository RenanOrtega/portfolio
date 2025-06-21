
interface HeroWordProps {
    word: string;
}

const HeroWord = ({ word }: HeroWordProps) => {
    return (
        <div
            className="
                relative 
                py-1 
                text-2xl 
                md:text-4xl 
                font-bold
            "
        >
            <div
                className={`
                    relative 
                    z-10 
                    text-light 
                    px-4 
                    transition-all 
                    duration-700
                `}
            >
                {word}
            </div>

            {/* Canto inferior esquerdo */}
            <div
                className="
                    absolute 
                    top-0 
                    left-0 
                    w-6 
                    h-6 
                    border-t-2 
                    border-l-2 
                    border-primary 
                    z-0
                "
                style={{
                    filter:
                        "drop-shadow(0 0 2px #7c3aed) drop-shadow(0 0 8px #7c3aed) drop-shadow(0 0 16px #7c3aed)",
                }}
            />

            {/* Canto inferior direito */}
            <div
                className="
                    absolute 
                    bottom-0 
                    right-0 
                    w-6 
                    h-6 
                    border-b-2 
                    border-r-2 
                    border-primary 
                    z-0
                "
                style={{
                    filter:
                        "drop-shadow(0 0 2px #7c3aed) drop-shadow(0 0 8px #7c3aed) drop-shadow(0 0 16px #7c3aed)",
                }}
            />
        </div>
    );
};

export default HeroWord;
