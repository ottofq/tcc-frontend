import styled from 'styled-components';
import { TextField, Button as MaterialUIButton } from '@material-ui/core';
import media from '../../../styles/media';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: var(--primaryColor);
  align-items: center;
  justify-content: center;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 500px;
  width: 400px;
  background-color: #fff;
  border-radius: 4px;

  img {
    width: 200px;
    height: 150px;
    margin: 10px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  a {
    font-size: 1.125rem;
    text-decoration: none;
    color: var(--primaryColor);
  }

  ${media.lessThan('md')`
    width: 320px;
  `}
`;

export const Form = styled.form`
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;

  ${media.lessThan('md')`
    width: 300px;
  `}
`;

export const Input = styled(TextField)`
  width: 100%;
`;

export const Button = styled(MaterialUIButton)`
  font-size: 1.125rem;
`;
