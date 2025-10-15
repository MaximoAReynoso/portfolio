import './Projects.css';
import { motion } from 'framer-motion';

function Projects(){
    const items = ['One', 'Two', 'Three', 'Four'];

    return (
        <>
        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <p className='titleProjects'>Here are some of my projects:</p>
            <div className='projectBoxes'>
                {items.map((item) => (
                <div className="box">
                    <div className='img'></div>
                    <p className='projectTitle'>Project Number: {item}</p>
                    <p className='projectDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut rutrum arcu. Duis eget purus nec arcu consequat accumsan. Aliquam feugiat porttitor odio sed aliquam. Nam vestibulum egestas enim, vel efficitur diam tincidunt sed. Nam tempus, lorem in ullamcorper egestas, neque ligula bibendum lacus, vel eleifend ligula nisl vel tellus.</p>
                </div>
                ))}
            </div>
        </motion.div>
        </>
    )
}

export default Projects;