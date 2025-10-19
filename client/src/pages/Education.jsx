import './Education.css';
import { motion } from 'framer-motion';

function Education () {
    return (
        <>
        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <a href='https://www.linkedin.com/in/maximo-reynoso/details/education/'><p className='educationLabel'>Educative Institutions</p></a>
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

            <a href='https://www.linkedin.com/in/maximo-reynoso/details/certifications/'><p className='educationLabel'>Certifications</p></a>
            <div className='boxEducation'>
                <p className='educationName'>Internet of Things</p>
                <p className='educationDate'>06/2025</p>
                <p className='educationDescription'>Santander Open Academy.<br /> Credential ID: OA-2025-0603001192457</p>
            </div>
            <div className='boxEducation'>
                <p className='educationName'>Introduction to Data Science</p>
                <p className='educationDate'>08/2025</p>
                <p className='educationDescription'>Santander Open Academy.<br /> Credential ID: OA-2025-0811001574521</p>
            </div>

            <a href='https://www.linkedin.com/in/maximo-reynoso/details/certifications/'><p className='educationLabel'>Language Certifications</p></a>
            <div className='boxEducation'>
                <p className='educationName'>PTE General (CEF B2)</p>
                <p className='educationDate'>11/2019</p>
                <p className='educationDescription'>Pearson Test Of English General (CEF B2).<br /> Credential ID: 82650:0007:1911001926:050703</p>
            </div>
        </motion.div>
        </>
    )
}

export default Education;