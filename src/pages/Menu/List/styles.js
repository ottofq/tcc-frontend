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
  font-size: 1.75rem;
  color: var(--primaryColor);
  strong {
    color: var(--primaryColor);
    font-size: 1.75rem;
    font-weight: bold;
  }
`;

export const TableContainer = styled(TableContainerMaterial)``;

export const TableHead = styled(TableHeaderMaterial)`
  background-color: var(--primaryColor);

  th {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const TableBody = styled(TableBodyMaterial)`
  tr th {
    font-size: 1rem;
  }
`;

export const TableRow = styled(TableRowMaterial)`
  display: ${props => (props.loading ? 'none' : 'table-row')};
`;

export const Button = styled(ButtonMaterial)`
  margin-left: 5px;
  margin-right: 5px;
  height: 30px;
  font-size: 0.75rem;
  font-weight: bold;
`;

export const ContainerActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
