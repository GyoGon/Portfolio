// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "home": "Home",
          "home_title": "Welcome to My Portfolio!",
          "home_text": "I'm a full-stack developer with a passion for building beautiful and functional websites and applications.",
          "about_me": "About Me",
          "about_me_text": "I'm a full-stack developer with a passion for building beautiful and functional websites and applications.",
          "skills": "Skills",
          "projects": "Projects",

          "contact": "Contact",
          "contact_text": "Ready to work together? Contact me!",
          "english": "ENG",
          "spanish": "ESP",
        }
      },
      es: {
        translation: {
          "home": "Inicio",
          "home_title": "¡Bienvenido a Mi Portafolio!",
          "home_text": "¡Soy un desarrollador full-stack con pasión por construir sitios web y aplicaciones hermosas y funcionales.",
          "about_me": "Sobre Mí",
          "about_me_text": "Soy un desarrollador full-stack con pasión por construir sitios web y aplicaciones hermosas y funcionales.",
          "skills": "Habilidades",
          "projects": "Proyectos",

          "contact": "Contacto",
          "contact_text": "¿Listo para trabajar juntos? ¡Contáctame!",
          "english": "ING",
          "spanish": "ESP",
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