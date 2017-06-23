import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';

import Header from 'components/ui/shared/Header';
import Footer from 'components/ui/shared/Footer';

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
