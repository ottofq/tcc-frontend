import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import media from '../../../styles/media';

export const ContainerStudentData = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #bbb;
  justify-content: space-around;
  padding: 10px;
  border-radius: 4px;

  ${media.lessThan('sm')`
    width:100%;
    padding: 0px;
    border:0;
    flex-direction: column;
  `}
`;

export const ContainerRadioButtonRating = styled.div`
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

export const Input = styled(TextField)`
  height: 70px;
  width: 100%;
`;
