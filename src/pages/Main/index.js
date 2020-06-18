import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import MenuHome from '../Menu/Home';
import CreateMenu from '../Menu/Create';
import MenuEdit from '../Menu/Edit';
import MenuList from '../Menu/List';
import MenuDetails from '../Menu/Details';
import CreateNews from '../News/Create';
import NewsList from '../News/List';
import NewsEdit from '../News/Edit';
import NewsDetails from '../News/Details';
import StudentList from '../Student/List';
import StudentDetails from '../Student/Details';
import StudentCharts from '../Student/Charts';
import Profile from '../User/Profile';

import * as S from './styles';

export default function Main() {
  return (
    <BrowserRouter>
      <S.Container>
        <Sidebar />
        <S.Wrapper>
          <Header />
          <S.ContainerPages>
            <Switch>
              <Route
                key="cardapio-home"
                exact
                path="/dashboard"
                component={MenuHome}
              />

              <Route
                key="cardapio-home"
                exact
                path="/dashboard/cardapio/detalhes/:id"
                component={MenuDetails}
              />

              <Route
                key="cardapio-cadastro"
                exact
                path="/dashboard/cardapio/cadastrar"
                component={CreateMenu}
              />
              <Route
                key="cardapio-listagem"
                exact
                path="/dashboard/cardapio/"
                component={MenuList}
              />

              <Route
                key="cardapio-edicao"
                exact
                path="/dashboard/cardapio/editar/:id"
                component={MenuEdit}
              />

              <Route
                key="aviso-cadastro"
                exact
                path="/dashboard/avisos/cadastro"
                component={CreateNews}
              />

              <Route
                key="aviso-listagem"
                exact
                path="/dashboard/avisos/listagem"
                component={NewsList}
              />

              <Route
                key="aviso-edicao"
                exact
                path="/dashboard/avisos/edicao/:id"
                component={NewsEdit}
              />
              <Route
                key="aviso-detalhes"
                exact
                path="/dashboard/avisos/detalhes/:id"
                component={NewsDetails}
              />

              <Route
                key="aluno-listagem"
                exact
                path="/dashboard/aluno/listagem"
                component={StudentList}
              />
              <Route
                key="aluno-detalhes"
                exact
                path="/dashboard/aluno/detalhes/:id"
                component={StudentDetails}
              />
              <Route
                key="aluno-graficos"
                exact
                path="/dashboard/aluno/graficos"
                component={StudentCharts}
              />
              <Route
                key="user-profile"
                exact
                path="/dashboard/profile"
                component={Profile}
              />
            </Switch>
          </S.ContainerPages>
        </S.Wrapper>
      </S.Container>
    </BrowserRouter>
  );
}
