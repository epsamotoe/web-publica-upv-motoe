"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { useLanguage, Language } from "@/context/LanguageContext"

export function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false)
    const { currentLang, setLanguage } = useLanguage()

    const languages: { code: Language; name: string }[] = [
        { code: "ES", name: "Español" },
        { code: "EN", name: "Inglés" },
        { code: "FR", name: "Francés" },
        { code: "DE", name: "Alemán" },
        { code: "IT", name: "Italiano" },
    ]

    const handleLanguageSelect = (code: Language) => {
        setLanguage(code)
        setIsOpen(false)
    }

    return (
        <div className="relative">
            {/* Botón Principal (Trigger) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-transparent text-neutral-300 hover:text-white transition-colors duration-200 rounded-md"
            >
                <Globe className="w-5 h-5" />
                <span className="font-medium">{currentLang}</span>
            </button>

            {/* Menú Desplegable (Dropdown) */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-neutral-900 border border-white/10 rounded-lg shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="py-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageSelect(lang.code)}
                                className="w-full text-left px-4 py-2 transition-colors duration-150 hover:bg-neutral-800 flex items-center justify-between group"
                            >
                                <span
                                    className={`transition-colors text-sm ${currentLang === lang.code
                                        ? "text-[#00cc88] font-medium"
                                        : "text-neutral-300 group-hover:text-neutral-200"
                                        }`}
                                >
                                    {lang.name}
                                </span>
                                <span
                                    className={`text-xs ${currentLang === lang.code
                                        ? "text-[#00cc88] font-medium"
                                        : "text-neutral-500 group-hover:text-neutral-400"
                                        }`}
                                >
                                    {lang.code}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
