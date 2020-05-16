import styled from 'styled-components';
import { styled as styledUI, TextField } from '@material-ui/core';

export const ContainerDadosAluno = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #bbb;
  justify-content: space-around;
  padding: 10px;
  border-radius: 4px;
`;

export const ContainerRadioButtonAvaliacao = styled.div`
  width: 150px;
  padding-top: 20px;
  div {
    flex-direction: column;
  }
  legend {
    line-height: 20px;
  }
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 270px;
  padding-top: 20px;
  legend {
    line-height: 20px;
  }
`;

export const Input = styledUI(TextField)({
  height: '70px',
  width: '300px',
});
