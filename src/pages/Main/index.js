import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Home from '../Cardapio/Home';
import CardapioCadastro from '../Cardapio/Cadastro';
import CardapioEdicao from '../Cardapio/Editar';
import CardapioListagem from '../Cardapio/VerCardapios';
import InfoCadastro from '../Info/Cadastro';
import InfoListagem from '../Info/Listagem';
import InfoEdicao from '../Info/Edicao';
import AlunoListagem from '../Aluno/Listagem';

import { Container, Wrapper } from './styled';

export default function Main() {
  return (
    <BrowserRouter>
      <Container>
        <Sidebar />
        <Wrapper>
          <Header />

          <Switch>
            <Route
              key="cardapio-home"
              exact
              path="/dashboard"
              component={Home}
            />
            <Route
              key="cardapio-cadastro"
              exact
              path="/dashboard/cardapio/cadastrar"
              component={CardapioCadastro}
            />
            <Route
              key="cardapio-listagem"
              exact
              path="/dashboard/cardapio/"
              component={CardapioListagem}
            />

            <Route
              key="cardapio-edicao"
              exact
              path="/dashboard/cardapio/editar"
              component={CardapioEdicao}
            />

            <Route
              key="aviso-cadastro"
              exact
              path="/dashboard/avisos/cadastro"
              component={InfoCadastro}
            />

            <Route
              key="aviso-listagem"
              exact
              path="/dashboard/avisos/listagem"
              component={InfoListagem}
            />

            <Route
              key="aviso-edicao"
              exact
              path="/dashboard/avisos/edicao"
              component={InfoEdicao}
            />

            <Route
              key="aluno-listagem"
              exact
              path="/dashboard/aluno/listagem"
              component={AlunoListagem}
            />
          </Switch>
        </Wrapper>
      </Container>
    </BrowserRouter>
  );
}
