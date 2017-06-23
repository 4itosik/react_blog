import React from 'react';

import { Route, Switch } from 'react-router-dom';

import BlogPage from 'components/containers/BlogPage';
import Post from 'components/containers/Post';
import About from 'components/containers/About';
import { postsPath } from 'helpers/routes';

const Routers = () => (
  <Switch>
    <Route exact path='/' component={BlogPage}/>
    <Route path={postsPath()} component={Post}/>
    <Route exact path='/about' component={About}/>
  </Switch>
);

export default Routers;
