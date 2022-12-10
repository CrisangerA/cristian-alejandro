import Image from 'next/image';
import { SKILLS } from '../src/config';
import sharedStyles from '../styles/Shared.module.css';
import styles from '../styles/Skills.module.css';

const defaultImg = 'https://static.platzi.com/media/achievements/badge-flujo-desarrollo-codestream-5a0492d0-ab21-4e33-925f-b74bd7ce4c20.png';

export default function Skills() {

  return (
    <div className={`${sharedStyles.card1} ${sharedStyles.p1}`}>
      <div className={`Skills ${sharedStyles.grid}`}>
        {SKILLS.map(skill =>
          <div key={skill.name} className={`${sharedStyles.card2} ${sharedStyles.center}`}>
            <Image src={skill.image || defaultImg} width={150} height={150} alt="Des" />
            <p className={styles.text}>{skill.name}</p>
          </div>
        )}
      </div>
    </div>
  )
}
