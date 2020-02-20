import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, ButtonUI } from './styled';

export default function Header() {
  const history = useHistory();

  const handleLogout = () => {
    history.push('/');
  };

  return (
    <Container>
      <h6>Cardápio RU CCA-UFES</h6>

      <ButtonUI onClick={handleLogout} variant="contained">
        Logout
      </ButtonUI>
    </Container>
  );
}
