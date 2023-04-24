import React, {FC} from 'react';
import styles from './IncredibleNeonCheckbox.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWifi} from "@fortawesome/free-solid-svg-icons";

export const IncredibleNeonCheckbox: FC = () => {
  return (
    <div className={styles.wrapper}>

      <label className={styles.label}>
        <input className={styles.input} type="checkbox"/>
        <FontAwesomeIcon className={styles.icon} icon={faWifi}/>
        <span className={styles.span}></span>
      </label>

    </div>
  );
};
