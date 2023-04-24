import React, {FC} from 'react';
import styles from './SuperSimpleStylishHoverEffect.module.scss'

export const SuperSimpleStylishHoverEffect: FC = () => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.div}>
        <img
          className={styles.img}
          src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="img"
        />
      </div>
      <div className={styles.div}>
        <img
          className={styles.img}
          src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="img"
        />
      </div>

    </div>
  );
};
