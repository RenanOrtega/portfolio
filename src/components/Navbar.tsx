import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <header className="flex justify-between items-center">
            <h1 className="font-bold text-lg text-light">Renan<span className="text-xs">®</span></h1>
            <nav className="flex items-center gap-8 text-neutral-400">
                <a href={`#${t('nav.projects')}`} className="hover:text-light">{t('nav.projects')}</a>
                <a href={`#${t('nav.skills')}`} className="hover:text-light">{t('nav.skills')}</a>
                <a href={`#${t('nav.contact')}`} className="hover:text-light">{t('nav.contact')}</a>
                <LanguageSwitcher />
            </nav>
        </header>
    );
}

export default Navbar;