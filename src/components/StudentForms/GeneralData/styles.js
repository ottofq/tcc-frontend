import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import media from '../../../styles/media';

export const ContainerStudentData = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  flex-wrap: wrap;
  border: 1px solid #bbb;
  justify-content: space-around;
  padding: 10px;
  border-radius: 4px;

  ${media.lessThan('sm')`
    width:100%;
    border: 0;
    padding: 0px;
    flex-wrap: nowrap;
    height: auto;
  `}
`;

export const ContainerRadioButton = styled.div`
  width: 270px;

  div {
    flex-direction: row;
  }

  ${media.lessThan('sm')`
    width:100%;
  `}
`;

export const Input = styled(TextField)`
  height: 70px;
  width: 30%;

  ${media.lessThan('sm')`
    width:100%;
  `}
`;
