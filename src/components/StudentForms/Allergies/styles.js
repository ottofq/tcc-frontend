import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const ContainerStudentData = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 270px;
  padding-bottom: 4px;
`;

export const Input = styled(TextField)`
  height: 70px;
  width: 300px;
`;
