"use client"

import { PinContainer } from "./ui/3d-pin";
import CardPin from "./ui/card-pin";

const AnimatedPin = () => {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-center">
            <PinContainer
                title="/RenanOrtega"
                href="https://github.com/RenanOrtega"
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
            >
                <CardPin
                    title="Linkedin"
                    iconPath="linkedin.svg"
                    customColor="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600"
                />
            </PinContainer>
            <PinContainer 
                title="+55 11 95331-8009"
                href="https://wa.me/5511953318009">
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