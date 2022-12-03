import React from 'react';
import styles from './CreativeButtonHover.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faTwitter, faVk, faYoutube} from "@fortawesome/free-brands-svg-icons";

export const CreativeButtonHover = () => (
  <div className={styles.wrapper}>
    <ul className={styles.container}>
      <li>
        <a href="#"><FontAwesomeIcon className={styles.icon} icon={faYoutube}/></a>
      </li>
      <li>
        <a href="#"><FontAwesomeIcon className={styles.icon} icon={faInstagram}/></a>
      </li>
      <li>
        <a href="#"><FontAwesomeIcon className={styles.icon} icon={faTwitter}/></a>
      </li>
      <li>
        <a href="#"><FontAwesomeIcon className={styles.icon} icon={faVk}/></a>
      </li>
      <li>
        <a href="#"><FontAwesomeIcon className={styles.icon} icon={faGithub}/></a>
      </li>
    </ul>
  </div>
);

