import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import media from '../../../styles/media';

export const ContainerCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 270px;
  padding-bottom: 4px;

  ${media.lessThan('sm')`
    width:100%;
    padding: 0px;
    border:0;
    flex-wrap:nowrap;
  `}

  ${media.between('sm', 'md')`
    width:250px;
    padding:0px;

  `}
`;

export const Input = styled(TextField)`
  height: 70px;
  width: 100%;
`;
