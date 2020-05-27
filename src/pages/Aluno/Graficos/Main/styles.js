import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  padding-top: 10px;
  color: #174578;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  overflow-y: scroll;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
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
  background-color: #f6fafd;
  margin: 10px;
  padding: 10px;
`;

export const ContainerLoading = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
