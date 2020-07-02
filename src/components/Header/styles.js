import styled from 'styled-components';
import {
  Container as ContainerMateriaUI,
  Typography,
  Menu as MenuMaterialUI,
} from '@material-ui/core';
import media from '../../styles/media';

export const Header = styled.div`
  display: flex;
  height: var(--headerSize);
  background-color: var(--secondaryColor);
  box-shadow: -1px 0px 4px 0px rgba(50, 50, 50, 0.75);
`;

export const Container = styled(ContainerMateriaUI).attrs({
  component: 'div',
  maxWidth: 'xl',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Typography).attrs({
  component: 'h1',
})`
  color: #fff;
  font-weight: bold;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    display: none;
    background-color: transparent;
    border: 0;
    color: #fff;
    cursor: pointer;
  }

  ${media.lessThan('md')`
    button{
      display: inline-block;
    }
  `}
`;

export const ContainerMenu = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: var(--secondaryColor);
  align-items: center;
  height: 3.125rem;
`;

export const ContainerUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-left: 0.625rem;
    font-weight: bold;
    color: #fff;
  }
`;

export const Menu = styled(MenuMaterialUI)`
  margin-top: 1.875rem;

  ul {
    background-color: var(--secondaryColor);

    li {
      color: #fff;
      font-weight: bold;
    }
  }
`;
