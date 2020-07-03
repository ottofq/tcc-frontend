import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

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

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const routes = [
    {
      path: '/dashboard',
      component: MenuHome,
      key: 'menu-home',
      exact: true,
    },
    {
      path: '/dashboard/cardapio/cadastrar',
      component: CreateMenu,
      key: 'menu-create',
      exact: true,
    },
    {
      path: '/dashboard/cardapio/listagem',
      component: MenuList,
      key: 'menu-list',
      exact: true,
    },
    {
      path: '/dashboard/cardapio/editar/:id',
      component: MenuEdit,
      key: 'menu-edit',
      exact: true,
    },
    {
      path: '/dashboard/cardapio/detalhes/:id',
      component: MenuDetails,
      key: 'menu-details',
      exact: true,
    },
    {
      path: '/dashboard/noticias/cadastro',
      component: CreateNews,
      key: 'news-create',
      exact: true,
    },
    {
      path: '/dashboard/noticias/listagem',
      component: NewsList,
      key: 'news-list',
      exact: true,
    },
    {
      path: '/dashboard/noticias/detalhes/:id',
      component: NewsDetails,
      key: 'news-details',
      exact: true,
    },
    {
      path: '/dashboard/noticias/editar/:id',
      component: NewsEdit,
      key: 'news-edit',
      exact: true,
    },
    {
      path: '/dashboard/aluno/listagem',
      component: StudentList,
      key: 'student-list',
      exact: true,
    },
    {
      path: '/dashboard/aluno/detalhes/:id',
      component: StudentDetails,
      key: 'student-details',
      exact: true,
    },
    {
      path: '/dashboard/aluno/graficos',
      component: StudentCharts,
      key: 'student-charts',
      exact: true,
    },
    {
      path: '/dashboard/profile',
      component: Profile,
      key: 'user-profile',
      exact: true,
    },
  ];

  return (
    <S.Container>
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <S.Wrapper>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <S.ContainerPages>
          <Switch location={location}>
            {routes.map(route => (
              <Route
                key={route.key}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </S.ContainerPages>
      </S.Wrapper>
    </S.Container>
  );
}
