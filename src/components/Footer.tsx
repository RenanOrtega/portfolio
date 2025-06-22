import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            <footer className="w-full mt-auto">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <span className="font-bold text-light">RJO</span>
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="flex flex-col">
                            <p className="font-semibold mb-2 text-light">Portfolio</p>
                            <a href={`#${t('nav.projects')}`}
                                className="text-gray-600 font-semibold hover:text-gray-400 transition-colors">
                                {t('footer.projects')}
                            </a>
                            <a href={`#${t('nav.skills')}`} 
                                className="text-gray-600 font-semibold hover:text-gray-400 transition-colors">
                                {t('footer.skills')}
                            </a>
                            <a href={`#${t('nav.contact')}`}
                                className="text-gray-600 font-semibold hover:text-gray-400 transition-colors">
                                {t('footer.contact')}
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold mb-2 text-light">Connect</p>
                            <a href="mailto:renanortega.dev@gmail.com"
                                className="text-gray-600 font-semibold hover:text-gray-400 transition-colors">
                                Email
                            </a>
                            <a href="https://www.linkedin.com/in/renan-ortega/" target="_blank" rel="noopener noreferrer"
                                className="text-gray-600 font-semibold hover:text-gray-400 transition-colors">
                                LinkedIn
                            </a>
                            <a href="https://github.com/RenanOrtega" target="_blank" rel="noopener noreferrer"
                                className="text-gray-600 font-semibold hover:text-gray-400 transition-colors">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Renan Johny Ortega. Todos os direitos reservados.
                </p>
            </footer>
        </>
    );
}

export default Footer;