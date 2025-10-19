import './Skills.css'
import { motion } from 'framer-motion';

function Skills () {
    return (
        <>
        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
        <div className='languagesBox'>
            <p className='languagesLabel'>Programming languages:</p>
            <p className='languagesText'> C/C++, Java, Python, SQL, PostgreSQL, MySQL, Bash, MongoDB, HTML, CSS, Javascript.</p>
        </div>
        <div className='languagesBox'>
            <p className='languagesLabel'>Known tools:</p>
            <p className='languagesText'> Git, Github, Jupyter, GNU/Linux distributions, MatplotLib, Pandas, NumPy.</p>
        </div>
        <div className='languagesBox'>
            <p className='languagesLabel'>Expertice Areas:</p>
            <p className='languagesText'> Scrum, Data Analysis, Equipment maintenance.</p>
        </div>
        </motion.div>
        </>
    )
}

export default Skills;