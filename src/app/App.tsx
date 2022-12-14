import React, {FC} from 'react';
import './App.css';
import {
  AnimatedIndicator,
  AnimatedTextLoading, AnimButtonWithGradient,
  BeveledCorners,
  ButtonHover,
  CardRotate,
  CreativeButtonHover,
  ErrorPage,
  NeonButton,
  ResponsiveMenu, ThreeDRotate
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
        <Route path={routerPaths.ResponsiveMenu} element={<ResponsiveMenu/>}/>
        <Route path={routerPaths.AnimatedIndicator} element={<AnimatedIndicator/>}/>
        <Route path={routerPaths.ThreeDRotate} element={<ThreeDRotate/>}/>
        <Route path={routerPaths.AnimatedTextLoading} element={<AnimatedTextLoading/>}/>
        <Route path={routerPaths.AnimButtonWithGradient} element={<AnimButtonWithGradient/>}/>
      </Routes>
    </HashRouter>
  </>
);
