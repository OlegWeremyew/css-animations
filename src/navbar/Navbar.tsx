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

          {/*<NavLink*/}
          {/*  className={navData => (navData.isActive ? styles.activeLink : "")}*/}
          {/*  to={routerPaths.ResponsiveMenu}*/}
          {/*>*/}
          {/*  <span className={styles.navText}>ResponsiveMenu</span>*/}
          {/*</NavLink>*/}

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

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.PacmanPreloader}
          >
            <span className={styles.navText}>PacmanPreloader</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.PureScrollHtmlAndCss}
          >
            <span className={styles.navText}>PureScrollHtmlAndCss</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.ParallaxEffect}
          >
            <span className={styles.navText}>ParallaxEffect</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.GlitchEffect}
          >
            <span className={styles.navText}>GlitchEffect</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.RotateButton}
          >
            <span className={styles.navText}>RotateButton</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.ButtonWithWaveEffect}
          >
            <span className={styles.navText}>ButtonWithWaveEffect</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.InterestingHoverEffect}
          >
            <span className={styles.navText}>InterestingHoverEffect</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.CreativeCard}
          >
            <span className={styles.navText}>CreativeCard</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.LinearShadowEffect}
          >
            <span className={styles.navText}>LinearShadowEffect</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.ButtonWithInterestingHoverEffect}
          >
            <span className={styles.navText}>ButtonWithInterestingHoverEffect</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.SuperCreativeProductCardAnimation}
          >
            <span className={styles.navText}>SuperCreativeProductCardAnimation</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.SlopingWindow}
          >
            <span className={styles.navText}>SlopingWindow</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.AnimatedCheckbox}
          >
            <span className={styles.navText}>AnimatedCheckbox</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.BeautifulScrollbar}
          >
            <span className={styles.navText}>BeautifulScrollbar</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.AnimatedInputSearch}
          >
            <span className={styles.navText}>AnimatedInputSearch</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.IncredibleNeonCheckbox}
          >
            <span className={styles.navText}>IncredibleNeonCheckbox</span>
          </NavLink>

          <NavLink
            className={navData => (navData.isActive ? styles.activeLink : "")}
            to={routerPaths.SuperSimpleStylishHoverEffect}
          >
            <span className={styles.navText}>SuperSimpleStylishHoverEffect</span>
          </NavLink>

        </div>

        <div className={styles.navIcon}>
          <p>&#8620;</p>
        </div>

      </div>
    </nav>
  );
};
