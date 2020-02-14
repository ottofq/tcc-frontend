import React from 'react';
import { FaHome } from 'react-icons/fa';

import { Container, SidebarLink } from './styled';

export default function Sidebar() {
  return (
    <Container>
      <h2>Cardápio RU</h2>
      <SidebarLink exact to="/">
        <FaHome size={32} />
      </SidebarLink>
      <nav>
        <ul>
          <li>
            <h3>Cardápio</h3>
          </li>
          <li>
            <SidebarLink
              activeStyle={{ backgroundColor: '#12355b' }}
              exact
              to="/dashboard/cardapio"
            >
              Ver Cardápios
            </SidebarLink>
          </li>
          <li>
            <SidebarLink
              activeStyle={{ backgroundColor: '#12355b' }}
              to="/dashboard/cardapio/cadastrar"
            >
              Cadastrar Cardápio
            </SidebarLink>
          </li>
          <li>
            <SidebarLink
              activeStyle={{ backgroundColor: '#12355b' }}
              to="/dashboard/cardapio/editar"
            >
              Editar Cardápio
            </SidebarLink>
          </li>

          <li>
            <SidebarLink
              activeStyle={{ backgroundColor: '#12355b' }}
              to="/dashboard/cardapio/excluir"
            >
              Excluir Cardápio
            </SidebarLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
