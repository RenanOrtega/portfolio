interface HeroWordProps {
    word: string;
}

const HeroWord = ({ word }: HeroWordProps) => {
    return (
        <div className="relative py-1 text-2xl md:text-4xl font-bold text-light px-4">
            {word}
        </div>
    );
};

export default HeroWord;
