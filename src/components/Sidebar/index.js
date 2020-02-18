import React from 'react';
import { List, ListItem, Divider } from '@material-ui/core';

import { Home } from '@material-ui/icons';

import { Container, SidebarLink } from './styled';

export default function Sidebar() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Container>
      <h2>Cardápio RU</h2>
      <Divider />
      <nav>
        <List component="ul">
          <ListItem
            component="li"
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}
          >
            <SidebarLink to="/dashboard">
              <Home size={32} />
            </SidebarLink>
          </ListItem>

          <ListItem
            component="li"
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
          >
            <SidebarLink to="/dashboard/cardapio">Ver Cardápios</SidebarLink>
          </ListItem>
          <ListItem
            component="li"
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
          >
            <SidebarLink to="/dashboard/cardapio/cadastrar">
              Cadastrar Cardápio
            </SidebarLink>
          </ListItem>
          <ListItem
            component="li"
            selected={selectedIndex === 3}
            onClick={event => handleListItemClick(event, 3)}
          >
            <SidebarLink to="/dashboard/cardapio/editar">
              Editar Cardápio
            </SidebarLink>
          </ListItem>
        </List>
        <Divider />
      </nav>
    </Container>
  );
}
