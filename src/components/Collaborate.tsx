import AnimatedPin from "./AnimatedPin";
import { Button } from "./ui/moving-border";

const Collaborate = () => {
    return (
        <div className="flex flex-col justify-center gap-5 items-center py-30">
            <h3 className="text-4xl font-bold text-white">Let's collaborate.</h3>
            <p className="text-gray-500 text-3xl text-center">
                Get in touch for projects or partnerships.
            </p>
            <Button>
                Social Medias
            </Button>
            <AnimatedPin />
        </div>
    );
}

export default Collaborate;