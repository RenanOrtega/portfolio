"use client"

import { PinContainer } from "./ui/3d-pin";
import CardPin from "./ui/card-pin";

const AnimatedPin = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center">
            <PinContainer
                title="/RenanOrtega"
                href="https://github.com/RenanOrtega"
                shadowColor="rgba(168, 85, 247, 0.4)"
            >
                <CardPin
                    title="GitHub"
                    iconPath="github.svg"
                    customColor="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600"
                />
            </PinContainer>
            <PinContainer
                title="/in/renan-ortega"
                href="https://www.linkedin.com/in/renan-ortega/"
                shadowColor="rgba(59, 130, 246, 0.4)"
            >
                <CardPin
                    title="Linkedin"
                    iconPath="linkedin.svg"
                    customColor="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600"
                />
            </PinContainer>
            <PinContainer 
                title="+55 11 95331-8009"
                href="https://wa.me/5511953318009"
                shadowColor="rgba(34, 197, 94, 0.4)"
            >
                <CardPin
                    title="WhatsApp"
                    iconPath="whatsapp.svg"
                    customColor="bg-gradient-to-br from-green-400 via-green-500 to-green-600"
                />
            </PinContainer>
        </div>
    );
}

export default AnimatedPin;