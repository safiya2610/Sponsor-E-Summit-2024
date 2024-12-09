import React from 'react';
import { JSX } from 'react';
import styles from './page.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>SPONSORS</h1>
      <div className={styles.Elements}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <div className={styles.card}>
            <div className={styles.wrapper}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5TuRAm67KYbMPsEteHq6HAF26nLS25lpaQ&s"
                alt="Force Mage Cover"
                className={styles.coverImage}
              />
            </div>
            <img
              src="/coca-removebg-preview.png"
              alt="Force Mage Character"
              className={styles.character}
            />
          </div>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <div className={styles.card}>
            <div className={styles.wrapper}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5TuRAm67KYbMPsEteHq6HAF26nLS25lpaQ&s"
                alt="Force Mage Cover"
                className={styles.coverImage}
              />
            </div>
            <img
              src="/coca-removebg-preview.png"
              alt="Force Mage Character"
              className={styles.character}
            />
          </div>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <div className={styles.card}>
            <div className={styles.wrapper}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5TuRAm67KYbMPsEteHq6HAF26nLS25lpaQ&s"
                alt="Force Mage Cover"
                className={styles.coverImage}
              />
            </div>
            <img
              src="/coca-removebg-preview.png"
              alt="Force Mage Character"
              className={styles.character}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
