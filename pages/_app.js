import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
// components
import Navbar from '../src/components/Navbar';
import Title from '../src/components/Title';
import Description from '../src/components/Description';
import Footer from '../src/components/Footer';
// styles
import styles from '../styles/Shared.module.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const variants = {
    hidden: {opacity: 0, x: '-100vw', y: 0},
    enter: {opacity: 1, x: 0, y: 0 },
    exit: {opacity: 0, x: '100vw', y: 0, display: 'none'},
  }
  return (
    <>
      <Head>
        <title>Cristian Alejandro |Software Development | Software Developer</title>
        <meta name="description" content="software developer develop software with emphasys in web development" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <main className={styles.main}>
      <Navbar />
        <div className={`${styles.row}`}>
          <Title />
          <Description />
        </div>
        <AnimatePresence>
          <motion.div
            key={Component.name}
            variants={variants}
            initial='hidden'
            animate='enter'
            exit='exit'
            transition={{ease: 'easeInOut', duration: 0.6}}
            >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default MyApp
