import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Cadastro from '../Cardapio/Cadastro';
import Editar from '../Cardapio/Editar';
import Home from '../Cardapio/Home';
import Header from '../../components/Header';
import VerCardapios from '../Cardapio/VerCardapios';

import { Container, Wrapper } from './styled';

export default function Main() {
  return (
    <BrowserRouter>
      <Container>
        <Sidebar />
        <Wrapper>
          <Header />

          <Switch>
            <Route key="cardapio" exact path="/dashboard" component={Home} />
            <Route
              key="cardapio-cadastro"
              exact
              path="/dashboard/cardapio/cadastrar"
              component={Cadastro}
            />
            <Route
              key="cardapio-ver"
              exact
              path="/dashboard/cardapio/"
              component={VerCardapios}
            />

            <Route
              key="cardapio-edicao"
              exact
              path="/dashboard/cardapio/editar"
              component={Editar}
            />
          </Switch>
        </Wrapper>
      </Container>
    </BrowserRouter>
  );
}
