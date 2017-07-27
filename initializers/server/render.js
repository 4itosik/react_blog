import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import { compact, flatten } from 'lodash/array';

//import { matchRoutes, renderRoutes } from 'react-router-config';

import { matchPath } from 'react-router-dom';

import prepareData from 'helpers/routes/prepareDate';
import createRoutes from 'routes';

import store from 'store';

const routes = createRoutes();

const matchRoutes = (location) => (
  routes.map((route) => {
    const locationObject = {
      search: location
    };
    const match = matchPath(location, route);

    if (match) {
      const state = { location: locationObject, params: match.params, routes };
      return prepareData(store, state);
    } else {
      return Promise.resolve(null);
    }
  })
);

export default (req, res) => {
  const promises = compact(flatten(matchRoutes(req.url)));

  Promise.all(promises).then(() => {
    const initialState = JSON.stringify(store.getState());

    res.status(200);

    res.render(
      'index',
      { initialState }
    );
  });
};
