import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import { map } from 'lodash/collection';
import { compact } from 'lodash/array';

import { matchPath } from 'react-router-dom';

import prepareDate from 'helpers/routes/prepareDate';
import createRoutes from 'routes';

import store from 'store';

const routes = createRoutes();

const matchRoutes = (location) => {
  const result = map(
    routes,
    route => {
      const match = matchPath(location, route);

      if (match) {
        return route.prepareDate(store, '/');
      }
    }
  );

  return compact(result);
};

export default (req, res) => {
  Promise.all(matchRoutes(req.url)).then(() => {
    const initialState = JSON.stringify(store.getState());

    res.status(200);
    res.render(
      'index',
      initialState
    );

  });
};
