import React, {FC} from 'react';
import styles from './CreativeCard.module.scss'

export const CreativeCard: FC = () => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.picture}>
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-1up_GEO_RU?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1569435918052"
              alt="img"
            />
          </div>
          <div className={styles.price}>
            <span>600$</span>
          </div>
          <div className={styles.info}>
            <div className={styles.icon}>
              <img
                src="https://www.shareicon.net/data/2016/04/26/755602_apple_512x512.png"
                alt="icon"
              />
              Watches
            </div>
          </div>
          <div className={styles.name}>
            Apple watch
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.picture}>
            <img
              src="http://store-63.ru/image/cache/catalog/AirPods/airpods-charge-case-201903-800x800.png"
              alt="img"
            />
          </div>
          <div className={styles.price}>
            <span>800$</span>
          </div>
          <div className={styles.info}>
            <div className={styles.icon}>
              <img
                src="https://static.thenounproject.com/png/1122331-200.png"
                alt="icon"
              />
              Acoustic
            </div>
          </div>
          <div className={styles.name}>
            Home Pod
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.picture}>
            <img
              src="http://store-63.ru/image/cache/catalog/AirPods/airpods-charge-case-201903-800x800.png"
              alt="img"
            />
          </div>
          <div className={styles.price}>
            <span>200$</span>
          </div>
          <div className={styles.info}>
            <div className={styles.icon}>
              <img
                src="https://static.thenounproject.com/png/800773-200.png"
                alt="icon"
              />
              Headphones
            </div>
          </div>
          <div className={styles.name}>
            Apple AirPods
          </div>
        </div>
      </div>

    </div>
  );
};
