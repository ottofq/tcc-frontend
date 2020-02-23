import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Page404 from './components/404';

import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />

      <PrivateRoute path="/dashboard" exact component={Main} />
      <PrivateRoute path="/dashboard/:id" exact component={Main} />
      <PrivateRoute path="/dashboard/cardapio" exact component={Main} />
      <PrivateRoute
        path="/dashboard/cardapio/cadastrar"
        exact
        component={Main}
      />
      <PrivateRoute
        path="/dashboard/cardapio/detalhes/:id"
        exact
        component={Main}
      />
      <PrivateRoute
        path="/dashboard/cardapio/editar/:id"
        exact
        component={Main}
      />
      <PrivateRoute path="/dashboard/avisos/cadastro" exact component={Main} />
      <PrivateRoute path="/dashboard/avisos/listagem" exact component={Main} />
      <PrivateRoute path="/dashboard/avisos/edicao" exact component={Main} />
      <PrivateRoute path="/dashboard/avisos/cardapio" exact component={Main} />
      <PrivateRoute path="/dashboard/aluno/listagem" exact component={Main} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
