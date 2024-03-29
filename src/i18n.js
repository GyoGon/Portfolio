// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "About Me": "About Me",
          "I am a passionate developer...": "I am a passionate developer with extensive experience in modern web technologies. I love learning new things and working on challenging projects.",
        }
      },
      es: {
        translation: {
          "About Me": "Sobre mí",
          "I am a passionate developer...": "Soy un desarrollador apasionado con una amplia experiencia en tecnologías web modernas. Me encanta aprender nuevas cosas y trabajar en proyectos desafiantes."
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;