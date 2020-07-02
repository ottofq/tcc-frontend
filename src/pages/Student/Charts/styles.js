import styled from 'styled-components';
import { Container as ContainerMateriaUI } from '@material-ui/core';
import media from '../../../styles/media';

export const Container = styled(ContainerMateriaUI).attrs({
  component: 'div',
  maxWidth: 'xl',
})`
  display: flex;
  flex: 1;
  overflow-y: scroll;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;

  h2 {
    font-weight: bold;
    color: var(--primaryColor);
    font-size: 1.125rem;
    margin-top: 10px;
  }

  ${media.lessThan('md')`
  h2 {
    font-size: 1rem;
  }
  `}
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding-top: 10px;
  color: var(--primaryColor);

  ${media.lessThan('md')`
    font-size: 1.125rem;
  `}
`;

export const ContainerChart = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--borderColorLight);
  border-radius: 4px;
  background-color: var(--backgroudLight);
  margin: 10px;
  padding: 10px;

  ${media.lessThan('md')`
    width: 100%;
  `}

  ${media.greaterThan('xl')`
  width: 700px;
  `}
`;

export const ContainerLoading = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
