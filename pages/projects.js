import { PRODUCTS } from '../src/config';
import sharedStyles from '../styles/Shared.module.css';
import styles from '../styles/Skills.module.css';

export default function Projects() {
  return (
    <div className={`${sharedStyles.card1} ${sharedStyles.p1}`}>
      <div className={`Projects ${sharedStyles.grid}`}>
        {PRODUCTS.map(product => 
          <a href={product.link} className={sharedStyles.card2} key={product.name} target='_blank' rel="noreferrer">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </a>
        )}
      </div>
    </div>
  )
}
