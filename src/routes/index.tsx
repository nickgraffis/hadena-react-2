import { mount, route } from 'navi';
import React from 'react';
import { Home } from '../Pages/Home';
import { Search } from '../Pages/Search';
import fakeProcess from '../fakeenv';

export const routes = mount({
  /**
   * Landing Page Component
   */
  '/': route({
    title: fakeProcess.env.TITLE,
    view: <Home />,
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