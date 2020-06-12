import styled from 'styled-components';
import { TextField, Button as ButtonMaterial } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #bbb;
  background-color: #f6fafd;
`;

export const ContainterTitle = styled.div`
  width: 345px;
  margin-bottom: 5px;
  h2 {
    color: #174578;
    font-size: 24px;
    font-weight: bold;
    border-left: 4px solid #174578;
    padding-left: 4px;
    text-align: left;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  height: 500px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #bbb;
  border-radius: 4px;
  background-color: #f6fafd;
  padding: 20px;
`;

export const Input = styled(TextField)`
  width: 300px;
`;

export const Button = styled(ButtonMaterial)`
  background-color: #174578;

  span {
    font-weight: bold;
    font-size: 18px;
  }
`;
