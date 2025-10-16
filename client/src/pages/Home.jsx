import './Home.css';
import { motion } from 'framer-motion';

function Home (){
    return (
        <>
        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className='imgHolder'></div>
            <p className='myName'>Máximo Andrés Reynoso <br/> Advanced Systems Engineering student</p>
            <p className='description'>Advanced Systems Engineering student with over 70% subjects passed and a background in programming and data analysis (Python, SQL, NumPy, Pandas, Matplotlib). I complement my training with courses in Data Science and the Internet of Things. I volunteer for the REHTO Project, performing equipment diagnostics, repair, and refurbishment, as well as installing Linux and open source software. I'm looking for my first work experience in IT or data analysis to apply my technical knowledge and continue developing in professional environments.</p>
        </motion.div>
        </>
    )
}

export default Home;