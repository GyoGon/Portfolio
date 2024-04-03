import React from 'react';
import '../pages/css/style.css';
import CAF from '../pages/img/CAF.jpg';
import arq from '../pages/img/arquitectura.webp';

const ProjectCard = () => {
    const projectsData = [
        {
            id: 1,
            title: 'CAF Ivaras',
            description: 'En este proyecto trabajé como desarrollador Full Stack, más orientado al Back-end, trabajando con el Stack MERN (MongoDB, Express, React y NodeJS).\n Este proyecto estaba enfocado en la creación de una plataforma de gestión para un gimnasio recién instaurado en mi sede universitaria, Duoc UC. En este proyecto, trabajé en la creación de la base de datos, la creación de los endpoints de la API, la creación de la interfaz de usuario y la conexión de la interfaz con la API.\n Este proyecto fue realizado en un equipo de 5 personas. No se puede navegar por la página web ya que es privada y necesitas hacer la validación de que es un estudiante, pero puedo compartir el repositorio de GitHub.',
            image: CAF,
            link: 'https://caf.ivaras.cl',
        },
        {
            id: 2,
            title: 'Spacio',
            description: 'Este fué el proyecto de mi tesis, trabajé totalmente orientado al Back-end con Golang, me encargué de realizar todas las funcionalidades importantes del proyecto en este ámbito. \n El Proyecto Spacio tenía como objetivo abordar los desafíos de integración dentro de una comunidad estudiantil, proporcionando una plataforma para que los estudiantes interactúen, compartan contenido y colaboren.\n Este proyecto fue realizado en un equipo de 5 personas, y fué un proyecto muy interesante ya que tuve que aprender un nuevo lenguaje de programación en un tiempo muy corto, pero fué una experiencia muy enriquecedora. Además, tuve la oportunidad de trabajar con tecnologías como Docker, MongoDB, Golang, subir contenido a la nube de Cloudinary de forma automática, subir el proyecto a Heroku, entre muchas más cosas.\n El proyecto fué realizado en un tiempo de 6 meses, y fué un proyecto muy interesante y desafiante. Comparto el repositorio de GitHub para que puedan ver el código fuente, la página web no está disponible ya que el proyecto fué entregado a la universidad y no hemos seguido financiando el hosting de heroku, es por eso que adjunto una imagen de la arquitectura.',
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
                        <img className="card-img w-11/12 mt-auto mt-4 mb-4" src={project.image} alt={project.title} />
                        <div className="mt-auto card-link">
                            <a href={project.link} className="card-link bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200">Ver proyecto</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCard;
