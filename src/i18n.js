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
          "home_title": "Hi, I'm Giovanni Gonzalez",
          "home_text": "Full Stack Developer with 1 year of professional experience, graduated in Computer Engineering from Duoc UC. I specialize in scalable backend development, microservices architecture, and cloud deployments on GCP. I've worked on real-time data processing systems, async messaging workflows, and AI-powered event validation using YOLO and Roboflow. Self-taught by nature, collaborative by choice — always looking to build robust, well-structured solutions. English B2 · Native Spanish.",
          "about_me": "About Me",
          "about_me_text": "I'm a curious and self-taught developer who genuinely enjoys understanding how things work under the hood. I like building my own projects, learning new technologies at my own pace, and growing both technically and as a person. I look for challenges that push me to sharpen my skills and contribute real solutions in collaborative, dynamic environments. Outside of work, I value personal balance — whether that's working out, exploring new hobbies, or just taking care of myself.",
          "skills": "Skills",
          "projects": "Projects",
          "project1_text": "In this project I worked as a Full Stack developer, more oriented to the Back-end, working with the MERN Stack (MongoDB, Express, React and NodeJS).\n This project was focused on the creation of a management platform for a newly established gym at the institute where I studied, Duoc UC. In this project, I worked on the creation of the database, the creation of the API endpoints, the connection of the interface with the API, among other functionalities of the project, such as an hour agenda, a limit of students per hour, automatic customizable reports exported in excel, routines, among other tasks.\n This project was carried out in a team of 5 people, which varied according to the duration of their practice, I was in almost the entire process since I had to complete two practices, which lasted a total of approximately 6 months. You cannot navigate the website since you need to validate that you are a student, but I can share the GitHub repository, I also attach the link to the page.",

          "spacio_text": "Thesis project · Duoc UC · 2023\n\nContent management microservice for a collaborative educational platform.\nGo 1.21 + Fiber v2 with clean layered architecture.\nMulti-type content: courses, posts, files and auto-graded tests.\nSocial feed with nested comments and rating system.\nCloudinary for video, image and file storage via CDN.\nMongoDB Atlas · Dockerized with multi-stage build.",
          "caf_text": "Internship · Duoc UC · 2023\n\nREST API for a gym management system at Duoc UC's physical conditioning center.\nStudent registration and JWT authentication with role-based access (Student, Instructor, Admin).\nSession scheduling with capacity limits and reservation system.\nAttendance tracking via traditional reservations and biometric fingerprint.\nWorkout routines with exercises, muscle groups and weekly schedule.\nBody composition metrics tracking (BMI, body fat %, muscle %).\nExcel report generation with XLSX.\nBuilt with Node.js, Express, MongoDB and Mongoose.",
          "comuniapp_text": "Personal project · Full Stack\n\nREST API and mobile app for community interaction.\nBackend with Node.js, Express 5, MySQL, JWT auth and refresh tokens.\nSwagger documentation for all endpoints.\nMobile client built with Expo (React Native), expo-router and Zustand.\nFeatures: posts feed, user profiles, categories, geolocation and search.\nDockerized with docker-compose (API + MySQL).",
          "blackay_text": "June 2024 – Present\n\nModular backend for a fleet management SaaS platform.\nMulti-tenant architecture with Firestore and Firebase Auth.\nNode.js (JS/TS) REST API + Go microservices with Pub/Sub (circuit breaker, worker pool).\nJob scheduling with Cloud Scheduler and Redis-based task queuing.\nIntegration with telematics providers (Movon, Surfsight, Mitac, Flespi).\nAI event validation with FastAPI, YOLO and Roboflow.\nReal-time Firestore to Algolia sync via Cloud Functions.\nDeployment on GCP (Cloud Run, Cloud Functions, Cloud Scheduler).",
          "gastos_text": "Personal project · 2024\n\nPersonal expense tracker for Santander Chile credit card statements.\nDual-format parser: handles copy-paste from online portal and PDF statements.\nOrganizes transactions by billing period with accumulated debt tracking.\nClose periods to archive them and reopen for corrections.\nDuplicate detection on import.\nBuilt with Next.js 15 (App Router), SQLite, TypeScript and Tailwind CSS.",
          "private_project": "Private project",
          "contact": "Contact",
          "contact_text": "Ready to work together? Contact me!",
          "footer": "2026 Giovanni Gonzalez Portfolio",
          "english": "ENG",
          "spanish": "ESP",
        }
      },
      es: {
        translation: {
          "home": "Inicio",
          "home_title": "Hola, soy Giovanni Gonzalez",
          "home_text": "Desarrollador Full Stack con 1 año de experiencia profesional, titulado en Ingeniería en Informática por Duoc UC. Me especializo en desarrollo backend escalable, arquitectura de microservicios y despliegue en GCP. He trabajado en sistemas de procesamiento de datos en tiempo real, flujos asíncronos con mensajería y validación de eventos con IA usando YOLO y Roboflow. Autodidacta por naturaleza, colaborativo por elección — siempre buscando construir soluciones técnicas robustas y bien estructuradas. Inglés B2 · Español nativo.",
          "about_me": "Sobre Mí",
          "about_me_text": "Soy una persona curiosa y autodidacta que disfruta entender cómo funcionan las cosas por dentro. Me gusta construir proyectos propios, aprender nuevas tecnologías a mi ritmo y crecer tanto en lo técnico como en lo personal. Busco desafíos que me permitan perfeccionar mis habilidades y aportar soluciones reales en entornos colaborativos y dinámicos. Fuera del trabajo, valoro el equilibrio personal: el ejercicio, los hobbies y el autocuidado.",
          "skills": "Habilidades",
          "projects": "Proyectos",
          "project1_text": "En este proyecto trabajé como desarrollador Full Stack, más orientado al Back-end, trabajando con el Stack MERN (MongoDB, Express, React y NodeJS).\n Este proyecto estaba enfocado en la creación de una plataforma de gestión para un gimnasio recién instaurado en la sede del instituto donde estudié, Duoc UC. En este proyecto, trabajé en la creación de la base de datos, la creación de los endpoints de la API, la conexión de la interfaz con la API, entre otras funcionalidades propias del proyecto, como agenda de horas, límite de alumnos por hora, informes personalizables automáticos exportados en excel, rutinas, entre otras tareas.\n Este proyecto fue realizado en un equipo de 5 personas, las cuales fueron variando según les duraba la práctica, yo estuve en casi todo el proceso ya que debía completar dos prácticas, las cuales hacían una duración total de aproximadamente 6 meses. No se puede navegar por la página web ya que se necesita hacer la validación de que es un estudiante, pero puedo compartir el repositorio de GitHub, igualmente adjunto el link a la página.",

          "spacio_text": "Proyecto de tesis · Duoc UC · 2023\n\nMicroservicio de gestión de contenido para una plataforma educativa colaborativa.\nGo 1.21 + Fiber v2 con arquitectura limpia en capas.\nContenido multi-tipo: cursos, posts, archivos y tests con corrección automática.\nFeed social con comentarios anidados y sistema de valoraciones.\nCloudinary para almacenamiento de video, imágenes y archivos vía CDN.\nMongoDB Atlas · Dockerizado con build multi-etapa.",

          "caf_text": "Práctica profesional · Duoc UC · 2023\n\nREST API para sistema de gestión de un centro de acondicionamiento físico en Duoc UC.\nRegistro de alumnos y autenticación JWT con acceso basado en roles (Alumno, Instructor, Admin).\nAgenda de sesiones con límite de capacidad y sistema de reservas.\nControl de asistencia mediante reservas tradicionales y huella biométrica.\nRutinas de ejercicio con ejercicios, grupos musculares y programación semanal.\nSeguimiento de métricas corporales (IMC, % grasa corporal, % muscular).\nGeneración de reportes en Excel con XLSX.\nDesarrollado con Node.js, Express, MongoDB y Mongoose.",
          "comuniapp_text": "Proyecto personal · Full Stack\n\nREST API y app móvil para interacción comunitaria.\nBackend con Node.js, Express 5, MySQL, autenticación JWT y refresh tokens.\nDocumentación Swagger para todos los endpoints.\nCliente móvil con Expo (React Native), expo-router y Zustand.\nFuncionalidades: feed de posts, perfiles, categorías, geolocalización y búsqueda.\nDockerizado con docker-compose (API + MySQL).",
          "blackay_text": "Junio 2024 – Presente\n\nBackend modular para una plataforma SaaS de gestión de flotas.\nArquitectura multi-tenant con Firestore y Firebase Auth.\nAPI REST en Node.js (JS/TS) + microservicios en Go con Pub/Sub (circuit breaker, worker pool).\nProgramación de tareas con Cloud Scheduler y encolamiento con Redis.\nIntegración con proveedores telemáticos (Movon, Surfsight, Mitac, Flespi).\nValidación de eventos con IA usando FastAPI, YOLO y Roboflow.\nSincronización Firestore a Algolia en tiempo real vía Cloud Functions.\nDespliegue en GCP (Cloud Run, Cloud Functions, Cloud Scheduler).",
          "gastos_text": "Proyecto personal · 2024\n\nRastreador de gastos de tarjeta de crédito Santander Chile.\nParser dual: soporta copy-paste desde el portal online y desde cartolas PDF.\nOrganiza transacciones por período de facturación con seguimiento de deuda acumulada.\nCierre de períodos para archivarlos y reapertura para correcciones.\nDetección de duplicados en la importación.\nDesarrollado con Next.js 15 (App Router), SQLite, TypeScript y Tailwind CSS.",
          "private_project": "Proyecto privado",
          "contact": "Contacto",
          "contact_text": "¿Listo para trabajar juntos? ¡Contáctame!",
          "footer": "2026 Giovanni Gonzalez Portafolio",
          "english": "ENG",
          "spanish": "ESP",
        }
      }

    },
    lng: "es",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;