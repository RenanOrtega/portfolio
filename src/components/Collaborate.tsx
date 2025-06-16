import AnimatedPin from "./AnimatedPin";
import MobileSocialMedia from "./ui/mobile-social-media";
import { Button } from "./ui/moving-border";

const Collaborate = () => {
    return (
        <div className="flex flex-col justify-center gap-5 items-center py-30">
            <h3 className="text-4xl font-bold text-white">Let's collaborate.</h3>
            <p className="text-gray-500 text-3xl text-center">
                Get in touch for projects or partnerships.
            </p>
            <div className="pb-5">
                <Button
                    borderRadius="0"
                >
                    Social Medias
                </Button>
            </div>

            {/* Computador / Telas maiores */}
            <div className="hidden md:block">
                <AnimatedPin />
            </div>

            {/* Mobile */}
            <div className="flex flex-col items-center gap-10 md:hidden w-full ">
                <MobileSocialMedia
                    title="GitHub"
                    imagePath="github.svg"
                    gradient="purple"
                    imageSize={25}
                    url="https://github.com/RenanOrtega"
                />
                <MobileSocialMedia
                    title="Linkedin"
                    imagePath="linkedin.svg"
                    gradient="blue"
                    imageSize={25}
                    url="https://www.linkedin.com/in/renan-ortega/"
                />
                <MobileSocialMedia
                    title="WhatsApp"
                    imagePath="whatsapp.svg"
                    gradient="green"
                    imageSize={25}
                    url="https://wa.me/5511953318009"
                />
            </div>
        </div>
    );
}

export default Collaborate;