import React from 'react';
import styles from './BeveledCorners.module.scss'

export const BeveledCorners = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>

      <div className={styles.box}>
        <div className={styles.content}>
          <h2>01</h2>
          <h3>Card Heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi impedit, laudantium odit quaerat ratione
            rerum soluta! Accusantium aperiam corporis cumque doloremque.</p>
          <button>Show More</button>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.content}>
          <h2>02</h2>
          <h3>Card Heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi impedit, laudantium odit quaerat ratione
            rerum soluta! Accusantium aperiam corporis cumque doloremque.</p>
          <button>Show More</button>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.content}>
          <h2>03</h2>
          <h3>Card Heading</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi impedit, laudantium odit quaerat ratione
            rerum soluta! Accusantium aperiam corporis cumque doloremque.</p>
          <button>Show More</button>
        </div>
      </div>

    </div>
  </div>
);

