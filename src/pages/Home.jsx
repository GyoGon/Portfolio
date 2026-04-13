import React, { useRef } from 'react';
import './css/style.css';
import me from './img/giovanni.jpg';
import Header from '../components/Header';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Skills from '../components/Skills.jsx';
import ProjectCard from '../components/ProyectCards.jsx';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

const Home = () => {
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const aboutRef    = useRef(null);
  const projectsRef = useRef(null);
  const contactRef  = useRef(null);

  const scrollToRef = (ref) => {
    const navHeight = 80;
    window.scrollTo({ top: ref.current.offsetTop - navHeight, behavior: 'smooth' });
  };

  const { t } = useTranslation();

  return (
    <div className="dark:bg-indigo-950 min-h-screen">
      <Header
        scrollToHome={() => scrollToHome()}
        scrollToAbout={() => scrollToRef(aboutRef)}
        scrollToProjects={() => scrollToRef(projectsRef)}
        scrollToContact={() => scrollToRef(contactRef)}
      />

      {/* Hero */}
      <main className="mx-auto px-10 min-h-screen flex items-center justify-center">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full pt-20">
          <motion.div
            className="text-center flex flex-col justify-center my-10"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-red-300 leading-tight"
              variants={fadeUp}
            >
              {t('home_title')}
            </motion.h2>
            <motion.p className="text-white my-5 text-lg leading-relaxed" variants={fadeUp}>
              {t('home_text')}
            </motion.p>
          </motion.div>

          <motion.div
            className="mx-auto text-center"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.div className="flex justify-center" variants={fadeIn}>
              <img src={me} alt="developer" className="w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-auto" />
            </motion.div>
            <motion.div className="flex justify-center space-x-4 mt-10" variants={fadeUp}>
              <a href="https://github.com/GyoGon" target="_blank" rel="noopener noreferrer" className="focus:outline-none hover:bg-violet-600 p-2 rounded-full transition-colors duration-200">
                <GitHubIcon sx={{ color: '#fff', fontSize: 28 }} />
              </a>
              <a href="https://www.linkedin.com/in/giovanni-gonzalez13719062001/" target="_blank" rel="noopener noreferrer" className="focus:outline-none hover:bg-violet-600 p-2 rounded-full transition-colors duration-200">
                <LinkedInIcon sx={{ color: '#fff', fontSize: 28 }} />
              </a>
              <a href="mailto:giovannip.gonzalezh@gmail.com" className="focus:outline-none hover:bg-violet-600 p-2 rounded-full transition-colors duration-200">
                <EmailIcon sx={{ color: '#fff', fontSize: 28 }} />
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* About Me */}
      <section className="container mx-auto px-10 py-24 flex flex-col lg:flex-row" ref={aboutRef}>
        <motion.div
          className="text-center lg:w-1/2"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-red-300">{t('about_me')}</h2>
          <p className="text-white text-lg leading-relaxed">{t('about_me_text')}</p>
        </motion.div>

        <motion.div
          className="container mx-auto px-10 py-10 lg:w-1/2"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.15 }}
        >
          <section>
            <h3 className="text-3xl font-bold mb-6 text-red-300 text-center">{t('skills')}</h3>
            <Skills />
          </section>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="mx-auto px-10 py-24" ref={projectsRef}>
        <motion.h2
          className="text-3xl font-bold mb-10 text-red-300 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {t('projects')}
        </motion.h2>
        <ProjectCard />
      </section>

      {/* Contact */}
      <motion.section
        className="mx-auto px-10 py-24"
        ref={contactRef}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-red-300 text-center">{t('contact')}</h2>
        <div className="text-center">
          <p className="text-white text-lg leading-relaxed">{t('contact_text')}</p>
        </div>
        <div className="flex justify-center mt-10">
          <a href="mailto:giovannip.gonzalezh@gmail.com" className="bg-violet-700 hover:bg-violet-600 transition-colors duration-200 p-4 rounded-lg text-center text-white">
            Contact Me
          </a>
        </div>
      </motion.section>

      <footer className="dark:bg-slate-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-white">{t('footer')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
