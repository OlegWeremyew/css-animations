import React, {FC} from 'react';
import styles from './AnimatedInputSearch.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export const AnimatedInputSearch: FC = () => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.search}>
        <input
          className={styles.input}
          type="search"
          placeholder="Type to search"
        />

        <button type='button' className={styles.button}>
          <FontAwesomeIcon className={styles.icon} icon={faSearch}/>
        </button>
      </div>

    </div>
  );
};
