import React, {FC} from 'react';
import styles from './PacmanPreloader.module.scss'

export const PacmanPreloader: FC = () => (
  <div className={styles.wrapper}>

    <div className={styles.pacman}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
