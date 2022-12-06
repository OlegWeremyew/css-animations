import React from 'react';
import styles from './NeonButton.module.scss'

export const NeonButton = () => (
  <div className={styles.wrapper}>
    <button type="button"  className={styles.button}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Neon Button
    </button>
  </div>
);

