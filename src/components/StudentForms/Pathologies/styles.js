import styled from 'styled-components';
import { styled as styledUI, TextField } from '@material-ui/core';

export const ContainerDadosAluno = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  border-radius: 4px;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 270px;
  padding-bottom: 4px;
`;

export const Input = styledUI(TextField)({
  height: '70px',
  width: '300px',
});
