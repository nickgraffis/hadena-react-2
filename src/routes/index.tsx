import { mount, route } from 'navi';
import React from 'react';
import { Home } from '../Pages/Home';
import { Search } from '../Pages/Search';

export const routes = mount({
  /**
   * Landing Page Component
   */
  '/': route({
    title: '派手な HADENA',
    view: <Home />,
  }),
  /**
   * Search Page Component
   */
  '/search': route(req => {
    return{
      title: '派手な HADENA',
      view: <Search query={req.params.query} />
    };
  })
});