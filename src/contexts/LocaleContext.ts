import { Locale, i18n } from "i18n.config"
import { createContext } from "react"

export const LocaleContext = createContext<Locale>(i18n.defaultLocale)