import 'server-only'
import type { Locale } from '../types/i18n.types'

const dictionaries = {
  en: () => import('@/public/locales/en/common.json').then(module => module.default),
  es: () => import('@/public/locales/es/common.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
