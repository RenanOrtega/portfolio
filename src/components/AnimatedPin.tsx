"use client"

import GitHubIcon from "../assets/github";
import LinkedInIcon from "../assets/linkedin";
import WhatsAppIcon from "../assets/whatsapp";
import { PinContainer } from "./ui/3d-pin";
import CardPin from "./ui/card-pin";

const AnimatedPin = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center">
            <PinContainer
                title="/RenanOrtega"
                href="https://github.com/RenanOrtega"
            >
                <CardPin
                    title="GitHub"
                    icon={GitHubIcon}
                    customColor="bg-dark text-light"
                />
            </PinContainer>
            <PinContainer
                title="/in/renan-ortega"
                href="https://www.linkedin.com/in/renan-ortega/"
            >
                <CardPin
                    title="Linkedin"
                    icon={LinkedInIcon}
                    customColor="bg-dark text-light"
                />
            </PinContainer>
            <PinContainer 
                title="+55 11 95331-8009"
                href="https://wa.me/5511953318009">
                <CardPin
                    title="WhatsApp"
                    icon={WhatsAppIcon}
                    customColor="bg-dark text-light"
                />
            </PinContainer>
        </div>
    );
}

export default AnimatedPin;