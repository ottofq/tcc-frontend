import React from 'react';
import { Container, ButtonUI } from './styled';

export default function Header() {
  const handleLogout = () => {
    localStorage.removeItem('user');
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
