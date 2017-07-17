import { createStore, applyMiddleware, compose } from 'redux';
import APIMiddleware from 'middleware/API';
import { routerMiddleware } from 'react-router-redux';

import reducers from 'reducers';
import DevTools from 'containers/DevTools';
import history from 'helpers/routes/history';

const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware, middleware),
    DevTools.instrument()
  )
);

export default store;
