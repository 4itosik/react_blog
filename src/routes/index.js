import React from 'react';

import { Route, Switch } from 'react-router-dom';

import BlogPage from 'components/containers/BlogPage';
import Post from 'components/containers/Post';

const Routers = () => (
  <Switch>
    <Route exact path='/' component={BlogPage}/>
    <Route path='/posts/:id' component={Post}/>
  </Switch>
);

export default Routers;
