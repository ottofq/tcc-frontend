import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 5px;
      margin-bottom: 5px;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 1px;
    }

    input {
      padding: 5px 5px;
    }

    button {
      margin: 10px 0px;
      background-color: #174578;
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
`;
