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
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-full border bg-dark text-light border-light/20 hover:bg-dark/80 hover:border-light/10 transition-all text-sm font-medium min-w-0"
            >
                <currentLangData.flag className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="hidden sm:inline">{currentLangData.label}</span>
                <span className="sm:hidden text-xs font-bold uppercase">
                    {currentLangData.code}
                </span>
                <svg
                    className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 sm:w-full sm:min-w-[160px] bg-dark border border-light/20 rounded-lg shadow-lg overflow-hidden z-50">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => changeLanguage(language.code)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 sm:px-4 sm:py-3 text-left hover:bg-light/10 transition-colors text-sm
                                ${currentLanguage === language.code
                                    ? 'bg-primary/20 text-primary border-l-2 border-primary'
                                    : 'text-light'
                                }`}
                        >
                            <language.flag className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                            <span className="truncate">{language.label}</span>
                            {currentLanguage === language.code && (
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-auto text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default LanguageSwitcher;