import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import url from 'url';
import { parse } from 'qs';

import { compact, flatten } from 'lodash/array';
import { map } from 'lodash/collection';

import { StaticRouter } from 'react-router';
import { Switch, matchPath } from 'react-router-dom';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';

import MainLayout from 'components/layouts/MainLayout';

import createRoutes from 'routes';
import createStore from 'store';

const store = createStore();

const routes = createRoutes();

const matchRoutes = (currentUrl) => {
  const location = url.parse(currentUrl);

  return routes.map((route) => {
    const match = matchPath(location.pathname, route);
    const query = location.search ? parse(location.search.substr(1)) : {};

    if (match) {
      return { route, query, props: match.params };
    }
  });
};

export default (req, res) => {
  const currentRoutesObject = compact(flatten(matchRoutes(req.url)));

  Promise.all(
    compact(
      map(currentRoutesObject, (route) => route.route.prepareDate(store, route.query, route.props))
    )
  ).then(() => {
    const currentRoutes = map(currentRoutesObject, 'route');
    const context = {};
    const content = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context = {context}
        >
          <MainLayout>
            <Switch>
              {
                currentRoutes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))
              }
            </Switch>
          </MainLayout>
        </StaticRouter>
      </Provider>
    );

    const initialState = JSON.stringify(store.getState());

    res.status(200);

    res.render(
      'index',
      { initialState, content }
    );
  });
};
