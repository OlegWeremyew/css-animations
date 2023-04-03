import React, {FC} from 'react';
import styles from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import {routerPaths} from "../enum";

export const Navbar: FC = () => {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.navContainer}>

        <div className={styles.navItems}>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.ButtonHover}
          >
            <span className={styles.navText}>ButtonHover</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.CardRotate}
          >
            <span className={styles.navText}>CardRotate</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.BeveledCorners}
          >
            <span className={styles.navText}>BeveledCorners</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.CreativeButtonHover}
          >
            <span className={styles.navText}>CreativeButtonHover</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.NeonButton}
          >
            <span className={styles.navText}>NeonButton</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.ResponsiveMenu}
          >
            <span className={styles.navText}>ResponsiveMenu</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.AnimatedIndicator}
          >
            <span className={styles.navText}>AnimatedIndicator</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.ThreeDRotate}
          >
            <span className={styles.navText}>ThreeDRotate</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.AnimatedTextLoading}
          >
            <span className={styles.navText}>AnimatedTextLoading</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.AnimButtonWithGradient}
          >
            <span className={styles.navText}>AnimButtonWithGradient</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.CircleProgressBar}
          >
            <span className={styles.navText}>CircleProgressBar</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.DropsElements}
          >
            <span className={styles.navText}>DropsElements</span>
          </NavLink>

        </div>

        <div className={styles.navIcon}>
          <p>&#8620;</p>
        </div>

      </div>
    </nav>
  );
};
