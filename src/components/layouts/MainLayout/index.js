import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';

import Header from 'components/layouts/MainLayout/Header';
import Footer from 'components/layouts/MainLayout/Footer';

const MainLayout = ({ children }) => (
  <Grid>
    <Header />
    {children}
    <Footer />
  </Grid>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
