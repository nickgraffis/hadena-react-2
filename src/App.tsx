import React, { FC, Suspense } from 'react';
import { Router, View } from 'react-navi';
import { routes } from './routes';
import HelmetProvider from 'react-navi-helmet-async';
import { HomeLoading } from './Components/HomeLoading';

export const App: FC = () => {
  return (
    <HelmetProvider>
      <main className="min-h-screen w-screen bg-gray-100 text-blueGray-800 dark:text-gray-100 dark:bg-blueGray-800">
        <Router routes={routes}>
          <Suspense fallback={<HomeLoading />}>
            <View />
          </Suspense>
        </Router>
      </main>
    </HelmetProvider>
  );
};
