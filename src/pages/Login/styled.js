import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #174578;
  align-items: center;
  justify-content: center;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 320px;
  width: 320px;
  background-color: #fff;
  border-radius: 4px;

  img {
    margin: 10px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 5px;
      color: #666;
    }

    button {
      margin: 10px 0px;
      background-color: #174578;
      align-self: stretch;
      font-size: 18px;
      color: #fff;
      height: 40px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #0f2c4d;
      }
    }
  }

  a {
    margin: 10px 0;
    font-size: 18px;
    text-decoration: none;
    color: #174578;
  }
`;
