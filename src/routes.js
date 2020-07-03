import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Page404 from './components/404';

import Layout from './pages/Layout';
import Login from './pages/User/Login';
import Register from './pages/User/Register';

export default function Routes() {
  const privateRoutes = [
    {
      path: '/dashboard',
      component: Layout,
      key: 'main-menu-home',
      exact: true,
    },
    {
      path: '/dashboard/cardapio/cadastrar',
      component: Layout,
      key: 'main-menu-create',
      exact: true,
    },
    {
      path: '/dashboard/cardapio/listagem',
      component: Layout,
      key: 'main-menu-list',
      exact: true,
    },
    {
      path: '/dashboard/cardapio/editar/:id',
      component: Layout,
      key: 'main-menu-edit',
      exact: true,
    },
    {
      path: '/dashboard/cardapio/detalhes/:id',
      component: Layout,
      key: 'main-menu-details',
      exact: true,
    },
    {
      path: '/dashboard/noticias/cadastro',
      component: Layout,
      key: 'main-news-create',
      exact: true,
    },
    {
      path: '/dashboard/noticias/listagem',
      component: Layout,
      key: 'main-news-list',
      exact: true,
    },
    {
      path: '/dashboard/noticias/:id',
      component: Layout,
      key: 'main-news-details',
      exact: true,
    },
    {
      path: '/dashboard/noticias/editar/:id',
      component: Layout,
      key: 'main-news-edit',
      exact: true,
    },
    {
      path: '/dashboard/aluno/listagem',
      component: Layout,
      key: 'main-student-list',
      exact: true,
    },
    {
      path: '/dashboard/aluno/detalhes/:id',
      component: Layout,
      key: 'main-student-details',
      exact: true,
    },
    {
      path: '/dashboard/aluno/graficos',
      component: Layout,
      key: 'main-student-charts',
      exact: true,
    },
    {
      path: '/dashboard/profile',
      component: Layout,
      key: 'main-user-profile',
      exact: true,
    },
  ];

  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      {privateRoutes.map(route => (
        <PrivateRoute
          key={route.key}
          path={route.path}
          exact={route.exat}
          component={route.component}
        />
      ))}

      <Route path="*" component={Page404} />
    </Switch>
  );
}
