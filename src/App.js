import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import MainLayout from 'components/layouts/MainLayout';
import Routers from 'routes';

import store from 'store';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();


class App extends React.Component {
  render() {
    history.listen((location, action) => {
      console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
      console.log(`The last navigation action was ${action}`);
    })

    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <MainLayout>
            <Routers />
          </MainLayout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
