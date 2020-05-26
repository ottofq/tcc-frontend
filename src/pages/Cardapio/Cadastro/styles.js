import styled from 'styled-components';
import { styled as styledUI } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  RadioGroup as radio,
  FormLabel as formlabel,
} from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styledUI(TextField)({
  marginTop: '10px',
  width: '600px',
});

export const StyledButton = styledUI(Button)({
  marginTop: '10px',
  backgroundColor: '#174578',
  fontSize: '18px',
});

export const RadioGroup = styledUI(radio)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

export const FormLabel = styledUI(formlabel)({
  fontSize: '18px',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#174578',
});
