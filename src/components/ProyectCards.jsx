import React from 'react';
import '../pages/css/style.css';
import CAF from '../pages/img/CAF.jpg';
import arq from '../pages/img/arquitectura.webp';
import { useTranslation } from 'react-i18next';
const ProjectCard = () => {
    const { t } = useTranslation();

    const projectsData = [
        {
            id: 1,
            title: 'CAF Ivaras',
            description: t('project1_text'),
            image: CAF,
            link: 'https://caf.ivaras.cl',
        },
        {
            id: 2,
            title: 'Spacio',
            description: t('project2_text'),
            image: arq,
            link: 'https://github.com/Spacio-app/content-management-microservice',
        },
        // Add more projects as needed
    ];

    return (
        <div className="grid mx-auto grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
            {projectsData.map((project) => (
                <div key={project.id} className="card bg-indigo-600 flex flex-col">
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
                  <a href={project.link} className="card-link bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200">Ver proyecto</a>
                </div>
              </div>
            ))}
        </div>
    );
};

export default ProjectCard;
