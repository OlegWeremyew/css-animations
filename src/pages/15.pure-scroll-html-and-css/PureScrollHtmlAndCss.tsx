import React, {FC} from 'react';
import styles from './PureScrollHtmlAndCss.module.scss'

export const PureScrollHtmlAndCss: FC = () => (
  <div className={styles.wrapper}>
    <input className={styles.pureInput} type="radio" name="slide" id="section1" value="section1"/>
    <input className={styles.pureInput} type="radio" name="slide" id="section2" value="section2"/>
    <input className={styles.pureInput} type="radio" name="slide" id="section3" value="section3"/>
    <input className={styles.pureInput} type="radio" name="slide" id="section4" value="section4"/>

    <nav className={styles.nav}>
      <label htmlFor="section1" className={styles.label}/>
      <label htmlFor="section2" className={styles.label}/>
      <label htmlFor="section3" className={styles.label}/>
      <label htmlFor="section4" className={styles.label}/>
    </nav>

    <section className={styles.section}>
      <h2 className={styles.pureH2}>One page Slider</h2>
    </section>
    <section className={styles.section}>
      <h2 className={styles.pureH2}>Pure HTML and CSS</h2>
    </section>
    <section className={styles.section}>
      <h2 className={styles.pureH2}>Create for</h2>
    </section>
    <section className={styles.section}>
      <h2 className={styles.pureH2}>Don't work =(</h2>
    </section>

    <div className={styles.cover}></div>
  </div>
);
