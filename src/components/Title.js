import { motion } from 'framer-motion';
import Image from 'next/image';
import profilePhoto from '../../public/_ALZ1210-1R.jpg';
import styles from '../../styles/Title.module.css';
import sharedStyles from '../../styles/Shared.module.css';

export default function Title() {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  }
  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate='enter'
      exit='exit'
      transition={{ ease: 'easeInOut', duration: 2 }}
      className={`${styles.container} ${sharedStyles.card1} ${sharedStyles.p1}`}>
      <Image
        src={profilePhoto}
        alt="Profile foto linkedin"
        width={300}
        height={300}
        className={styles.image}
      />
      <h1 className={styles.title}>
        CRISTIAN ALEJANDRO
      </h1>
      <h1 className={styles.title}>
        (SOFTWARE DEVELOPER)
      </h1>
    </motion.div>
  )
}
