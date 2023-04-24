import React, {FC} from 'react';
import styles from './AnimatedCheckbox.module.scss'

export const AnimatedCheckbox: FC = () => {
  return (
    <div className={styles.wrapper}>

      <input className={styles.input} type="checkbox" id="checker"/>
      <label className={styles.label} htmlFor="checker"></label>

    </div>
  );
};
