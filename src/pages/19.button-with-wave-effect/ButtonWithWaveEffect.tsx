import React, {FC} from 'react';
import styles from './ButtonWithWaveEffect.module.scss'

export const ButtonWithWaveEffect: FC = () => (
  <div className={styles.wrapper}>

    <button type="button" className={styles.button}>
      <div className={styles.wave}></div>
      <span  className={styles.text}>Water button</span>
    </button>

  </div>
);
