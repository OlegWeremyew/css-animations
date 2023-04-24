import React, {FC} from 'react';
import styles from './ButtonWithInterestingHoverEffect.module.scss'

export const ButtonWithInterestingHoverEffect: FC = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a className={styles.a} href="#">Home</a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#">About</a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#">Skills</a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#">Portfolio</a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#">Contacts</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
