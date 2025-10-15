import './Home.css';
import { motion } from 'framer-motion';

function Home (){
    return (
        <>
        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <p className='paragraph'>Welcome to my Portfolio</p>
        </motion.div>
        </>
    )
}

export default Home;