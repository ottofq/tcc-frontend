import React from 'react';
import { Container, ButtonUI } from './styles';
import { withRouter } from 'react-router-dom';

function Header({ history }) {
  function handleLogout() {
    localStorage.removeItem('@app-ru/user');

    history.push('/');
  }

  return (
    <Container>
      <h6>Cardápio RU CCA-UFES</h6>

      <a style={{ textDecoration: 'none' }} href="/" onClick={handleLogout}>
        <ButtonUI variant="contained">Logout</ButtonUI>
      </a>
    </Container>
  );
}

export default withRouter(Header);
