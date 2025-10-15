import './Skills.css'
import { motion } from 'framer-motion';

function Skills () {
    return (
        <>
        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
        <div className='languagesBox'>
            <p className='languagesLabel'>Programming languages:</p>
        </div>
        <div className='languagesBox'>
            <p className='languagesLabel'>Known tools:</p>
        </div>
        <div className='languagesBox'>
            <p className='languagesLabel'>Expertice Areas:</p>
        </div>
        </motion.div>
        </>
    )
}

export default Skills;