import styled from 'styled-components';
import { Container as ContainerMaterialUI } from '@material-ui/core';

export const Container = styled(ContainerMaterialUI).attrs({
  component: 'div',
  maxWidth: false,
})`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: var(--primaryColor);
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
`;
