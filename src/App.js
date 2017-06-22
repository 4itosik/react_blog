import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainLayout from 'components/layouts/MainLayout';
import Routers from 'routes/index';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Routers />
    </MainLayout>
  </BrowserRouter>
);

export default App;
