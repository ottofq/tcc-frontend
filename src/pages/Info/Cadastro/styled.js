import styled from 'styled-components';
import { styled as styledUI } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const TextFieldUI = styledUI(TextField)({
  marginBottom: '20px',
});

export const TextArea = styled.textarea`
  width: 500px;
  height: 300px;
  border: 2px solid #174578;
  marker: inherit;
`;

export const ButtonUI = styledUI(Button)({
  marginTop: '10px',
  backgroundColor: '#174578',
  fontSize: '18px',
});
