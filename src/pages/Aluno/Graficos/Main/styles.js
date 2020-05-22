import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  overflow-y: scroll;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  h2 {
    font-weight: bold;
    color: #174578;
    font-size: 1.125em;
    margin-top: 10px;
  }
`;

export const ContainerGrafico = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #bbb;
  background-color: #eee;
  margin: 10px;
  padding: 10px;
`;
