import { EnumUserLanguage } from "../enums/user-language";

export const mapI18nToUserLanguage = (lang?: string): EnumUserLanguage =>
  lang?.toLowerCase().startsWith("fr")
    ? EnumUserLanguage.FR
    : EnumUserLanguage.EN;

export const mapUserLanguageToI18n = (
  language?: EnumUserLanguage,
): "fr" | "en" => (language === EnumUserLanguage.FR ? "fr" : "en");
