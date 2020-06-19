import {
  TableContainer as TableContainerMaterial,
  TableHead as TableHeaderMaterial,
  Button as ButtonMaterial,
  TableBody as TableBodyMaterial,
} from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
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

export const Title = styled.h1`
  font-size: 24px;
  color: #174578;
  strong {
    color: #174578;
    font-size: 24px;
    font-weight: bold;
  }
`;

export const TableContainer = styled(TableContainerMaterial)``;

export const TableHead = styled(TableHeaderMaterial)`
  background-color: #174578;

  th {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const TableBody = styled(TableBodyMaterial)`
  tr th {
    font-size: 16px;
  }
`;

export const Button = styled(ButtonMaterial)`
  margin-left: 5px;
  margin-right: 5px;
  height: 30px;
  font-size: 12px;
  font-weight: bold;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
