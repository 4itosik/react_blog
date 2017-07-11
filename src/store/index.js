import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';
import DevTools from 'containers/DevTools';
import history from 'helpers/routes/history';

const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, middleware),
    DevTools.instrument()
  )
);

export default store;
