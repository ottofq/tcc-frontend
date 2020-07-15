import {
  Container as ContainerMateriaUI,
  TableContainer as TableContainerMaterial,
  TableHead as TableHeaderMaterial,
  Button as ButtonMaterial,
  TableBody as TableBodyMaterial,
  TableRow as TableRowMaterial,
} from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled(ContainerMateriaUI).attrs({
  component: 'div',
  maxWidth: 'xl',
})`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
`;

export const ContainerLoading = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  justify-content: center;
  align-items: center;
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

export const TableRow = styled(TableRowMaterial)`
  display: ${props => (props.loading ? 'none' : 'table-row')};
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
