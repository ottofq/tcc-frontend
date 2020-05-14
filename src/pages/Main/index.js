import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Home from '../Cardapio/Home';
import CardapioCadastro from '../Cardapio/Cadastro';
import CardapioEdicao from '../Cardapio/Editar';
import CardapioListagem from '../Cardapio/VerCardapios';
import CardapioDetalhes from '../Cardapio/Detalhes';
import InfoCadastro from '../Info/Cadastro';
import InfoListagem from '../Info/Listagem';
import InfoEdicao from '../Info/Edicao';
import InfoDetalhes from '../Info/Detalhes';
import AlunoListagem from '../Aluno/Listagem';
import AlunoDetalhes from '../Aluno/Detalhes';

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
              key="cardapio-home"
              exact
              path="/dashboard/cardapio/detalhes/:id"
              component={CardapioDetalhes}
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
              path="/dashboard/cardapio/editar/:id"
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
              path="/dashboard/avisos/edicao/:id"
              component={InfoEdicao}
            />
            <Route
              key="aviso-detalhes"
              exact
              path="/dashboard/avisos/detalhes/:id"
              component={InfoDetalhes}
            />

            <Route
              key="aluno-listagem"
              exact
              path="/dashboard/aluno/listagem"
              component={AlunoListagem}
            />
            <Route
              key="aluno-detalhes"
              exact
              path="/dashboard/aluno/detalhes/:id"
              component={AlunoDetalhes}
            />
          </Switch>
        </Wrapper>
      </Container>
    </BrowserRouter>
  );
}
