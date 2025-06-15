import { FlipWords } from "./ui/flip-words";

const Hero = () => {
    const words = ["Design.", "Develop.", "Inspire."];

    return (
        <div className="flex flex-col gap-3 items-center justify-center text-center px-4">
            <h2 id="teste" className="text-4xl md:text-6xl font-bold text-white">
                Renan Johny Ortega
            </h2>
            <div className="p-2 w-50 md:w-70 text-4xl md:text-6xl bg-white font-bold">
                <FlipWords words={words} />
            </div>
        </div>
    );
};

export default Hero;