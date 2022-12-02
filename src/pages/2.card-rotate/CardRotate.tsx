import React, {FC} from 'react';
import styles from './CardRotate.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube, faInstagram, faTwitter, faVk, faGithub} from '@fortawesome/free-brands-svg-icons';

export const CardRotate: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.card}>
      <div className={styles.front}>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Photo"/>
      </div>
      <div className={styles.back}>
        <h1>
          John Doe
          <span> Front-end developer</span>
        </h1>
        <ul className={styles.socials}>
          <li>
            <a href="#"><FontAwesomeIcon icon={faYoutube}/></a>
          </li>
          <li>
            <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
          </li>
          <li>
            <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
          </li>
          <li>
            <a href="#"><FontAwesomeIcon icon={faVk}/></a>
          </li>
          <li>
            <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
          </li>
        </ul>
      </div>
    </div>


  </div>
);
