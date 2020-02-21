import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #174578;
  align-items: center;
  justify-content: center;
`;

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
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

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 10px;
  }

  form {
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input {
      width: 300px;
    }

    button {
      font-size: 18px;
      background-color: #174578;
      color: #fff;

      &:hover {
        background-color: #0f2c4d;
      }
    }
  }
`;
