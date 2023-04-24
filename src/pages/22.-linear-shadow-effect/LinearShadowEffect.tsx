import React, {FC} from 'react';
import styles from './LinearShadowEffect.module.scss'

export const LinearShadowEffect: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shadow}>
        <img
          className={styles.img}
          src="https://i.ibb.co/tB9tzzr/logo-2.png"
          alt="logo"
        />
      </div>
    </div>
  );
};
