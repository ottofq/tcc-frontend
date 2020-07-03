import styled from 'styled-components';
import {
  Container as ContainerMaterialUI,
  TextField,
  Button as ButtonMaterial,
} from '@material-ui/core';
import media from '../../../styles/media';

export const Container = styled(ContainerMaterialUI).attrs({
  component: 'div',
  maxWidth: 'xl',
})`
  display: flex;
  flex: 1;
`;

export const ContainerLoading = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerEditor = styled.div`
  width: 100%;
  height: calc(100vh - 300px);

  & .editor {
    height: calc(100vh - 300px);
    border: 1px solid var(--borderColorLight);
    padding: 5px;
    border-radius: 2px;
  }

  ${media.lessThan('sm')`
    width: 100%;
    height: calc(100vh - 300px);

  & .editor {
    height: calc(100vh - 300px);
  }
  `}

  ${media.between('md', 'lg')`
    width: 100%;
    height: calc(100vh - 300px);

  & .editor {
    height: calc(100vh - 300px);
  }
  `}
`;

export const Form = styled(ContainerMaterialUI).attrs({
  component: 'form',
  maxWidth: 'md',
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`;

export const Input = styled(TextField)``;

export const Button = styled(ButtonMaterial)`
  background-color: var(--primaryColor);
  font-size: 18px;
`;
