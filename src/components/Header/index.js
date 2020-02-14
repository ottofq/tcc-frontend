import React from 'react';
import { Container, Logo } from './styled';
import LogoImage from '../../assets/logo.png';

export default function Header() {
  return (
    <Container>
      <Logo src={LogoImage} />
    </Container>
  );
}
