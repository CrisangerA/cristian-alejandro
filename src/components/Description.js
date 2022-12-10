import {motion} from 'framer-motion';
import styles from '../../styles/Description.module.css';
import sharedStyles from '../../styles/Shared.module.css';

export default function Description() {
  const variants = {
    hidden: {opacity: 0},
    enter: {opacity: 1},
    exit: {opacity: 0},
  }
  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate='enter'
      exit='exit'
      transition={{ease: 'easeInOut', duration: 2}}
      className={`${styles.container} ${sharedStyles.card1} ${sharedStyles.p1}`}>
      
        <p className={styles.description}>
        👨🏾‍💻 Full Stack Developer with +3 years of experience developing 💻 web applications with ReactJS and .Net and about 2 years developing 📱 mobile applications with React Native. I like to contribute to product development, promote good practices and good working environment, I am motivated by challenges. React Lover ❤️
        </p>
        <p className={styles.description}>
          I can work on any kind of project, from defining business rules, creating a backend service and deploying it in the ☁️ cloud to building any mockup, prototype or complex UI/UX interface. I like to push myself and have new challenges. I am constantly learning new things, I hope in the future to be able to start my own business based on my knowledge and contribute to society 🌐🌎👨‍👩‍👦
        </p>
    </motion.div>
  )
}
