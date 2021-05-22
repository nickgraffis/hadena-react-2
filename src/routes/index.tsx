import { mount, route } from 'navi';
import React, { lazy } from 'react';
import { HomeLoading } from '../Components/HomeLoading';
import fakeProcess from '../fakeenv';

const Search = lazy(() => import('../Pages/Search'));
const Home = lazy(() => import('../Pages/Home'));

export const routes = mount({
  /**
   * Landing Page Component
   */
  '/': route({
    title: fakeProcess.env.TITLE,
    view: <Home />,
  }),
  '/loading': route({
    view: <HomeLoading />
  }),
  /**
   * Search Page Component
   */
  '/search': route(req => {
    return{
      title: req.params.query[0].toUpperCase() + req.params.query.substring(1),
      view: <Search query={req.params.query} />
    };
  })
});