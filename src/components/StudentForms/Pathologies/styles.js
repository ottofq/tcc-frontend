import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const ContainerCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 270px;
  padding-bottom: 4px;
`;

export const Input = styled(TextField)`
  height: 70px;
  width: 100%;
`;
