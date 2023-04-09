import React, {FC} from 'react';
import styles from './RotateButton.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faTwitter, faVk} from "@fortawesome/free-brands-svg-icons";

export const RotateButton: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.localWrapper}>

      <a href="#" className={styles.container}>
        <div className={styles.flipper}>
          <div className={`${styles.button} ${styles.front}`}>
            <FontAwesomeIcon className={styles.icon} icon={faInstagram}/>
          </div>

          <div className={`${styles.button} ${styles.back}`}>
            Oleg Veremyev
          </div>
        </div>
      </a>

      <a href="#" className={styles.container}>
        <div className={styles.flipper}>
          <div className={`${styles.button} ${styles.front}`}>
            <FontAwesomeIcon className={styles.icon} icon={faVk}/>
          </div>

          <div className={`${styles.button} ${styles.back}`}>
            Oleg Veremyev
          </div>
        </div>
      </a>

      <a href="#" className={styles.container}>
        <div className={styles.flipper}>
          <div className={`${styles.button} ${styles.front}`}>
            <FontAwesomeIcon className={styles.icon} icon={faTwitter}/>
          </div>

          <div className={`${styles.button} ${styles.back}`}>
            Oleg Veremyev
          </div>
        </div>
      </a>

    </div>
  </div>
);

