import React, {FC} from 'react';
import styles from './InterestingHoverEffect.module.scss'

export const InterestingHoverEffect: FC = () => (
  <div className={styles.wrapper}>

    <div className={styles.container}>
      <figure className={styles.figure}>
        <img
          className={styles.img}
          src="https://wallpaper.dog/large/20416064.jpg"
          alt="img"/>

        <figcaption className={styles.figcaption}>
          <h2 className={styles.title}>Image title</h2>

          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid aperiam, cumque ducimus ea et illo
            ipsam minus nesciunt odit possimus quasi qui quos reiciendis, rerum saepe sequi temporibus, vitae?
          </p>

          <a
            className={styles.link}
            href="#"
          >View more</a>

        </figcaption>
      </figure>
    </div>

    <div className={styles.container}>
      <figure className={styles.figure}>
        <img
          className={styles.img}
          src='https://i.insider.com/5d2350be21a8612d236e24fa?width=1000&format=jpeg&auto=webp'
          alt="img"
        />

        <figcaption className={styles.figcaption}>
          <h2 className={styles.title}>Image title</h2>

          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid aperiam, cumque ducimus ea et illo
            ipsam minus nesciunt odit possimus quasi qui quos reiciendis, rerum saepe sequi temporibus, vitae?
          </p>

          <a
            className={styles.link}
            href="#"
          >View more</a>

        </figcaption>
      </figure>
    </div>

  </div>
);

