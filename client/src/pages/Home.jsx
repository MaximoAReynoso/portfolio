import './Home.css';
import { motion } from 'framer-motion';

function Home (){
    return (
        <>
        <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className='imgHolder'></div>
            <p className='myName'>Máximo Andrés Reynoso <br/> Advanced Systems Engineering student</p>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod augue in mi eleifend, sed maximus erat lobortis. Vestibulum tempus nec purus et iaculis. Vivamus tincidunt molestie tempor. Pellentesque porttitor turpis eget congue consectetur. Mauris ante neque, iaculis ut diam id, blandit interdum quam. Maecenas euismod, orci nec imperdiet tristique, dolor orci sodales velit, ac placerat velit orci vel felis. In hendrerit dolor ut massa aliquam iaculis. Pellentesque laoreet venenatis dui quis accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec in lectus eu leo sollicitudin suscipit vel ut mi. </p>
        </motion.div>
        </>
    )
}

export default Home;