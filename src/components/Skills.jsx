//component skills
import React from 'react';
import '../pages/css/style.css';
import { indexIcons } from '../pages/img/indexIcons.jsx';


const Skills = () => {
    return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-indigo-600 p-4 rounded-lg flex flex-col items-center justify-center text-white">
                <img src={indexIcons.htmlIcon} alt="html" className="w-12 h-12" />
                <p>HTML</p>
              </div>
              <div className="bg-indigo-600 p-4 rounded-lg flex flex-col items-center justify-center text-white">
                <img src={indexIcons.cssIcon} alt="css" className="w-12 h-12" />
                <p>CSS</p>
              </div>
              <div className="bg-indigo-600 p-4 rounded-lg flex flex-col items-center justify-center text-white">
                <img src={indexIcons.javascriptIcon} alt="js" className="w-12 h-12" />
                <p>JavaScript</p>
              </div>
              <div className="bg-indigo-600 p-4 rounded-lg flex flex-col items-center justify-center text-white">
                <img src={indexIcons.reactIcon} alt="react" className="w-12 h-12" />
                <p>ReactJS</p>
              </div>
              <div className="bg-indigo-600 p-4 rounded-lg flex flex-col items-center justify-center text-white">
                <img src={indexIcons.nodeIcon} alt="node" className="w-12 h-12" />
                <p>NodeJS</p>
              </div>
              <div className="bg-indigo-600 p-4 rounded-lg flex flex-col items-center justify-center text-white">
                <img src={indexIcons.expressIcon} alt="express" className="w-12 h-12" />
                <p>ExpressJS</p>
              </div>
              <div className="bg-indigo-600 p-4 rounded-lg flex flex-col items-center justify-center text-white">
                <img src={indexIcons.mongoIcon} alt="mongo" className="w-12 h-12" />
                <p>MongoDB</p>
              </div>
              <div className="bg-indigo-600 p-4 rounded-lg flex flex-col items-center justify-center text-white">
                <img src={indexIcons.pythonIcon} alt="python" className="w-12 h-12" />
                <p>Python</p>
              </div>
              <div className="bg-indigo-600 p-4 rounded-lg flex flex-col items-center justify-center text-white">
                <img src={indexIcons.dockerIcon} alt="docker" className="w-12 h-12" />
                <p>Docker</p>
              </div>
              <div className="bg-indigo-600 p-4 rounded-lg flex flex-col items-center justify-center text-white">
                <img src={indexIcons.goIcon} alt="go" className="w-12 h-12" />
                <p>Go</p>
              </div>
              <div className="bg-indigo-600 p-4 rounded-lg flex flex-col items-center justify-center text-white">
                <img src={indexIcons.mySQLIcon} alt="mySQL" className="w-12 h-12" />
                <p>MySQL</p>
              </div>
              <div className="bg-indigo-600 p-4 rounded-lg flex flex-col items-center justify-center text-white break-words">
                <img src={indexIcons.tailwindIcon} alt="tailwind" className="w-12 h-12" />
                <p>TailwindCSS</p>
              </div>
              <div className="bg-indigo-600 p-4 rounded-lg flex flex-col items-center justify-center text-white">
                <img src={indexIcons.nextIcon} alt="next" className="w-12 h-12" />
                <p>NextJS</p>
              </div>
            </div>
    );
}

export default Skills;