import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-[9999] backdrop-blur-md bg-dark/60  flex justify-between items-center px-4 py-3">
            <h1 className="font-bold text-lg text-light">
                Renan<span className="text-xs">®</span>
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-neutral-400">
                <a href={`#${t('nav.projects')}`} className="hover:text-light transition-colors">
                    {t('nav.projects')}
                </a>
                <a href={`#${t('nav.skills')}`} className="hover:text-light transition-colors">
                    {t('nav.skills')}
                </a>
                <a href={`#${t('nav.contact')}`} className="hover:text-light transition-colors">
                    {t('nav.contact')}
                </a>
                <LanguageSwitcher />
            </nav>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-3">
                <LanguageSwitcher />
                <button
                    onClick={toggleMenu}
                    className="text-light hover:text-neutral-300 transition-colors p-2"
                    aria-label="Toggle menu"
                >
                    <svg
                        className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <>
                    <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeMenu} />
                    <nav className="absolute top-full right-0 mt-2 w-48 bg-dark border border-light/20 rounded-lg shadow-lg z-50 md:hidden">
                        <div className="py-2">
                            <a
                                href={`#${t('nav.projects')}`}
                                onClick={closeMenu}
                                className="block px-4 py-3 text-neutral-400 hover:text-light hover:bg-light/10 transition-colors"
                            >
                                {t('nav.projects')}
                            </a>
                            <a
                                href={`#${t('nav.skills')}`}
                                onClick={closeMenu}
                                className="block px-4 py-3 text-neutral-400 hover:text-light hover:bg-light/10 transition-colors"
                            >
                                {t('nav.skills')}
                            </a>
                            <a
                                href={`#${t('nav.contact')}`}
                                onClick={closeMenu}
                                className="block px-4 py-3 text-neutral-400 hover:text-light hover:bg-light/10 transition-colors"
                            >
                                {t('nav.contact')}
                            </a>
                        </div>
                    </nav>
                </>
            )}
        </header>
    );
};

export default Navbar;