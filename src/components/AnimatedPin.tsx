"use client"

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
                    iconPath="github.svg"
                    customColor="bg-light"
                />
            </PinContainer>
            <PinContainer
                title="/in/renan-ortega"
                href="https://www.linkedin.com/in/renan-ortega/"
            >
                <CardPin
                    title="Linkedin"
                    iconPath="linkedin.svg"
                    customColor="bg-light"
                />
            </PinContainer>
            <PinContainer 
                title="+55 11 95331-8009"
                href="https://wa.me/5511953318009">
                <CardPin
                    title="WhatsApp"
                    iconPath="whatsapp.svg"
                    customColor="bg-light"
                />
            </PinContainer>
        </div>
    );
}

export default AnimatedPin;