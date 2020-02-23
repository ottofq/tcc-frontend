import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/dashboard" exact component={Main} />
      <Route path="/dashboard/:id" exact component={Main} />
      <Route path="/dashboard/cardapio" exact component={Main} />
      <Route path="/dashboard/cardapio/cadastrar" component={Main} />
      <Route path="/dashboard/cardapio/detalhes/:id" component={Main} />
      <Route path="/dashboard/cardapio/editar/:id" component={Main} />
      <Route path="/dashboard/avisos/cadastro" exact component={Main} />
      <Route path="/dashboard/avisos/listagem" exact component={Main} />
      <Route path="/dashboard/avisos/edicao" exact component={Main} />
      <Route path="/dashboard/avisos/cardapio" exact component={Main} />
      <Route path="/dashboard/aluno/listagem" exact component={Main} />
    </Switch>
  );
}
