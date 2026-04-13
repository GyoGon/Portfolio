//component skills
import React from 'react';
import '../pages/css/style.css';
import { indexIcons } from '../pages/img/indexIcons.jsx';
import { motion } from 'framer-motion';

const cardClass = "bg-slate-800 border border-indigo-800/50 p-4 rounded-lg flex flex-col items-center justify-center text-white hover:border-indigo-500/70 transition-colors duration-200";

const skills = [
    { icon: indexIcons.javascriptIcon, label: 'JavaScript' },
    { icon: indexIcons.typescriptIcon,  label: 'TypeScript'  },
    { icon: indexIcons.pythonIcon,      label: 'Python'      },
    { icon: indexIcons.goIcon,          label: 'Go'          },
    { icon: indexIcons.nodeIcon,        label: 'Node.js'     },
    { icon: indexIcons.expressIcon,     label: 'Express'     },
    { icon: indexIcons.fastapiIcon,     label: 'FastAPI'     },
    { icon: indexIcons.reactIcon,       label: 'React'       },
    { icon: indexIcons.nextIcon,        label: 'Next.js'     },
    { icon: indexIcons.mongoIcon,       label: 'MongoDB'     },
    { icon: indexIcons.mySQLIcon,       label: 'MySQL'       },
    { icon: indexIcons.firebaseIcon,    label: 'Firebase'    },
    { icon: indexIcons.gcpIcon,         label: 'GCP'         },
    { icon: indexIcons.dockerIcon,      label: 'Docker'      },
    { icon: indexIcons.gitIcon,         label: 'Git'         },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Skills = () => {
    return (
        <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {skills.map(({ icon, label }) => (
                <motion.div key={label} className={cardClass} variants={item}>
                    <img src={icon} alt={label} className="w-12 h-12" />
                    <p>{label}</p>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Skills;
