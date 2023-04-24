import React, {FC} from 'react';
import './App.css';
import {
  AnimatedIndicator,
  AnimatedTextLoading,
  AnimButtonWithGradient,
  BeveledCorners,
  ButtonHover,
  ButtonWithWaveEffect,
  CardRotate,
  CircleProgressBar,
  CreativeButtonHover,
  CreativeCard,
  DropsElements,
  ErrorPage,
  GlitchEffect,
  InterestingHoverEffect,
  ButtonWithInterestingHoverEffect,
  NeonButton,
  PacmanPreloader,
  ParallaxEffect,
  PureScrollHtmlAndCss,
  RotateButton,
  ThreeDRotate,
  LinearShadowEffect,
  SuperCreativeProductCardAnimation,
  SlopingWindow,
  AnimatedCheckbox,
  BeautifulScrollbar, AnimatedInputSearch, SuperSimpleStylishHoverEffect, IncredibleNeonCheckbox,
} from "../pages";
import {HashRouter, Route, Routes} from "react-router-dom";
import {routerPaths} from "../enum";
import {Navbar} from "../navbar";

export const App: FC = () => (
  <>
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route/>
        <Route path={routerPaths.ButtonHover} element={<ButtonHover/>}/>
        <Route path={routerPaths.CardRotate} element={<CardRotate/>}/>
        <Route path={routerPaths.BeveledCorners} element={<BeveledCorners/>}/>
        <Route path={routerPaths.CreativeButtonHover} element={<CreativeButtonHover/>}/>
        <Route path={routerPaths.NeonButton} element={<NeonButton/>}/>
        <Route path={routerPaths.ErrorPage} element={<ErrorPage/>}/>
        {/*<Route path={routerPaths.ResponsiveMenu} element={<ResponsiveMenu/>}/>*/}
        <Route path={routerPaths.AnimatedIndicator} element={<AnimatedIndicator/>}/>
        <Route path={routerPaths.ThreeDRotate} element={<ThreeDRotate/>}/>
        <Route path={routerPaths.AnimatedTextLoading} element={<AnimatedTextLoading/>}/>
        <Route path={routerPaths.AnimButtonWithGradient} element={<AnimButtonWithGradient/>}/>
        <Route path={routerPaths.CircleProgressBar} element={<CircleProgressBar/>}/>
        <Route path={routerPaths.DropsElements} element={<DropsElements/>}/>
        <Route path={routerPaths.PacmanPreloader} element={<PacmanPreloader/>}/>
        <Route path={routerPaths.PureScrollHtmlAndCss} element={<PureScrollHtmlAndCss/>}/>
        <Route path={routerPaths.ParallaxEffect} element={<ParallaxEffect/>}/>
        <Route path={routerPaths.GlitchEffect} element={<GlitchEffect/>}/>
        <Route path={routerPaths.RotateButton} element={<RotateButton/>}/>
        <Route path={routerPaths.ButtonWithWaveEffect} element={<ButtonWithWaveEffect/>}/>
        <Route path={routerPaths.InterestingHoverEffect} element={<InterestingHoverEffect/>}/>
        <Route path={routerPaths.CreativeCard} element={<CreativeCard/>}/>
        <Route path={routerPaths.LinearShadowEffect} element={<LinearShadowEffect/>}/>
        <Route path={routerPaths.ButtonWithInterestingHoverEffect} element={<ButtonWithInterestingHoverEffect/>}/>
        <Route path={routerPaths.SuperCreativeProductCardAnimation} element={<SuperCreativeProductCardAnimation/>}/>
        <Route path={routerPaths.SlopingWindow} element={<SlopingWindow/>}/>
        <Route path={routerPaths.AnimatedCheckbox} element={<AnimatedCheckbox/>}/>
        <Route path={routerPaths.BeautifulScrollbar} element={<BeautifulScrollbar/>}/>
        <Route path={routerPaths.AnimatedInputSearch} element={<AnimatedInputSearch/>}/>
        <Route path={routerPaths.IncredibleNeonCheckbox} element={<IncredibleNeonCheckbox/>}/>
        <Route path={routerPaths.SuperSimpleStylishHoverEffect} element={<SuperSimpleStylishHoverEffect/>}/>
      </Routes>
    </HashRouter>
  </>
);
