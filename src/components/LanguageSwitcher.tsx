import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import USAIcon from '../assets/usa';
import BrazilIcon from '../assets/brasil';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const currentLanguage = i18n.language;

    const languages = [
        { code: 'pt', label: 'Português', flag: BrazilIcon },
        { code: 'en', label: 'English', flag: USAIcon }
    ];

    const currentLangData = languages.find(lang => lang.code === currentLanguage) || languages[0];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-full border bg-dark text-light border-light/20 hover:bg-dark/80 hover:border-light/10 transition-all text-sm font-medium"
            >
                <currentLangData.flag className="w-5 h-5" />
                <span>{currentLangData.label}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-full min-w-[160px] bg-dark border border-light/20 rounded-lg shadow-lg overflow-hidden z-10">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => changeLanguage(language.code)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-light/10 transition-colors text-sm
                                ${currentLanguage === language.code
                                    ? 'bg-primary/20 text-primary border-l-2 border-primary'
                                    : 'text-light'
                                }`}
                        >
                            <language.flag className="w-5 h-5" />
                            <span>{language.label}</span>
                            {currentLanguage === language.code && (
                                <svg className="w-4 h-4 ml-auto text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {/* Overlay para fechar ao clicar fora */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default LanguageSwitcher;
