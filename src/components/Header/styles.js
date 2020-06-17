import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  height: 50px;
  width: calc(100vw - 240px);
  background-color: #2266b1;
  box-shadow: -1px 0px 4px 0px rgba(50, 50, 50, 0.75);
`;

export const Container = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-around;
  padding: 5px;
  width: 300px;

  button {
    background-color: transparent;
    border: 0;
    color: #fff;
    cursor: pointer;
  }
`;

export const ContainerMenu = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #2266b1;
  align-items: center;

  :hover li {
    display: flex;
    visibility: visible;
    opacity: 1;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  cursor: pointer;

  p {
    margin-left: 10px;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
  }
`;

export const ContainerItems = styled.li`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  background-color: #2266b1;
  border: 1px solid #fff;
  border-radius: 4px;
  width: 120px;
  margin-top: 50px;
  transition: opacity 0.5s, visibility 0.5s;
  z-index: 1;
`;

export const ItemMenu = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  :hover {
    background-color: rgba(246, 250, 253, 0.25);
  }

  a {
    color: #fff;
    font-weight: bold;
    display: inline-block;
    width: 100%;
  }
`;
