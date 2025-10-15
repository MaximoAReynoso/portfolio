import './Contact.css'
import { motion } from 'framer-motion';

function Contact() {
    return (
        <>
            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                <p className='title'>My social media:</p>
                <div>
                    <p>- Linkedin account: <a href='https://www.linkedin.com/in/maximo-reynoso/'>Máximo Andrés Reynoso</a></p>
                    <p>- Business email: <a href='mailto:maximoreynosob@gmail.com'>My business email</a></p>
                    <p>- Github account: <a href='https://github.com/MaximoAReynoso'>MaximoAReynoso</a></p>
                </div>
            </motion.div>
        </>
    )
}

export default Contact;