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

export const ContainerActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
