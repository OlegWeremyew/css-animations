import React from 'react';
import styles from './ErrorPage.module.scss'

export const ErrorPage = () => (
  <div className={styles.wrapper}>
    <div  className={styles.container}>
      <h2>Oops! Nothing was found</h2>
      <h1>404</h1>
      <p>We can't find the page you'are looking for.</p>
      <a href="#">Go back home</a>
    </div>
  </div>
);

