import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { Switch, matchPath } from 'react-router-dom';

import { map } from 'lodash/collection';

import MainLayout from 'components/layouts/MainLayout';

import createRoutes from 'routes';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';
import prepareDate from 'helpers/routes/prepareDate';
import history from 'helpers/routes/history';

import store from 'store';

import DevTools from 'containers/DevTools';

import { ConnectedRouter } from 'react-router-redux';

const routes = createRoutes();

function historyCb(location) {
  map(
    routes,
    route => {
      const match = matchPath(location.pathname, route);

      if (match) {
        const state = { location, params: match.params, routes };
        return prepareDate(store, state);
      }
    }
  );

  return true;
}

history.listen((location) => {
  historyCb(location);
});

historyCb(window.location);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MainLayout>
        <Switch>
          {
            routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))
          }
        </Switch>
      </MainLayout>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(
  <DevTools store={store} />,
  document.getElementById('devtools')
);

export default App;
