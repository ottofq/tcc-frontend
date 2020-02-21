import React from 'react';
import { Divider } from '@material-ui/core';
import {
  Home,
  ViewList,
  AddBox,
  Edit,
  RestaurantMenu,
  Info,
  People,
} from '@material-ui/icons';
import logo from '../../assets/logo_sem_texto.png';

import { Container, SidebarLink, Title } from './styled';

export default function Sidebar() {
  return (
    <Container>
      <img src={logo} alt="Logo UFES" />
      <Divider light />
      <nav>
        <ul>
          <li>
            <Title>
              <RestaurantMenu size={32}></RestaurantMenu>
              <h2>Cardápio</h2>
            </Title>

            <SidebarLink
              activeStyle={{ backgroundColor: '#2266b1' }}
              exact
              to="/dashboard"
            >
              <div>
                <Home size={32} />
                <span>Home</span>
              </div>
            </SidebarLink>
          </li>

          <li>
            <SidebarLink
              activeStyle={{ backgroundColor: '#2266b1' }}
              exact
              to="/dashboard/cardapio"
            >
              <div>
                <ViewList size={32} />
                <span>Ver Cardápios</span>
              </div>
            </SidebarLink>
          </li>

          <li>
            <SidebarLink
              activeStyle={{ backgroundColor: '#2266b1' }}
              exact
              to="/dashboard/cardapio/cadastrar"
            >
              <div>
                <AddBox size={32} />
                <span>Cadastar Cardápio</span>
              </div>
            </SidebarLink>
          </li>

          <li>
            <SidebarLink
              activeStyle={{ backgroundColor: '#2266b1' }}
              exact
              to="/dashboard/cardapio/editar"
            >
              <div>
                <Edit size={32} />
                <span>Editar Cardápio</span>
              </div>
            </SidebarLink>
            <Divider />
          </li>

          <li>
            <Title>
              <Info size={32}></Info>
              <h2>Avisos</h2>
            </Title>
            <SidebarLink
              activeStyle={{ backgroundColor: '#2266b1' }}
              exact
              to="/dashboard/avisos/listagem"
            >
              <div>
                <ViewList size={32} />
                <span>Ver Avisos</span>
              </div>
            </SidebarLink>
          </li>

          <li>
            <SidebarLink
              activeStyle={{ backgroundColor: '#2266b1' }}
              exact
              to="/dashboard/avisos/cadastro"
            >
              <div>
                <AddBox size={32} />
                <span>Cadastar Aviso</span>
              </div>
            </SidebarLink>
          </li>

          <li>
            <SidebarLink
              activeStyle={{ backgroundColor: '#2266b1' }}
              exact
              to="/dashboard/avisos/edicao"
            >
              <div>
                <Edit size={32} />
                <span>Editar Aviso</span>
              </div>
            </SidebarLink>
          </li>

          <li>
            <Divider />
            <Title>
              <People size={32}></People>
              <h2>Aluno</h2>
            </Title>
            <SidebarLink
              activeStyle={{ backgroundColor: '#2266b1' }}
              exact
              to="/dashboard/aluno/listagem"
            >
              <div>
                <ViewList size={32} />
                <span>Ver dados dos alunos</span>
              </div>
            </SidebarLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
