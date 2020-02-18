import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Cadastro from '../Cardapio/Cadastro';
import Home from '../Cardapio/Home';
import VerCardapios from '../Cardapio/VerCardapios';

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
            <Route
              key="cardapio"
              exact
              path="/dashboard/cardapio/"
              component={VerCardapios}
            />
          </Switch>
        </Wrapper>
      </Container>
    </BrowserRouter>
  );
}
