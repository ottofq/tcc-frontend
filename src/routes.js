import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" exact component={Main} />
      <Route path="/dashboard/cardapio" exact component={Main} />
      <Route path="/dashboard/cardapio/cadastrar" exact component={Main} />
      <Route path="/dashboard/cardapio/editar" exact component={Main} />
      <Route path="/login" exact component={Login} />
    </Switch>
  );
}
