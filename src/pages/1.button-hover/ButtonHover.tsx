import React, {FC} from 'react';
import styles from './ButtonHover.module.scss'

export const ButtonHover: FC = () => (
  <div className={styles.wrapper}>
    <button type="button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      button
    </button>
  </div>
);

