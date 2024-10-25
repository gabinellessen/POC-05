// app/components/Card.js
import styles from '../styles/Card.module.css';

export default function Card({ title, description }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
