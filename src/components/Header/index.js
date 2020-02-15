import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { Container, Logo } from './styled';

export default function Header() {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <h1>News</h1>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
