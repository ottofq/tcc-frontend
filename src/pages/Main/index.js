import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Cadastro from '../../components/Cardapio/Cadastro';
import Home from '../../components/Cardapio/Home';

import { Container, Wrapper } from './styled';

export default function Main() {
  return (
    <BrowserRouter>
      <Container>
        <Sidebar />
        <Wrapper>
          <Switch>
            <Route key="cardapio" exact path="/dashboard" component={Home} />
            <Route
              key="cardapio"
              exact
              path="/dashboard/cardapio/cadastrar"
              component={Cadastro}
            />
          </Switch>
        </Wrapper>
      </Container>
    </BrowserRouter>
  );
}
