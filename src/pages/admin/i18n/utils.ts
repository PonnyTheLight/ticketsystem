import { ui, defaultLang} from './ui';
import type {LanguageKeys} from "../@types/lang.ts";

export function getLangFromUrl(url: URL) {
    const [, , lang] = url.pathname.split('/');
    console.log(lang)
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang as "en" | "es";
}

export function useTranslations(lang: "en" | "es") {
    // @ts-ignore
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        // @ts-ignore
        return ui[lang][key] || ui[defaultLang][key];
    }
}