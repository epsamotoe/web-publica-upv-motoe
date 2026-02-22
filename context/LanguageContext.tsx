"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import es from "../locales/es.json"
import en from "../locales/en.json"
import fr from "../locales/fr.json"
import de from "../locales/de.json"
import it from "../locales/it.json"

export type Language = "ES" | "EN" | "FR" | "DE" | "IT"

type Translations = Record<string, any>

const dictionaries: Record<Language, Translations> = {
    ES: es,
    EN: en,
    FR: fr,
    DE: de,
    IT: it,
}

interface LanguageContextType {
    currentLang: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [currentLang, setCurrentLang] = useState<Language>("ES")

    // Cargar preferencia de idioma guardada al montar el componente
    useEffect(() => {
        const savedLang = localStorage.getItem("preferredLanguage") as Language
        if (savedLang && Object.keys(dictionaries).includes(savedLang)) {
            setCurrentLang(savedLang)
        }
    }, [])

    // Guardar preferencia de idioma y actualizar el estado
    const setLanguage = (lang: Language) => {
        setCurrentLang(lang)
        localStorage.setItem("preferredLanguage", lang)
    }

    // Función de traducción
    const t = (key: string): string => {
        const keys = key.split(".")
        let value: any = dictionaries[currentLang]

        for (const k of keys) {
            if (value === undefined || value === null) return key
            value = value[k]
        }

        return typeof value === "string" ? value : key
    }

    return (
        <LanguageContext.Provider value={{ currentLang, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
