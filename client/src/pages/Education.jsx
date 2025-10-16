import './Education.css';
import { motion } from 'framer-motion';

function Education () {
    return (
        <>
        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <p className='educationLabel'>Educative Institutions</p>
            <div className='boxEducation'>
                <p className='educationName'>Systems Engineering</p>
                <p className='educationDate'>03/2022 - Present</p>
                <p className='educationDescription'>Universidad Nacional del Centro de la provincia de Buenos Aires. Tandil.<br />Currently in the fourth year. (+70% of subjects passed).</p>
            </div>
            <div className='boxEducation'>
                <p className='educationName'>Secondary Education</p>
                <p className='educationDate'>03/2016 - 12/2021</p>
                <p className='educationDescription'>Instituto Secundario Saint Exupery. Buenos Aires. Miramar.<br />Bachiller of Natural Sciences.</p>
            </div>

            <p className='educationLabel'>Certifications</p>
            <div className='boxEducation'>
                <p className='educationName'>Certification #1</p>
                <p className='educationDate'>MM/YYYY</p>
                <p className='educationDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod augue in mi eleifend, sed maximus erat lobortis.</p>
            </div>
            <div className='boxEducation'>
                <p className='educationName'>Certification #2</p>
                <p className='educationDate'>MM/YYYY</p>
                <p className='educationDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod augue in mi eleifend, sed maximus erat lobortis.</p>
            </div>

            <p className='educationLabel'>Language Certifications</p>
            <div className='boxEducation'>
                <p className='educationName'>Certification #1</p>
                <p className='educationDate'>MM/YYYY</p>
                <p className='educationDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod augue in mi eleifend, sed maximus erat lobortis.</p>
            </div>
        </motion.div>
        </>
    )
}

export default Education;