import styled from 'styled-components';
import { Container as ContainerMateriaUI } from '@material-ui/core';
import media from '../../../styles/media';

export const Container = styled(ContainerMateriaUI).attrs({
  component: 'div',
  maxWidth: 'xl',
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;

  h1 {
    border-left: 4px solid var(--primaryColor);
    padding-left: 4px;
    font-size: 24px;
    font-weight: bold;
    color: var(--primaryColor);
  }

  ${media.lessThan('md')`
    overflow-y:scroll;
    flex-wrap:wrap;
    flex-direction: row;
  `}
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

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
