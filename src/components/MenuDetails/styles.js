import styled from 'styled-components';
import { Container as ContainerMateriaUI } from '@material-ui/core';
import media from '../../styles/media';

export const Container = styled(ContainerMateriaUI).attrs({
  component: 'div',
  maxWidth: 'xl',
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;

  h1 {
    border-left: 7px solid var(--primaryColor);
    padding-left: 10px;
    font-size: 1.75rem;
    font-weight: bold;
    color: var(--primaryColor);
  }

  ${media.lessThan('sm')`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `}
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
  align-items: center;

  ${media.lessThan('md')`
    flex-direction:column;
    height:500px;
  `}
`;

export const ContainerLoading = styled.div`
  display: flex;
  height: 170px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
