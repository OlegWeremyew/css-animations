import React from 'react';
import styles from './AnimButtonWithGradient.module.scss'

export const AnimButtonWithGradient = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <button className={`${styles.btn} ${styles.btn1}`}>Gradient button</button>
      <button className={`${styles.btn} ${styles.btn2}`}>Gradient button</button>
      <button className={`${styles.btn} ${styles.btn3}`}>Gradient button</button>
      <button className={`${styles.btn} ${styles.btn4}`}>Gradient button</button>
    </div>
  </div>
);

