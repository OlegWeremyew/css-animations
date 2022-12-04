import React from 'react';
import styles from './AnimatedIndicator.module.scss'

export const AnimatedIndicator = () => (
  <div className={styles.wrapper}>
    <div className={styles.progress}>
      <div className={styles.fill}/>
      <div className={styles.number}>35%</div>
    </div>

    <div className={styles.progress}>
      <div className={styles.fill}/>
      <div className={styles.number}>65%</div>
    </div>

    <div className={styles.progress}>
      <div className={styles.fill}/>
      <div className={styles.number}>95%</div>
    </div>
  </div>
);

