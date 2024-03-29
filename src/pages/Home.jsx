import React, { useRef } from 'react';
import './css/style.css';
import me from './img/me.jpg';
// import indexIcons from './img/indexIcons.jsx'
import Header from '../components/Header';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Skills from '../components/Skills.jsx';

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
  // const estilo = {
  //   backgroundImage: "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjk0YWRwbWZrYWM1czZ4dWthYXY2czJhYWx2ZmswcDVvc29iczB2dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ov9k1173PdfJWRsoE/giphy.gif')",
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   opacity: 0.5
  // };

  return (
    <div className="dark:bg-indigo-950 min-h-screen">
      <Header scrollToHome={() => scrollToHome()} scrollToAbout={() => scrollToRef(aboutRef)} scrollToProjects={() => scrollToRef(projectsRef)} scrollToContact={() => scrollToRef(contactRef)} />
      <main className="container mx-auto px-10 py-10 min-h-screen">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={scrollToHome}>
          <div className="text-center flex flex-col justify-center my-10">
            <h2 className="text-2xl font-bold mb-4 text-red-300">Welcome to My Portfolio!</h2>
            <p className="text-white my-5">
              I'm a full-stack developer with a passion for building beautiful and functional websites and applications.
            </p>
          </div>
          <div className="mx-auto text-center">
            <div className="flex justify-center">
              <img src={me} alt="developer" className="w-96 h-96 rounded-full bg-auto" />
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
          <h2 className="text-2xl font-bold mb-4 text-red-300">{t('About Me')}</h2>
          <p className="text-white">
            {t('I am a passionate developer with extensive experience in modern web technologies. I love learning new things and working on challenging projects.')}
          </p>
        </div>
        <div className="container mx-auto px-10 py-10 lg:w-1/2">
          {/* Sección "Skills" */}
          <section>
            <h3 className="text-2xl font-bold mb-4 text-red-300">Skills</h3>
            <Skills />
          </section>
        </div>
      </section>


      {/* Sección "Projects" */}
      <section className=" mx-auto px-10 py-10 min-h-screen" ref={projectsRef}>
        <h2 className="text-2xl font-bold mb-4 text-red-300 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-indigo-600 p-4 rounded-lg text-center text-white">Project 1</div>
          <div className="bg-indigo-600 p-4 rounded-lg text-center text-white">Project 2</div>
          <div className="bg-indigo-600 p-4 rounded-lg text-center text-white">Project 3</div>
          <div className="bg-indigo-600 p-4 rounded-lg text-center text-white">Project 4</div>
        </div>
      </section>
      {/* Sección "Contact" */}
      <section className=" mx-auto px-10 py-10 min-h-screen" ref={contactRef}>
        <h2 className="text-2xl font-bold mb-4 text-red-300 text-center">Contact</h2>
        <div className="text-center">
          <p className="text-white">¿Listo para trabajar juntos? ¡Contáctame!</p>
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-indigo-600 p-4 rounded-lg text-center text-white">Contact Me</button>
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
