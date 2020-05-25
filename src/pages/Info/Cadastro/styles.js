import styled from 'styled-components';
import { styled as styledUI } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerEditor = styled.div`
  width: 900px;
  height: 550px;

  & .editor {
    height: 460px;
    border: 1px solid #999;
    padding: 5px;
    border-radius: 2px;
  }
  & .toolbar {
    background-color: #eee;
    border: 1px solid #999;
  }
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`;

export const TextFieldUI = styledUI(TextField)({});

export const ButtonUI = styledUI(Button)({
  backgroundColor: '#174578',
  fontSize: '18px',
});
