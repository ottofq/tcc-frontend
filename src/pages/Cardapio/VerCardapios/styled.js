import { styled as styledUI } from '@material-ui/core';

import {
  TableContainer as container,
  Table,
  TableHead as head,
  TableCell,
  Button as button,
  TableRow,
  Paper,
  TableBody as body,
} from '@material-ui/core';

export const TableContainer = styledUI(container)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  marginBottom: '20px',
  marginLeft: '20px',
  marginRight: '20px',
});
export const TableHead = styledUI(head)({
  backgroundColor: '#174578',

  '& th': {
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
  },
});

export const TableBody = styledUI(body)({
  '& tr th': {
    fontSize: '16px',
  },
});

export const Button = styledUI(button)({
  marginLeft: '5px',
  marginRight: '5px',
  height: '30px',
  fontSize: '12px',
});
