import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Page404 from './components/404';

import Layout from './pages/Layout';
import Login from './pages/User/Login';
import Register from './pages/User/Register';

const Routes = () => {
  const routes = [
    {
      path: '/',
      component: Login,
      key: 'login',
      exact: true,
    },
    {
      path: '/register',
      component: Register,
      key: 'register',
      exact: true,
    },
    {
      path: '/dashboard*',
      component: PrivateRoute(Layout),
      key: 'main',
      exact: true,
    },
    {
      path: '*',
      component: Page404,
      exact: false,
      key: '404',
    },
  ];

  return (
    <Switch>
      {routes.map(route => (
        <Route
          key={route.key}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default Routes;
