import styled from 'styled-components';
import {
  TextField,
  Button as ButtonMaterial,
  RadioGroup as RadioGroupMaterial,
  FormLabel as FormLabelMaterial,
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

export const Input = styled(TextField)`
  margin-top: 10px;
  width: 600px;
`;

export const Button = styled(ButtonMaterial)`
  margin-top: 10px;
  background-color: #174578;
  font-size: 18px;
`;

export const RadioGroup = styled(RadioGroupMaterial)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FormLabel = styled(FormLabelMaterial)`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #174578;
`;
