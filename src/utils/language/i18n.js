import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {translationSk, translationEn} from './langLibrary'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'sk',
    interpolation: {
      escapeValue: false,
    },
    resources: {
        sk: { translation: translationSk },
        en: { translation: translationEn }
      },
  });

export default i18n;