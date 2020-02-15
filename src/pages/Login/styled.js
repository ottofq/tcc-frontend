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
  justify-content: space-between;
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
    display: flex;
    height: 200px;
    flex-direction: column;
    justify-content: space-between;

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

  a {
    margin: 10px 0;
    font-size: 18px;
    text-decoration: none;
    color: #174578;
  }
`;
