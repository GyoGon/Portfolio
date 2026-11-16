import React from 'react';
import '../pages/css/style.css';
import blackay from '../pages/img/blackay.svg';
import gastos from '../pages/img/gestion-gastos.svg';
import comuniapp from '../pages/img/comuniapp.svg';
import caf from '../pages/img/caf.svg';
import spacio from '../pages/img/spacio.svg';
import opm from '../pages/img/opm.svg';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

const item = {
    hidden: { opacity: 0, y: 50 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ProjectCard = () => {
    const { t } = useTranslation();

    const projectsData = [
        {
            id: 1,
            title: 'Backend Developer – Blackay',
            description: t('blackay_text'),
            image: blackay,
            link: null,
        },
        {
            id: 6,
            title: 'OPM – Taller Mecánico',
            description: t('opm_text'),
            image: opm,
            link: null,
        },
        {
            id: 2,
            title: 'Gestión de Gastos',
            description: t('gastos_text'),
            image: gastos,
            link: 'https://github.com/GyoGon/Gestion-de-Gastos',
        },
        {
            id: 3,
            title: 'ComuniApp',
            description: t('comuniapp_text'),
            image: comuniapp,
            link: 'https://github.com/GyoGon/comuniApp',
        },
        {
            id: 4,
            title: 'CAF Ivaras',
            description: t('caf_text'),
            image: caf,
            link: null,
        },
        {
            id: 5,
            title: 'Spacio',
            description: t('spacio_text'),
            image: spacio,
            link: null,
        },
        // Add more projects as needed
    ];

    return (
        <motion.div
            className="grid mx-auto grid-cols-1 md:grid-cols-2 gap-4 justify-items-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
        >
            {projectsData.map((project) => (
                <motion.div key={project.id} className="card bg-slate-800 border border-indigo-800/50 flex flex-col" variants={item}>
                    <div className="card-header">
                        <h2>{project.title}</h2>
                    </div>
                    <div className="card-body flex-grow">
                        {project.description.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <img className="card-img w-11/12 mx-auto mt-4 mb-4" src={project.image} alt={project.title} />
                    <div className="mt-auto card-link">
                        {project.link
                            ? <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link bg-violet-700 hover:bg-violet-600 transition-colors duration-200">Ver proyecto</a>
                            : <span className="text-white text-sm opacity-60">{t('private_project')}</span>
                        }
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ProjectCard;
