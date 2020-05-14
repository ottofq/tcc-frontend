import styled from 'styled-components';
import { styled as styledUI, TextField } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  height: 700px;
  width: 1200px;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
`;

export const ContainerDadosAluno = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  justify-content: space-around;
`;

export const Title = styled.h2`
  font-size: 1.2em;
`;

export const Input = styledUI(TextField)({
  width: '250px',
});
