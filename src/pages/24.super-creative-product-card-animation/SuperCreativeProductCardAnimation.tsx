import React, {FC} from 'react';
import styles from './SuperCreativeProductCardAnimation.module.scss'

export const SuperCreativeProductCardAnimation: FC = () => {
  return (
    <div className={styles.wrapper}>

      <figure className={styles.figure}>
        <img
          className={styles.img}
          src="https://alloplus.by/upload/iblock/704/704b1d36a8a31d89c2f60caf908d857d.png"
          alt="image"
        />
        <figcaption className={styles.figcaption}>
          <h2 className={styles.h2}>
            LG X-Boom
            <span className={styles.span}>Acoustic System</span>
          </h2>
          <button type='button' className={styles.button}>Buy now</button>
        </figcaption>
      </figure>

    </div>
  );
};
