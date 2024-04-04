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
          "home_text": "Hi! I am Giovanni Gonzalez, Full Stack Developer. \n A dedicated and inquisitive professional with a relentless commitment to continuous learning.My ability to thrive within collaborative teams, foster the exchange of innovative ideas, and facilitate consensus-driven solutions underscores my expertise. I approach challenges with unwavering enthusiasm, consistently seeking opportunities for personal and professional growth.",
          "about_me": "About Me",
          "about_me_text": "I consider myself a very passionate person about technology and programming, I love learning new things and facing challenges. I am a very proactive person and I like to work in a team, since I believe that collaboration is the key to success. I consider myself a very responsible person and committed to my work, I always seek excellence in everything I do. I love learning new things and facing challenges, since I believe that it is the best way to grow and improve as a person and professional.",
          "skills": "Skills",
          "projects": "Projects",
          "project1_text": "In this project I worked as a Full Stack developer, more oriented to the Back-end, working with the MERN Stack (MongoDB, Express, React and NodeJS).\n This project was focused on the creation of a management platform for a newly established gym at the institute where I studied, Duoc UC. In this project, I worked on the creation of the database, the creation of the API endpoints, the connection of the interface with the API, among other functionalities of the project, such as an hour agenda, a limit of students per hour, automatic customizable reports exported in excel, routines, among other tasks.\n This project was carried out in a team of 5 people, which varied according to the duration of their practice, I was in almost the entire process since I had to complete two practices, which lasted a total of approximately 6 months. You cannot navigate the website since you need to validate that you are a student, but I can share the GitHub repository, I also attach the link to the page.",

          "project2_text": "This was my thesis project, I worked totally oriented to the Back-end with Golang, I was in charge of carrying out all the important functionalities of the project in this area. \n The Spacio Project aimed to address the challenges of integration within a student community, providing a platform for students to interact, share content and collaborate.\n This project was carried out in a team of 5 people, and it was a very interesting project since I had to learn a new programming language in a very short time, but it was a very enriching experience. In addition, I had the opportunity to work with technologies such as Docker, MongoDB, Golang, upload content to the Cloudinary cloud automatically, upload the project to Heroku, among many other things.\n The project was carried out in a time of 6 months, and it was a very interesting and challenging project. I share the GitHub repository so you can see the source code, the website is not available since the project was delivered to the university and we have not continued financing the heroku hosting, that's why I attach an image of the architecture.",
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
          "home_text": " Hola!, soy Giovanni Gonzalez, Desarrollador Full Stack. Un profesional dedicado e inquisitivo con un compromiso inquebrantable con el aprendizaje continuo. Mi capacidad para prosperar dentro de equipos colaborativos, fomentar el intercambio de ideas innovadoras y facilitar soluciones basadas en el consenso subraya mi experiencia. Abordo los desafíos con entusiasmo inquebrantable, buscando constantemente oportunidades de crecimiento personal y profesional.",
          "about_me": "Sobre Mí",
          "about_me_text": "Me considero una persona muy apasionada por la tecnología y la programación, me encanta aprender cosas nuevas y enfrentar desafíos. Soy una persona muy proactiva y me gusta trabajar en equipo, ya que creo que la colaboración es la clave para el éxito. Me considero una persona muy responsable y comprometida con mi trabajo, siempre busco la excelencia en todo lo que hago. Me encanta aprender cosas nuevas y enfrentar desafíos, ya que creo que es la mejor forma de crecer y mejorar como persona y profesional.",
          "skills": "Habilidades",
          "projects": "Proyectos",
          "project1_text": "En este proyecto trabajé como desarrollador Full Stack, más orientado al Back-end, trabajando con el Stack MERN (MongoDB, Express, React y NodeJS).\n Este proyecto estaba enfocado en la creación de una plataforma de gestión para un gimnasio recién instaurado en la sede del instituto donde estudié, Duoc UC. En este proyecto, trabajé en la creación de la base de datos, la creación de los endpoints de la API, la conexión de la interfaz con la API, entre otras funcionalidades propias del proyecto, como agenda de horas, límite de alumnos por hora, informes personalizables automáticos exportados en excel, rutinas, entre otras tareas.\n Este proyecto fue realizado en un equipo de 5 personas, las cuales fueron variando según les duraba la práctica, yo estuve en casi todo el proceso ya que debía completar dos prácticas, las cuales hacían una duración total de aproximadamente 6 meses. No se puede navegar por la página web ya que se necesita hacer la validación de que es un estudiante, pero puedo compartir el repositorio de GitHub, igualmente adjunto el link a la página.",

          "project2_text": "Este fué el proyecto de mi tesis, trabajé totalmente orientado al Back-end con Golang, me encargué de realizar todas las funcionalidades importantes del proyecto en este ámbito. \n El Proyecto Spacio tenía como objetivo abordar los desafíos de integración dentro de una comunidad estudiantil, proporcionando una plataforma para que los estudiantes interactúen, compartan contenido y colaboren.\n Este proyecto fue realizado en un equipo de 5 personas, y fué un proyecto muy interesante ya que tuve que aprender un nuevo lenguaje de programación en un tiempo muy corto, pero fué una experiencia muy enriquecedora. Además, tuve la oportunidad de trabajar con tecnologías como Docker, MongoDB, Golang, subir contenido a la nube de Cloudinary de forma automática, subir el proyecto a Heroku, entre muchas más cosas.\n El proyecto fué realizado en un tiempo de 6 meses, y fué un proyecto muy interesante y desafiante. Comparto el repositorio de GitHub para que puedan ver el código fuente, la página web no está disponible ya que el proyecto fué entregado a la universidad y no hemos seguido financiando el hosting de heroku, es por eso que adjunto una imagen de la arquitectura.",

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