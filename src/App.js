import React from 'react';
import { Router, Switch, matchPath } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { map } from 'lodash/collection';

import MainLayout from 'components/layouts/MainLayout';
import createRoutes from 'routes';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';
import prepareDate from 'helpers/routes/prepareDate';

import store from 'store';

const App = () => {
  const routes = createRoutes();
  const history = createHistory();

  history.listen((location) => {
    map(
      routes,
      route => {
        const match = matchPath(location.pathname, route);

        if (match) {
          const state = { location, params: match.params, routes };
          prepareDate(store, state);
        }
      }
    );
  });

  return (
    <Router history={history}>
      <MainLayout>
        <Switch>
          {
            routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))
          }
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
