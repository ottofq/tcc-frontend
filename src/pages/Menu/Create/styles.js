import styled from 'styled-components';
import {
  TextField,
  Container as ContainerMaterial,
  Button as ButtonMaterial,
  RadioGroup as RadioGroupMaterial,
  FormLabel as FormLabelMaterial,
} from '@material-ui/core';
import media from '../../../styles/media';

export const Container = styled(ContainerMaterial).attrs({
  component: 'div',
  maxWidth: 'md',
})`
  display: flex;
  flex: 1;
  padding: 1rem;
`;

export const Form = styled.form`
  display: flex;
  height: 100%;
  gap: 2rem;
  flex-direction: column;
  width: 100%;

  ${media.lessThan('sm')`
    max-height: 100%;
    min-height: 37.5rem;
  `}
`;

export const Input = styled(TextField)``;

export const Button = styled(ButtonMaterial)``;

export const RadioGroup = styled(RadioGroupMaterial)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FormLabel = styled(FormLabelMaterial)`
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
  color: var(--primaryColor);
`;
