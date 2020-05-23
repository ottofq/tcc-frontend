import { styled as styledUI } from '@material-ui/core';
import styled from 'styled-components';

import {
  TableContainer,
  TableHead,
  Button,
  TableBody,
} from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
`;

export const TableContainerUI = styledUI(TableContainer)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  marginBottom: '20px',
  marginLeft: '20px',
  marginRight: '20px',
});
export const TableHeadUI = styledUI(TableHead)({
  backgroundColor: '#174578',

  '& th': {
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
  },
});

export const TableBodyUI = styledUI(TableBody)({
  '& tr th': {
    fontSize: '16px',
  },
});

export const ButtonUI = styledUI(Button)({
  marginLeft: '5px',
  marginRight: '5px',
  height: '30px',
  fontSize: '12px',
  fontWeight: 'bold',
});

export const ContainerAcoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
