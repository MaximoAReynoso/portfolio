import './Education.css';
import { motion } from 'framer-motion';

function Education () {
    return (
        <>
        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <p className='educationLabel'>Educative Institutions</p>
            <div className='boxEducation'>
                <p className='educationName'>University</p>
                <p className='educationDate'>03/2022 - Now</p>
                <p className='educationDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod augue in mi eleifend, sed maximus erat lobortis.</p>
            </div>
            <div className='boxEducation'>
                <p className='educationName'>Secondary school</p>
                <p className='educationDate'>03/2016 - 12/2021</p>
                <p className='educationDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod augue in mi eleifend, sed maximus erat lobortis.</p>
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
        </motion.div>
        </>
    )
}

export default Education;