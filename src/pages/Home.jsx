import React, { useRef } from 'react';
import './css/style.css';
import me from './img/me.jpg';
// import indexIcons from './img/indexIcons.jsx'
import Header from '../components/Header';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Skills from '../components/Skills.jsx';
import ProjectCard from '../components/ProyectCards.jsx';
import { useTranslation } from 'react-i18next';
const Home = () => {
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  //useRef para hacer scroll a las secciones
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    const navHeight = 80; // Altura de la barra de navegación
    window.scrollTo({ top: ref.current.offsetTop - navHeight, behavior: 'smooth' });
  }


  const { t } = useTranslation();

  return (
    <div className="dark:bg-indigo-950 min-h-screen">
      <Header scrollToHome={() => scrollToHome()} scrollToAbout={() => scrollToRef(aboutRef)} scrollToProjects={() => scrollToRef(projectsRef)} scrollToContact={() => scrollToRef(contactRef)} />
      <main className="container mx-auto px-10 py-10 min-h-screen pt-60 sm:pt-0">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={scrollToHome}>
          <div className="text-center flex flex-col justify-center my-10">
            <h2 className="text-2xl font-bold mb-4 text-red-300">{t('home_title')}</h2>
            <p className="text-white my-5">
              {t('home_text')}
            </p>
          </div>
          <div className="mx-auto text-center">
            <div className="flex justify-center">
              <img src={me} alt="developer" className="w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-auto" />
            </div>
            <div className="flex justify-center space-x-4 mt-10">
              <a href="https://github.com/GyoGon" target="_blank" rel="noopener noreferrer" className="focus:outline-none hover:bg-violet-600">
                <GitHubIcon sx={{ color: '#fff' }} />
              </a>
              <a href="https://www.linkedin.com/in/giovanni-gonzalez13719062001/" target="_blank" rel="noopener noreferrer" className="focus:outline-none hover:bg-violet-600">
                <LinkedInIcon sx={{ color: '#fff' }} />
              </a>
              <a href="mailto:giovannip.gonzalezh@gmail.com" className="focus:outline-none hover:bg-violet-600">
                <EmailIcon sx={{ color: '#fff' }} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Espacio grande para el "About Me" */}


      {/* Sección "About Me" */}

      <section className="container mx-auto px-10 py-10 min-h-screen flex flex-col lg:flex-row" ref={aboutRef} >
        <div className="text-center lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-red-300">{t('about_me')}</h2>
          <p className="text-white">
            {t('about_me_text')}
          </p>
        </div>
        <div className="container mx-auto px-10 py-10 lg:w-1/2">
          {/* Sección "Skills" */}
          <section>
            <h3 className="text-2xl font-bold mb-4 text-red-300 text-center">
              {t('skills')}
            </h3>
            <Skills />
          </section>
        </div>
      </section>


      {/* Sección "Projects" */}
      <section className=" mx-auto px-10 py-10 min-h-screen" ref={projectsRef}>
        <h2 className="text-2xl font-bold mb-4 text-red-300 text-center">
          {t('projects')}
        </h2>
        
          <ProjectCard/>
        
      </section>
      {/* Sección "Contact" */}
      <section className=" mx-auto px-10 py-10 " ref={contactRef}>
        <h2 className="text-2xl font-bold mb-4 text-red-300 text-center">
          {t('contact')}
        </h2>
        <div className="text-center">
          <p className="text-white">
            {t('contact_text')}
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <a href="mailto:giovannip.gonzalezh@gmail.com" className="bg-indigo-600 p-4 rounded-lg text-center text-white">Contact Me</a>
        </div>
      </section>
      <footer className="dark:bg-slate-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-white">2024 Giovanni Gonzalez Portfolio</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
