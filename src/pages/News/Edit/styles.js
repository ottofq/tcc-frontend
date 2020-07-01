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

export const ContainerEditor = styled.div`
  width: 100%;
  height: 600px;

  & .editor {
    height: 500px;
    border: 1px solid var(--borderColorLight);
    padding: 5px;
    border-radius: 2px;
  }
  & .toolbar {
    background-color: var(--backgroudLight);
    border: 1px solid var(--borderColorLight);
  }

  ${media.lessThan('sm')`
    width: 100%;
    height: calc(100vh - 200px);

  & .editor {
    height: calc(100vh - 400px);
  }
  `}

  ${media.between('md', 'lg')`
    width: 100%;
    height: calc(100vh - 200px);

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
