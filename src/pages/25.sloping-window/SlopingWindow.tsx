import React, {FC} from 'react';
import styles from './SlopingWindow.module.scss'
import {faHeart, faComment, faShare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const SlopingWindow: FC = () => {
  return (
    <div className={styles.wrapper}>

      <figure className={styles.figure}>
        <img
          className={styles.img}
          src="https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="image"
        />
          <figcaption className={styles.figcaption}>
            <h2 className={styles.h2}>Image title</h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <a className={styles.a} href="#">
                  <FontAwesomeIcon className={styles.icon} icon={faHeart}/>
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.a} href="#">
                  <FontAwesomeIcon className={styles.icon} icon={faComment}/>
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.a} href="#">
                  <FontAwesomeIcon className={styles.icon} icon={faShare}/>
                </a>
              </li>
            </ul>
          </figcaption>
      </figure>

    </div>
);
};
