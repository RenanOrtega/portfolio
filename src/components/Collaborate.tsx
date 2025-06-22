import { useTranslation } from "react-i18next";
import GitHubIcon from "../assets/github";
import LinkedInIcon from "../assets/linkedin";
import WhatsAppIcon from "../assets/whatsapp";
import AnimatedPin from "./AnimatedPin";
import MobileSocialMedia from "./ui/mobile-social-media";

const Collaborate = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col justify-center gap-5 items-center py-30">
            <h3 className="text-4xl font-bold text-primary">{t('collaborate.title')}</h3>
            <p className="text-dark text-3xl text-center">
                {t('collaborate.subTitle')}
            </p>
            <div className="flex flex-col gap-5 items-center justify-center pt-5">
                <div className="hidden md:block">
                    <AnimatedPin />
                </div>
            </div>
            <div className="flex flex-col items-center gap-10 md:hidden w-full pt-5">
                <MobileSocialMedia
                    title="GitHub"
                    imageSize={25}
                    url="https://github.com/RenanOrtega"
                    icon={GitHubIcon}
                />
                <MobileSocialMedia
                    title="Linkedin"
                    imageSize={25}
                    url="https://www.linkedin.com/in/renan-ortega/"
                    icon={LinkedInIcon}
                />
                <MobileSocialMedia
                    title="WhatsApp"
                    imageSize={25}
                    url="https://wa.me/5511953318009"
                    icon={WhatsAppIcon}
                />
            </div>
        </div>
    );
}

export default Collaborate;