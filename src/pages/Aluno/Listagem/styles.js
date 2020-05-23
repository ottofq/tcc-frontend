import {
  styled as styledUI,
  TableContainer,
  TableHead,
  Button,
  TableBody,
} from '@material-ui/core';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #174578;
  strong {
    color: #174578;
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Card = styled.div`
  background-color: #eee;
  align-self: center;
  border-radius: 4px;
  box-shadow: -1px 0px 4px 0px rgba(50, 50, 50, 0.75);
  padding: 15px;
  margin-bottom: 10px;

  &:hover {
    background-color: rgba(50, 50, 50, 0.1);
    box-shadow: -1px 0px 8px 0px rgba(50, 50, 50, 0.75);
    transition: box-shadow 0.5s 0s ease;
  }
`;
export const TableContainerUI = styledUI(TableContainer)({});
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
