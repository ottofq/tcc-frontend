import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Cardapio from '../../components/Cardapio';
import Aluno from '../../components/Aluno';

import { Container } from './styled';

export default function Main() {
  return (
    <BrowserRouter>
      <Container>
        <Sidebar />
        <Switch>
          <Route
            key="cardapio"
            exact
            path="/dashboard/cardapio/cadastrar"
            component={Cardapio}
          />
          <Route key="aluno" path="/dashboard/aluno" children={Aluno} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
