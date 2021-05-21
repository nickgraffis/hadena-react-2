import React, { FC, Suspense, useContext, useEffect, useRef, useState } from 'react';
import { FlyingBoxes } from './Art/FlyingBoxes';
import { Hadena } from './Icons/Hadena';
import { search, RGB, UnSplash, UnSplashData, imagine } from './utils/imagesearch';
import { AnimatedInput } from './Components/AnimatedInput';
import { words } from './data/colors';
import { useKeypress } from './hooks/useKeyPress';
import { Router, useLoadingRoute, View } from 'react-navi';
import { routes } from './routes';
import HelmetProvider from 'react-navi-helmet-async';
import BusyIndicator from 'react-busy-indicator';

type Props = { }

export const App: FC<Props> = () => {
  // const colorize = (query: string) => {
  //   search(query, 1, 16).then((res: UnSplashData) => {
  //     res.photos.results.forEach((p: UnSplash) => {
  //       imagine(p.urls.small).then(res => {
  //         setColors(prev => [...prev, res])
  //         console.log(res)
  //       })
  //     })
  //   })
  // }

  return (
    <HelmetProvider>
      <main className="min-h-screen w-screen bg-gray-100 text-blueGray-800 dark:text-gray-100 dark:bg-blueGray-800">
        <Router routes={routes}>
          <Suspense fallback={<p>Loading...</p>}>
            <View />
          </Suspense>
        </Router>
      </main>
    </HelmetProvider>
  );
};
