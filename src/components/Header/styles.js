import styled from 'styled-components';
import { styled as styledUI } from '@material-ui/core';
import { Button } from '@material-ui/core';

export const Container = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  background-color: #2266b1;
  justify-content: space-between;
  align-items: center;

  h6 {
    margin-left: 20px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
`;

export const ButtonUI = styledUI(Button)({
  backgroundColor: '#fff',
  marginRight: '20px;',
  fontWeight: 'bold',
});
