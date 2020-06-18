import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const ContainerStudentData = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  flex-wrap: wrap;
  border: 1px solid #bbb;
  justify-content: space-around;
  padding: 10px;
  border-radius: 4px;
`;

export const ContainerRadioButton = styled.div`
  width: 270px;

  div {
    flex-direction: row;
  }
`;

export const Input = styled(TextField)`
  height: 70px;
  width: 30%;
`;
