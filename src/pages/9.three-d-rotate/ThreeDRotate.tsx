import React from 'react';
import styles from './ThreeDRotate.module.scss'

export const ThreeDRotate = () => (
  <div className={styles.wrapper}>
    <div className={styles.spinner}>
      <div className={styles.circle}>
        <span  className={styles.line}></span>
        <span  className={styles.line}></span>
        <span  className={styles.line}></span>
        <span  className={styles.line}></span>
      </div>
    </div>
  </div>
);

