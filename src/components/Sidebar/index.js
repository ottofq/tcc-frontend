import React from 'react';
import { Divider } from '@material-ui/core';
import { Home, ViewList, AddBox, Edit } from '@material-ui/icons';
import logo from '../../assets/logo_sem_texto.png';

import { Container, SidebarLink } from './styled';

export default function Sidebar() {
  return (
    <Container>
      <img src={logo} alt="Logo UFES" />
      <Divider light />
      <nav>
        <ul>
          <li>
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
          </li>
        </ul>
        <Divider />
      </nav>
    </Container>
  );
}
