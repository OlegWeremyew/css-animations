import React, {FC} from 'react';
import styles from './CircleProgressBar.module.scss';

export const CircleProgressBar: FC = () => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.container}>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>

              <div className={styles.number}>
                <h2>90 <span>%</span></h2>
              </div>
              <h3>HTML</h3>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>

              <div className={styles.number}>
                <h2>40 <span>%</span></h2>
              </div>
              <h3>CSS</h3>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.box}>
            <div className={styles.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>

              <div className={styles.number}>
                <h2>60 <span>%</span></h2>
              </div>
              <h3>JAVA</h3>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
